<template>
<body>


<div>

  <div   style="position: absolute;width: 100%;height: 100%;">
    <vue-particles
      color="#4f5d61"
      :particleOpacity="0.7"
      :particlesNumber="40"
      shapeType="edge"
      :particleSize="3"
      linesColor="#4f5d61"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="false"
      hoverMode="grab"
      :clickEffect="false"
      clickMode="bubble"


    >
    </vue-particles>
  </div>


  <div class="agile-login"  v-show="showLogin" style="position: absolute;padding-left: 20%">

    <br/> <br/> <br/> <br/><br/> <br/>

    <p v-show="showTishi">{{tishi}}</p>

    <div class="wrapper">

      <h2>Sign In</h2>

      <div class="w3ls-form">

        <label>Username</label>

        <input type="text"  name="name" placeholder="Username" required  v-model="username"/>

        <label>Password</label>

        <input type="password" name="password" placeholder="Password" v-model="password"/>

        <br/>
        <!--<input id ="login" type="submit" value="Log In" />-->

        <button v-on:click="login">登录</button>

        <span v-on:click="ToRegister">没有账号？马上注册</span>

      </div>


    </div>
  </div>


  <div class="agile-login"  v-show="showRegister" style="position: absolute;padding-left: 20%" >

    <br/> <br/> <br/><br/> <br/> <br/>

    <p v-show="showTishi">{{tishi}}</p>

    <div class="wrapper">

      <h2>register</h2>

      <div class="w3ls-form">

        <label>Username</label>

        <input type="text" name="name" placeholder="Username" required  v-model="newUsername"/>

        <label>Password</label>

        <input type="password" name="password" placeholder="Password" v-model="newPassword"/>

        <br/>
        <!--<input id ="login" type="submit" value="Log In" />-->

        <button v-on:click="register">注册</button>

        <span v-on:click="ToLogin">已有账号？马上登录</span>
      </div>
    </div>
  </div>




</div>

</body>



</template>



<style scoped>

  /*body{width: 100%;height: 100%;position: fixed;background-image: url("../../assets/background.jpg")}*/
  @import "../../assets/css/style.css";
</style>



<script>


  import {setCookie,getCookie} from '../../assets/js/cookie.js'

  export default{

    data(){

      return{

        showLogin: true,

        showRegister: false,

        showTishi: false,

        tishi: '',

        username: '',

        password: '',

        newUsername: '',

        newPassword: ''

      }

    },

    mounted(){

      /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/

      if(getCookie('username')){

        this.$router.push('/choose')

      }

    },


    methods:{


      ToRegister(){

        this.showRegister = true

        this.showLogin = false

      },

      ToLogin(){

        this.showRegister = false

        this.showLogin = true

      },

      login(){

        if(this.username == "" || this.password == ""){

          this.tishi = "请输入用户名或密码"
          this.showTishi = true

        }
       else{

         // let data = {'username':this.username,'password':this.password}
         //
         //  /*接口请求*/
         //  console.log(data)
         //
         //
         //  this.$axios({
         //    url:'http://192.168.0.41:8080/user/login',
         //    method:'POST',
         //    data:JSON.stringify(data),
         //    contentType:"application/json",
         //    headers:{
         //      'Content-Type':'application/json'
         //    }
         //  }).then((res)=>{
         //
         //   console.log(res)
         //
         //    /*接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值*/
         //
         //   if(res.data == -1){
         //
         //      this.tishi = "该用户不存在"
         //
         //      this.showTishi = true
         //
         //    }else if(res.data == 0){
         //
         //      this.tishi = "密码输入错误"
         //
         //      this.showTishi = true
         //
         //    }else if(res.data == 2 ){
         //
         //      /*路由跳转this.$router.push*/
         //
         //      this.$router.push('/main')
         //
         //    }
         //   else {

             this.tishi = "登录成功"

             this.showTishi = true

             setCookie('username',this.username,1000*60)

             setTimeout(function(){

               this.$router.push('/choose')

             }.bind(this),1000)
           }


          // })

        // }

      },

      register(){

        if(this.newUsername == "" || this.newPassword == ""){

          this.tishi = "请输入用户名或密码"
          this.showTishi = true

        }else{

           let data = {'username':this.newUsername,'password':this.newPassword}
           this.$axios({
            url:'http://192.168.0.41:8080/user/reg',
            method:'POST',
            data:JSON.stringify(data),
            contentType:"application/json",
            headers:{
              'Content-Type':'application/json'
            }
          }).then((res)=>{

            console.log(res)

            if(res.data == 1){

              this.tishi = "注册成功"

              this.showTishi = true

              this.username = ''

              this.password = ''

              /*注册成功之后再跳回登录页*/

              setTimeout(function(){

                this.showRegister = false

                this.showLogin = true

                this.showTishi = false

              }.bind(this),1000)

            }
            else if(res.data == -1)
            {
              this.tishi = "支持字母数字下划线"
              this.showTishi = true
            }
            else {
              this.tishi = "用户已存在"
              this.showTishi = true
            }

          })

        }

      }


    }


  }


</script>
