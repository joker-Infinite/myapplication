export default {
    data() {
        return {}
    },
    methods: {
        /**
         *@param userInfo
         *@param recording
         *@param operation
         * 根据用户的操作来决定信息的存储及更新数据
         * */
        setCookie(userInfo, recording, operation) {
            let time = new Date();
            time.setTime(time.getTime() + 365 * 24 * 60 * 60 * 1000);//过期时间1年
            // document.cookie = name + "=" + escape(value) + ";expires=" + time.toGMTString();
            //存放所有用户的大对象
            let userData = [];
            //存储单一用户信息的对象
            let data = {
                //用户信息
                userInfo: {},
                //用户登录状态(默认false)
                status: false,
                //用户操作及浏览记录
                recording: {}
            };
            //如果没有本地没有存储cookie；那就可以直接新增该用户，否则校验用户名唯一性
            if (!!document.cookie) {
                let v = document.cookie;
                let h_u = userData = JSON.parse(v.split('=')[1]);
                //注册且已有用户信息，需要检查用户是否已注册
                if (operation === 'registered') {
                    if (h_u.length === 1) {
                        if (h_u[0].userInfo.userAccountNumber === userInfo.userAccountNumber) {
                            return false;
                        }
                        if (h_u[0].userInfo.userAccountNumber !== userInfo.userAccountNumber) {
                            data.userInfo = userInfo;
                            userData.push(data);
                            document.cookie = 'myApplication=' + JSON.stringify(userData) + ";expires=" + time.toGMTString();
                            return true;
                        }
                    }
                    if (h_u.length > 1) {
                        let m = 0;
                        h_u.forEach(i => {
                            if (i.userInfo.userAccountNumber === userInfo.userAccountNumber) {
                                m++;
                            }
                        });
                        if (m > 0) {
                            return false;
                        } else {
                            data.userInfo = userInfo;
                            userData.push(data);
                            document.cookie = 'myApplication=' + JSON.stringify(userData) + ";expires=" + time.toGMTString();
                            return true;
                        }
                    }
                }
                //登录，需设置用户的登录状态
                if (operation === 'login') {
                    userData.forEach(i => {
                        if (i.userInfo.userAccountNumber === userInfo.userAccountNumber) {
                            i.status = true;
                        }
                        if (i.userInfo.userAccountNumber !== userInfo.userAccountNumber) {
                            i.status = false;
                        }
                    });
                    document.cookie = 'myApplication=' + JSON.stringify(userData) + ";expires=" + time.toGMTString();
                }
            }

            if (!document.cookie) {
                data.userInfo = userInfo;
                userData.push(data);
                document.cookie = 'myApplication=' + JSON.stringify(userData) + ";expires=" + time.toGMTString();
                return true;
            }
        },
        /**
         *@param userInfo
         *@param recording
         *@param operation
         * 获取已有cookie
         * */
        getCookie(userInfo, recording, operation) {
            if (!document.cookie) {
                return false;
            }
            if (document.cookie) {
                let m = 1;
                let data = {};
                let v = document.cookie;
                let userData = JSON.parse(v.split('=')[1]);
                userData.forEach(i => {
                    if (i.userInfo.userAccountNumber === userInfo.userAccountNumber && i.userInfo.userPassword === userInfo.userPassword) {
                        m = 0;
                    }
                });
                if (operation === 'login') {
                    userData.forEach(i => {
                        if (i.userInfo.userAccountNumber === userInfo.userAccountNumber) {
                            i.status = true;
                            data = i;
                        }
                        if (i.userInfo.userAccountNumber !== userInfo.userAccountNumber) {
                            i.status = false;
                        }
                    });
                    document.cookie = 'myApplication=' + JSON.stringify(userData);
                }
                if (m === 0) {
                    this.$store.commit('actionIncrease', data);
                    return true;
                }
                if (m === 1) {
                    return false;
                }
            }
        }
    }
}