<template>
    <div>
        <header class="navbar">
            <h2 class="nav-title">猫眼电影</h2>
        </header>
        <div class="login-view">
            <div class="logo">
                <p>美团账号登陆</p>
            </div>
            <div class="login-form">
                <div class="form-group">
                    <input placeholder="用户名" class="input-control" type="text" v-model="username" />
                </div>
                <div class="form-group">
                    <input placeholder="密码" class="input-control" type="password" v-model="password" />
                </div>
                <div class="submit login-btn" @click="handleLogin">
                    <button>登录</button>
                </div>
            </div>
        </div>
    </div>        
</template>

<script>
export default {
    data(){
        return{
           username:'' ,
           password:''
        }
    },
    methods:{
        handleLogin(){
            window.islogin = true;
            this.$router.replace(this.$route.query.redirect)
        }
    }
}
</script>
<style>
@import '../../style/resets.css';
header{
    width:100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #e54847;
    font-size: 18px;
    color:white;
}
/* 登陆页面 */
.login-view {
    font-size: 16px;  
}
.login-view .logo {
    margin-top:20px;
    text-align: center;
    height: 30px;
    line-height: 30px;
}
.login-form .form-group input{
    width:325px;
    border: 1px double #F00;
    border-radius: 5px;
    margin: 10px 15px;
    padding-left:15px;
    line-height: 40px;
    background: none;
}
.login-form .submit button{
    margin: 15px 30px 0;
    border:none;
    width:315px;
    height: 50px;
    border-radius: 4px;
    background: #f03d37;
    color:white;
    margin-bottom:10px;
}
</style>