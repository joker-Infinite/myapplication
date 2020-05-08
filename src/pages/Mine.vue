<template>
    <div class="container">
        <vue-header></vue-header>
        <div style="width: 100%;height: 40px"></div>
        <vue-footer></vue-footer>
    </div>
</template>

<script>
    import VueHeader from "../components/vueHeader";
    import VueFooter from "../components/vueFooter";

    export default {
        name: "Mine",
        components: {VueFooter, VueHeader}
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