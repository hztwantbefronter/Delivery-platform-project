<template>
    <div>
      <router-view></router-view>
      <FooterGuide v-show="$route.meta.ShowFooter"/>
    </div>
</template>


<script>
  import FooterGuide from "./components/FooterGuide/FooterGuide";

    export default {
      components:{
        FooterGuide
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    color: #eab9b9;


</style>
