<template>
<div>
  <div id="header"><h1>猫眼电影</h1></div>
  <div class="topbar" >
	<div class="white-bg topbar-bg ">  
        <router-link tag="div" to="/cit" class="city-entry">
          <span class="city-name">深圳</span><i class="iconfont icon-jiantou-up-down-copy"></i>
        </router-link>
        <div class="switch-hot" data-active=".n-hot">
            <router-link tag="div" to="/home/comingSoon" active-class=" active" class="hot-item">正在热映</router-link>
             <router-link tag="div" to="/home/nowPlaying" active-class=" active" class="hot-item">即将上映</router-link>
        </div>
        <router-link tag="div" to="/shousuo" class="iconfont icon-fangdajing" data-type="movie"></router-link>
    </div>
  </div>
  <router-view></router-view>
</div>
</template>


<style lang="less">
@import '../../style/resets.css';
@import '../../style/mixins.less';

#header {
    h1{
    display: block;
    font-size:18px;
    font-weight: 400;
    color: #FFFFFF;
    height:100%;
    line-height:50px;
    text-align: center;
    background:red;
    position:relative;
    }
}
.topbar{
  border-bottom:1px solid #e6e6e6;
  height:44px;
  margin-bottom:10px;
  .topbar-bg{
    display:flex;
    align-items:center;
    height:44px;
    justify-content:space-between;
    .city-entry {
      padding-left:15px;
      font-size:15px;
      color:#666;
      display:flex;
      align-items:center;

      .icon-jiantou-up-down-copy{
         
        font-size:12px;
        margin-right:10px;
     }
     
    }
  }
  .switch-hot{
    display:flex;
    height:44px;
    line-height:44px;
    position:relative;

    .hot-item{
      font-size:15px;
      text-align:center;
      margin:0 12px;
      font-weight:700;
      width:80px;

    }
     .active{
        color:#ef4238;
        border-bottom:1px solid #ef4238;
       // width:80px;


      }
      
  }
  .icon-fangdajing{
        width:20px;
        height:20px;
        font-size:20px;
        padding:10px 15px 10px 10px ;
        color:#ef4238;
      }
}

</style>