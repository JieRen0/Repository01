<template>
  <div class="login-container" >
      <div class="logol1" >
         <img src="../../assets/404_images/导航栏logo1.png" alt="图片加载中..."><img/>
      </div>
      <div class="logol2" >
        <img src="../../assets/404_images/导航栏logo2.png" alt="图片加载中..."><img/>
     </div>

    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">

      <div class="title-container">
        <h3 class="title" style="margin-left:-20%">账号密码登录</h3>
      </div>


      <el-form-item prop="username">
        <!-- <span class="svg-container">
          <svg-icon icon-class="user" />
        </span> -->
        <el-input
          class="user"
          ref="username"
          v-model="loginForm.username"
          placeholder="请填写账号"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <!-- <span class="svg-container">
          <svg-icon icon-class="password" />
        </span> -->
        <el-input
        class="pwd"
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="请填写密码"
          font-size
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
        <!-- <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span> -->
      </el-form-item>
    <router-link to="/main01">
      <el-button :loading="loading" id="button1" >登录</el-button>
    </router-link>
      <div class="tips">
      
        <el-checkbox v-model="checked" checked style="color:aliceblue;margin-left:-8px">自动登录</el-checkbox>
         <!-- <span><input id="auto_login" type="checkbox">自动登录 </span> -->
        <span style="margin-left:154px;"><router-link to="/findpwd">忘记密码</router-link></span>
        <span style="margin-left:0px;"> <router-link to="/register">注册新账号</router-link></span>
        <router-view></router-view>
      </div>
     
      <div class="bottom_end">
          <span>Copyright©2023河南工程学院纺织服装博物馆版权所有</span>
      </div>
    </el-form>

  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'



export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('账号错误，请再次输入！'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码少于6位，请再次输入！'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
          username:'admin',
          password:'111111',
          
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || '/main01' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}


body {
  height: 100%;
}


/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;


    input {
      background: transparent;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg:#f2f2f2;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  position: relative;
  min-height: 100%;
  width: 100%;
  background: url(../../assets/404_images/login01.png) ;
  background-size:100% ;
  background-color: $bg;
  overflow: hidden;
  display: flex;
  align-items: center;
  .login-form {
   
    position: relative;
    width: 520px;

    max-width: 100%;
    height: 400px;
    padding: 35px 35px 10px;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    margin: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    margin:10px 200px 0px 0px;
    position: relative;
    width:50%;
    height:40px;
    top:-10px;
    border-bottom:4px solid #FFFEFE;
    
    

    .title {
     
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 20px -70px;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
.logol1{
  position:absolute;
  top:10px;
  left: 5px;
  transform: scale(0.7);
}
.logol2{
  position:absolute;
  top:-5px;
  left: 20px;
  transform: scale(0.8);
}

#button1{
  position:absolute;
  left:150px;
  width:24%;
  margin-top:30px;
  background-color:transparent;
  color: #f2f2f2;
}

.bottom_end{
  position: absolute;
  bottom:44px;
  width:73%;
  height: 20px;
  color:#d8d8d8;
  font-size:1px;
  
  border-top:1px solid #b8b8b8;
  padding:20px;
  text-align: center;
}



</style>
