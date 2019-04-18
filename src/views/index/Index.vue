<template>
  <div>
  <router-view></router-view>
  <van-tabbar v-model="active" active-color ="red">
  <van-tabbar-item icon="aim" to="/home">电影</van-tabbar-item>
  <van-tabbar-item icon="photo-o" to="/list">影院</van-tabbar-item>
  <van-tabbar-item icon="contact" to="/cat">我的</van-tabbar-item></van-tabbar>
  </div>
</template>
<script>
export default {
    data() {
        return {
            active: 0
        }
    },
 
  computed: {
      act(){
          return this.$route.meta.tabNumber
      }
  },
}
</script>
<style>
    
</style>