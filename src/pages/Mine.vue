<template>
    <div class="container">
        <div class="userInfo">
            <el-button @click="dropOut">退出登录</el-button>
        </div>
        <vue-footer></vue-footer>
    </div>
</template>

<script>
    import VueHeader from "../components/vueHeader";
    import VueFooter from "../components/vueFooter";
    import store from "../store";

    export default {
        name: "Mine",
        components: {VueFooter, VueHeader},
        data() {
            return {}
        },
        methods: {
            dropOut() {
                let time = new Date();
                let v = document.cookie;
                time.setTime(time.getTime() + 24 * 60 * 60 * 1000);//过期时间1天
                let userData = JSON.parse(v.split('=')[1]);
                userData.forEach(i => {
                    i.status = false;
                });
                document.cookie = 'myApplication=' + JSON.stringify(userData) + ";expires=" + time.toGMTString();
                this.$store.commit('actionIncrease', {
                    userInfo: {
                        userAccountNumber: '',
                        userPassword: ''
                    },
                    status: false,
                    recording: {}
                });
                this.$router.push('/login');
            }
        }
    }
</script>

<style scoped lang="less">
    .container {
        position: fixed;
        width: 100%;
        height: 100%;
        background: #F5F7FA;

        .userInfo {

        }
    }
</style>