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
    </div>
</template>

<script>
    export default {
        name: "vueHeader",
        data() {
            return {
                searchValue: "",
                path: ""
            }
        },
        methods: {
            search(v) {
                console.log(v);
            },
            openMenu() {

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
    }
</style>