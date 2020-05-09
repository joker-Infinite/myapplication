export default {
    data() {
        return {}
    },
    methods: {
        setCookie(key, val, useLocal) {
            if (!!document.cookie) {
                let users = this.allUser(document.cookie);
                if (users.indexOf(key.userAccountNumber) == -1) {
                    document.cookie = key.userAccountNumber + '=' + key.userPassword + '-data=' + JSON.stringify(val);
                    return true;
                }
                return false;
            }
            document.cookie = key.userAccountNumber + '=' + key.userPassword + '-data=' + JSON.stringify(val);
            return true;
        },
        getCookie(key, val, useLocal) {
            if (!!document.cookie) {
                if (this.userLogin(document.cookie, key.userAccountNumber, key.userPassword)) {
                    return true;
                }
                return false;
            }
            return false;
        },
        /*注册时 处理所有用户*/
        allUser(data) {
            let arr = data.split(';');
            let users = '';
            arr.forEach(item => {
                users += item.split('-')[0].split('=')[0] + ',';
            });
            return users;
        },
        /*登录时 判断用户*/
        userLogin(data, user, pasw) {
            let arr = data.split(';');
            let pas = '';
            arr.forEach(item => {
                if (user == item.split('-')[0].split('=')[0]) {
                    pas = item.split('-')[0].split('=')[1];
                }
            });
            if (pas == pasw) {
                return true;
            }
            return false;
        }
    }
}