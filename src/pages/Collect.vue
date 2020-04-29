<template>
    <div class="container">
        <vue-header></vue-header>
        <div>\\\\\\\\\\\\\\\\\\</div>
        <div>\\\\\\\\\\\\\\\\\\</div>
        <div>\\\\\\\\\\\\\\\\\\</div>
        <div>\\\\\\\\\\\\\\\\\\</div>
        <div>\\\\\\\\\\\\\\\\\\</div>
        <div>\\\\\\\\\\\\\\\\\\</div>
        <div>\\\\\\\\\\\\\\\\\\</div>
        <div>\\\\\\\\\\\\\\\\\\</div>
        <vue-footer></vue-footer>
    </div>
</template>

<script>
    import VueHeader from "../components/vueHeader";
    import VueFooter from "../components/vueFooter";

    export default {
        name: "Collect",
        components: {VueFooter, VueHeader}
    }
</script>

<style scoped lang="less">
    .container {
        position: fixed;
        width: 100%;
        height: 100%;
        background: #F5F7FA;
    }
</style>