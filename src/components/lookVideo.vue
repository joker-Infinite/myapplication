<template>
    <div :style="{height:height,width:width}" class="video">
        <div @click="$router.go(-1)" class="goBack"><i class="el-icon-arrow-left"></i></div>
        <div class="iframe_box">
            <iframe class="iframe" :src="url"></iframe>
            <div class="content_text">{{content}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "lookVideo",
        data() {
            return {
                height: 0,
                width: 0,
                url: '',
                content: ''
            }
        },
        methods: {},
        mounted() {
            this.height = window.screen.height + "px";
            this.width = window.screen.width + "px";
        },
        created() {
            let id = this.$route.query.id;
            this.axios.get('https://api.apiopen.top/videoRecommend?id=127398').then(r => {
                let data = r.data.result;
                data.forEach(i => {
                    if (i.data.id == id) {
                        this.url = i.data.playUrl;
                        this.content = i.data.description;
                    }
                })
            })
        }
    }
</script>

<style scoped lang="less">
    .video {
        background: rgba(0, 0, 0, .5);
        position: relative;

        .goBack {
            width: 30px;
            height: 30px;
            border-radius: 100%;
            background: rgba(0, 0, 0, .4);
            position: absolute;
            top: 5px;
            left: 5px;
            color: white;
            border: 1px solid rgba(0, 0, 0, .5);
            line-height: 30px;
            text-align: center;
            font-size: 22px;
        }

        .iframe_box {
            width: 100%;
            position: absolute;
            height: 600px;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            border: none;

            .iframe {
                width: 100%;
                position: absolute;
                height: 250px;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
                border: none;
            }

            .content_text {
                color: white;
                text-indent: 20px;
                position: absolute;
                top: 430px;
            }
        }
    }
</style>