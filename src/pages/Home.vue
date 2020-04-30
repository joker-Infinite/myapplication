<template>
    <div class="container">
        <vue-header></vue-header>
        <div style="width: 100%;height: 40px"></div>
        <vue-scroll :ops="{bar:{background:'#1f1f1f',opacity:0.1},scrollPanel:{scrollingX:false}}"
                    ref="scroll">
            <!--轮播-->
            <van-swipe height="150px" :autoplay="1000" @change="Change">
                <van-swipe-item v-for="(img, index) in images" :key="index">
                    <img :title="index" :alt="index" class="img" :src="img"/>
                </van-swipe-item>
            </van-swipe>
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
                images: [
                    '/img/5d26e07cd1e72f9ff6f5c6ec1b74e6a7.b002a679.jpg',
                    '/img/4661dd417672eec50e23ad26df73775a.d555a946.jpg',
                    '/img/40830db6eb4f928bf7e9f85ca440811d.a53b4877.jpg',
                    '/img/4413736927db76c71baf97f0822b1249.7018de24.jpg',
                    '/img/aee11177887cd18c3c493bd72a06c9a6.7f18f99f.jpg',
                ]
            }
        },
        methods: {
            Change(index) {
                console.log(index);
            }
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