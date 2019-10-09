<template>

  <div  class="back" style="width: 100%; height: 700px">

  <div style="position:fixed; top:25%;left: 30%">

    <h2 style="margin:0 auto;">修改密码</h2>
    <br/><br/>

    <div class="p1" >
      <!--<el-input placeholder="" v-model="input1" :disabled="true"></el-input>-->

      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="原密码" prop="age">
          <el-input v-model.number="ruleForm2.age"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </el-form>

    </div>

    <p v-show="showTishi" style="color: lightcoral; font-size: 20px" @click="quit">{{tishi}}</p>

  </div>

  </div>



</template>

<script>

  import { setCookie,getCookie,delCookie } from '../../assets/js/cookie.js'

    export default {
      data(){

        var checkAge = (rule, value, callback) => {
          if (!value) {
            return callback(new Error('密码不能为空'));
          }
          // alert(value)
          // window.val=value
          // setTimeout(this.connect, 1000);
          var temp=0;

          while(temp === 0 ){
            let data = {'username':this.name,'password':value}

            /*接口请求*/
            console.log(data)


            this.$axios({
              url:'http://192.168.0.41:8080/user/login',
              method:'POST',
              data:JSON.stringify(data),
              contentType:"application/json",
              headers:{
                'Content-Type':'application/json'
              }
            }).then((res)=> {
              console.log(res)

              if ( res.data !== 1 ) {
                callback(new Error('密码错误'));
              } else if ( res.data=== 1 ) {
                callback();
                temp =1;
                console.log(temp)
              }
            })
            sleep(1);
          }


      };
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (this.ruleForm2.checkPass !== '') {
              this.$refs.ruleForm2.validateField('checkPass');
            }
            callback();
          }
        };
        var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.ruleForm2.pass) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();

          }
        };


        return{
          name: "",
          showTishi:false,
          ruleForm2: {
            age: '',
            pass: '',
            checkPass: '',
          },
          rules2: {
            age: [
              { validator: checkAge, trigger: 'blur' }
            ],
            pass: [
              { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
              { validator: validatePass2, trigger: 'blur' }
            ],

          },

        }
      },

      mounted() {

        /*页面挂载获取保存的cookie值，渲染到页面上*/

        let uname = getCookie('username')

        this.name = uname

        /*如果cookie不存在，则跳转到登录页*/

        if (uname == "") {

          this.$router.push('/')

        }

      },

      methods: {

        quit() {

          /*删除cookie*/

          delCookie('username')
          this.$router.push('/')

        },

        submitForm() {
          if(this.ruleForm2.age !=="" && this.ruleForm2.checkPass!=="" && this.ruleForm2.pass!=="")
          {
          let data = {'username': this.name, 'password': this.ruleForm2.age, 'newpassword': this.ruleForm2.checkPass}

          /*接口请求*/
          console.log(data)

          this.$axios({
            url: 'http://192.168.0.41:8080/user/change',
            method: 'POST',
            data: JSON.stringify(data),
            contentType: "application/json",
            headers: {
              'Content-Type': 'application/json'
            }
          }).then((res) => {
            console.log(res)

            if (res.data === 0) {
              this.tishi = "修改密码成功,点击继续重新登录"
              this.showTishi = true
            }
          })

        }
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        },

        connect(){
          let data = {'username':this.name,'password':window.val}

             /*接口请求*/
             console.log(data)


             this.$axios({
               url:'http://192.168.0.41:8080/user/login',
               method:'POST',
               data:JSON.stringify(data),
               contentType:"application/json",
               headers:{
                 'Content-Type':'application/json'
               }
             }).then((res)=> {
               console.log(res)

               if ( res !== 0) {
                 callback(new Error('密码错误'));
               } else {
                 callback();
               }
             })
        }
      }


    }
</script>

<style scoped>

.back{
  background-image: url("../../assets/back.jpg");
}

  .p1{
    width: 500px; margin:0 auto;
  }
</style>
