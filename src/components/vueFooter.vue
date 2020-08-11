<template>
    <div class="footer">
        <ul class="footer-bar">
            <!--  <router-link to="/">首页</router-link>
              <router-link to="/collect">收藏</router-link>
              <router-link to="/shoppingCart">购物车</router-link>
              <router-link to="/mine">我的</router-link>-->
            <li :class="{'li':true,color:path == '/Home'}" @click="goTo('/Home')">
                <i class="el-icon-view i"></i>
                <p class="p">首页</p></li>
            <li :class="{'li':true,color:path == '/collect'}" @click="goTo('/collect')">
                <i class="el-icon-star-off i"></i>
                <p class="p">收藏</p></li>
            <li :class="{'li':true,color:path == '/shoppingCart'}" @click="goTo('/shoppingCart')">
                <i class="el-icon-time i"></i>
                <p class="p">历史记录</p></li>
            <li :class="{'li':true,color:path == '/mine'}" @click="goTo('/mine')">
                <i class="el-icon-user i"></i>
                <p class="p">我的</p></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "vueFooter",
        data() {
            return {
                path: ''
            }
        },
        methods: {
            goTo(v) {
                if (v != this.path) {
                    this.$router.push(v);
                }
            }
        },
        mounted() {
            this.path = this.$route.path;
        }
    }
</script>

<style scoped lang="less">
    .footer {
        position: absolute;
        bottom: 0;
        left: 0;
        background: #333;
        height: 50px;
        width: 100%;

        .footer-bar {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-around;
            color: white;

            .li {
                text-align: center;

                .i {
                    font-size: 24px;
                    line-height: 30px;
                }

                .p {
                    font-size: 14px;
                }
            }

            .color {
                color: #38d !important;
            }
        }

    }
</style>