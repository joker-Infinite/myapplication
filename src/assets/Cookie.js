export default {
    data() {
        return {}
    },
    methods: {
        setCookie(key, val) {
            document.cookie = key + '-' + val;
        },
        getCookie(key, val) {
            let userData = document.cookie;
            let userInfo = JSON.parse(userData.split('-')[0]);
            if (key.userAccountNumber === userInfo.userAccountNumber && key.userPassword === userInfo.userPassword) {
                this.$notify({type: 'success', message: '欢迎' + key.userAccountNumber + '登录！'});
            }
        }
    }
}