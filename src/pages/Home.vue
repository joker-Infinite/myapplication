<template>
    <div class="container" :style="{height:height,width:width}">
        <vue-header></vue-header>
        <div style="width: 100%;height: 40px"></div>
        <vue-scroll :ops="{bar:{background:'#1f1f1f',opacity:0.1},scrollPanel:{scrollingX:false}}"
                    ref="scroll">
            <!--轮播-->
            <van-swipe height="150px" :autoplay="1000" @change="Change">
                <van-swipe-item>
                    <img class="img" src="../assets/img/风景/5d26e07cd1e72f9ff6f5c6ec1b74e6a7.jpg">
                </van-swipe-item>
                <van-swipe-item>
                    <img class="img" src="../assets/img/风景/4661dd417672eec50e23ad26df73775a.jpg">
                </van-swipe-item>
                <van-swipe-item>
                    <img class="img" src="../assets/img/风景/40830db6eb4f928bf7e9f85ca440811d.jpg">
                </van-swipe-item>
                <van-swipe-item>
                    <img class="img" src="../assets/img/风景/4413736927db76c71baf97f0822b1249.jpg">
                </van-swipe-item>
                <van-swipe-item>
                    <img class="img" src="../assets/img/风景/aee11177887cd18c3c493bd72a06c9a6.jpg">
                </van-swipe-item>
            </van-swipe>
            <ul class="service">
                <li class="smollService"></li>
            </ul>
        </vue-scroll>
        <vue-footer></vue-footer>
    </div>
</template>

<script>
    import VueHeader from "../components/vueHeader";
    import VueFooter from "../components/vueFooter";
    import VueScroll from 'vuescroll'

    export default {
        name: "Home",
        components: {VueFooter, VueHeader, VueScroll},
        data() {
            return {
                height: "",
                width: ""
            }
        },
        methods: {
            Change(index) {
                // console.log(index);
            }
        },
        mounted() {
            this.height = window.screen.height + "px";
            this.width = window.screen.width + "px";
        }
    }
</script>

<style scoped lang="less">
    .container {
        position: fixed;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background: #F5F7FA;

        .service {
            width: 100%;
            height: 100px;
            background: red;
            list-style: none;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-around;
        }
    }

    .Carousel {
        width: 100%;
        height: 150px;
        background: #3388dd;
    }

    .img {
        width: 100%;
        height: 150px;
    }
</style>