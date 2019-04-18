<template>
 <div id="min">
    <div id="header">
    <i @click="fn" class="iconfont icon-mjiantou-copy"></i>
    <h1>
    猫眼电影
      </h1>
    </div>
    <div class="header_bottom">
       <form>
       <i class="iconfont icon-fangdajing1"></i>
       <input type="text" placeholder="搜电影、搜影院">
       </form>
       <span>取消</span>
    </div>
    
 </div>
</template>
<script>
export default{
    methods: {
        fn(){
            this.$router.go(-1);
        }
    },
}
</script>
<style lang="less">
 @import '../style/resets.css';
 #min{
     background: #f5f5f5;

    
 }
#header {
    background:red;
    color: #FFFFFF;
    display: flex;
    justify-content:center;
    align-items:center;
    height:50px;
    font-size:18px;
    
    .icon-mjiantou-copy{
        font-size: 25px;
        //margin-left: 10px;
        position: absolute;
        top: 10px;
        left: 10px;
        
    }

   
    
}
.header_bottom{
    height: 45px;
    border-bottom:1px solid #e5e5e5;
    display: flex;
    justify-content:space-around;
    align-items:center;
    font-size: 13px;
    position: relative;
    
    input{
    width: 240px;
    height: 30px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    background-color: #fff;
    padding-left: 35px;
   
    
    }

    span{
    font-size: 16px;
    color: #f03d37;
    padding: 0 10px;
    }
    .icon-fangdajing1{
    position: absolute;
    top: 7spx;
    left: 10px;
    font-size: 30px;
    }
}

</style>