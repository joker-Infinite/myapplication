<template>
    <div class="header">
        <ul class="list">
            <li class="goBack">
                <!--                <button class="btn1" @click="$router.go(-1)" v-if="path !== '/'"> <</button>-->
                <button class="btn1 el-icon-s-unfold" @click="openMenu"></button>
            </li>
            <li class="searchInput">
                <el-input v-model="searchValue" size="mini"></el-input>
            </li>
            <li class="searchButton">
                <button class="btn2" @click="search(searchValue)">搜索</button>
            </li>
        </ul>
        <van-popup v-model="showMenu" position="left" :style="{ height: '100%' ,width:'80%',background:'#f1f1f1'}">
            <!--快捷 功能-->
            <ul class="fastFeatures">
                <li v-for="i in 4" class="con">
                    <span class="fastIcon">
                        <van-icon v-if="i===1" name="scan" style="line-height: 54px"></van-icon>
                        <p v-if="i===1" class="text">扫一扫</p>
                        <van-icon v-if="i===2" name="qr" style="line-height: 54px"></van-icon>
                         <p v-if="i===2" class="text">二维码</p>
                        <van-icon v-if="i===3" name="friends-o" style="line-height: 54px"></van-icon>
                         <p v-if="i===3" class="text">朋友</p>
                        <van-icon v-if="i===4" name="logistics" style="line-height: 54px"></van-icon>
                         <p v-if="i===4" class="text">驾车</p>
                    </span>
                </li>
            </ul>
            <!--扩展 功能-->
            <ul class="fastFeatures height">
                <!--听歌识曲-->
                <li class="listenToSongs">
                    <i class="el-icon-mic"></i>
                    听歌识曲
                </li>
                <!--音乐工具-->
                <li class="musicTools">
                    <i class="el-icon-s-operation"></i>
                    音乐工具
                </li>
            </ul>
            <!--充值服务-->
            <div class="rechargeService">
                <van-cell icon="user-o" title="创作者平台" value="歌曲自助发行"/>
                <van-cell icon="envelop-o" title="消息中心"/>
                <van-cell icon="photo-o" title="皮肤中心" value="智能云出游"/>
                <van-cell icon="gem-o" title="我的会员"/>
                <van-cell icon="gift-o" title="流量包月"/>
            </div>
            <div class="moreService">
                <van-cell icon="circle" title="唱片店" value="永远的君主"></van-cell>
                <van-cell icon="service-o" title="蝰蛇音效" value="一键派对上线"></van-cell>
                <van-cell icon="coupon-o" title="胖旺淘票" value="演出票务点这里"></van-cell>
                <van-cell icon="fire-o" title="跑步听歌"></van-cell>
                <van-cell icon="music-o" title="铃声彩铃"></van-cell>
                <van-cell icon="shop-o" title="酷狗商城" value="酷狗新品耳机"></van-cell>
                <van-cell icon="underway-o" title="定时关闭"></van-cell>
                <van-cell icon="flower-o" title="青少年模式"></van-cell>
            </div>
            <!--设置 退出登录 退出-->
            <ul class="footerBar">
                <li class="setting">
                    <i class="footerBarIcon el-icon-setting"></i>设置
                </li>
                <li class="signOut">
                    <i class="footerBarIcon el-icon-right"></i>退出登录
                </li>
                <li class="dropOut">
                    <i class="footerBarIcon el-icon-switch-button"></i>退出
                </li>
            </ul>
        </van-popup>
    </div>
</template>

<script>
    export default {
        name: "vueHeader",
        data() {
            return {
                searchValue: "",
                path: "",
                showMenu: false
            }
        },
        methods: {
            search(v) {
                console.log(v);
            },
            openMenu() {
                this.showMenu = true;
            }
        },
        mounted() {
            this.path = this.$route.path;
        }
    }
</script>

<style scoped lang="less">
    .header {
        position: absolute;
        z-index: 10;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 40px;
        background: #333;

        .list {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-around;

            .goBack {
                width: 10px;
                font-size: 18px !important;

                .btn1 {
                    background: none;
                    border: none;
                    line-height: 40px;
                    color: white;
                }
            }

            .searchInput {
                width: 75%;
                margin: 6px 0;
            }

            .searchButton {

                .btn2 {
                    line-height: 40px;
                    font-size: 14px;
                    color: white;
                    background: none;
                    border: none;
                }
            }
        }

        .fastFeatures {
            list-style: none;
            width: 100%;
            height: 100px;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-around;

            .con {
                width: 18%;
                height: 70px;
                margin: 15px 0;

                .fastIcon {
                    display: inline-block;
                    width: 54px;
                    height: 54px;
                    background: #FFF;
                    border-radius: 100%;
                    font-size: 20px;
                    text-align: center;
                    color: #3388dd;

                    .text {
                        font-size: 12px !important;
                        line-height: 20px;
                        color: #000;
                    }
                }
            }

            .listenToSongs {
                width: 40%;
                font-size: 16px;
                line-height: 40px;
                background: #FFFFFF;
                border-radius: 5px;
                text-align: center;
                font-weight: 500;
            }

            .musicTools {
                width: 40%;
                font-size: 16px;
                line-height: 40px;
                background: #FFFFFF;
                border-radius: 5px;
                text-align: center;
                font-weight: 500;
            }
        }

        .height {
            height: 40px;
        }

        .rechargeService {
            width: 100%;
            font-size: 12px;
            margin: 10px 0;
        }

        .moreService {
            width: 100%;
            font-size: 12px;
        }

        .footerBar {
            list-style: none;
            margin-top: 10px;
            width: 100%;
            height: 50px;
            font-size: 16px;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-around;
            background: #fff;

            .setting {
                width: 30%;
                height: 50px;
                line-height: 50px;
                text-align: center;
            }

            .signOut {
                width: 30%;
                height: 50px;
                line-height: 50px;
                text-align: center;
            }

            .dropOut {
                width: 30%;
                height: 50px;
                line-height: 50px;
                text-align: center;
            }
        }
    }
</style>