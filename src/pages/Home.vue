<template>
    <div class="container">
        <vue-header></vue-header>
        <vue-scroll :ops="{bar:{background:'#1f1f1f',opacity:0.1},scrollPanel:{scrollingX:false}}"
                    ref="scroll">

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
    }
</script>

<style scoped>
    .container {
        position: fixed;
        width: 100%;
        height: 100%;
        background: #F5F7FA;
    }
</style>