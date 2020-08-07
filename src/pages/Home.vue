<template>
    <div class="container" :style="{height:height,width:width}">
        <!--        <vue-header></vue-header>-->
        <!--        <div style="width: 100%;height: 40px"></div>-->
        <vue-scroll :ops="{bar:{background:'#1f1f1f',opacity:0.1},scrollPanel:{scrollingX:false}}"
                    ref="scroll">
            <!--轮播-->
            <van-swipe height="150px" :autoplay="2000" @change="Change">
                <van-swipe-item v-for="i in videoDetails">
                    <van-image fit="cover" :alt="i.descriptionEditor" :title="i.description" :src="i.cover.detail"
                               height="10rem"></van-image>
                </van-swipe-item>
            </van-swipe>
            <div class="service">
                <div class="smollService" v-for="i in videoDetails">
                    <!--                    <iframe :src="i.playUrl"></iframe>-->
                    <van-image fit="cover" :alt="i.descriptionEditor" :title="i.description" :src="i.cover.detail"
                               height="10rem"></van-image>
                    <p class="content_bottom" :title="i.description" @click="openVideo(i)">{{i.description}}</p>
                    <div class="titleShow">{{i.category}}</div>
                </div>
                <div style="height: 50px;width: 100%"></div>
            </div>
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
                width: "",
                videoDetails: []
            }
        },
        methods: {
            Change(index) {
                // console.log(index);
            },
            openVideo(i) {
                this.$router.push('/lookVideo?id=' + i.id)
            }
        },
        mounted() {
            this.height = window.screen.height + "px";
            this.width = window.screen.width + "px";
        },
        created() {
            this.axios.get('https://api.apiopen.top/videoRecommend?id=127398').then(r => {
                let data = r.data.result;
                this.$store.commit('setDisplayData', data);
                data.forEach(i => {
                    this.videoDetails.push(i.data);
                })
            })
        }
    }
</script>

<style scoped lang="less">
    * {
        margin: 0;
        padding: 0;
    }

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
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;

            .smollService {
                width: 100%;
                margin: 3px 0;
                position: relative;

                .content_bottom {
                    padding: 0 10px;
                    text-indent: 10px;
                    -webkit-line-clamp: 2;
                    line-clamp: 2;
                    max-height: 40px;
                    white-space: nowrap;
                    cursor: pointer;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }

                .content_bottom:hover {
                    color: #3388dd;
                }

                .titleShow {
                    position: absolute;
                    width: 35px;
                    height: 25px;
                    text-align: center;
                    line-height: 25px;
                    border: 1px solid #838383;
                    top: 0;
                    right: 0;
                    background-color: rgba(0, 0, 0, .3);
                    color: white;
                }
            }
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