<template>
    <div id="app">
        <router-view :key="$route.fullPath" />
    </div>
</template>

<script>

    export default {
        name: 'app',
    }
</script>

<style>
    #app {
        background: #F5F7FA;
    }
    *{
        margin: 0;
        padding: 0;
    }
</style>
