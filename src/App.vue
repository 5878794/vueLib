<template lang="pug">
div(id="app")
    router-view
</template>

<style lang="less">
    @import "./css/box";

    html,body{
        width: 100%; height: 100%;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 100%; height: 100%;
    }
</style>

