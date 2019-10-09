<template>




  <body style="width: 100%;">

  <div class="navbar navbar-fixed-top">

    <div class="navbar-inner">

      <div class="container" >

        <a class="btn btn-navbar" data-toggle="collapse" data-target=".navbar-inverse-collapse">
          <i class="icon-reorder shaded"></i>
        </a>

        <a class="brand" style="color: #3b3b3b">监测系统平台</a>
        <div class="nav-collapse collapse navbar-inverse-collapse">
          <ul class="nav pull-right">
            <li><a style="color: #3b3b3b" ><p style="color: #3b3b3b">{{this.name}}</p></a></li>
            <li class="nav-user dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img src="../../public/images/user.png" class="nav-avatar" />
              <b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li  class="tuichu" @click="passwd">更改密码</li>
                <li  class="tuichu" @click="quit"><a href="#">退出 </a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>



  <div class="wrapper" style="height: 100%; width: 100%">
    <div class="container" style="height: 100% ;width: 100%">
      <div class="row" style="height: 100%">
        <div class="span3" style="padding-left: 50px; width: 18%">
          <img src="../../assets/logo.png"/>
          <div class="sidebar" style="padding-left: 0px">

            <ul class="widget widget-menu unstyled">

              <li  ><router-link :to="{path:'/choose'}" style="background-color: #adad88;color: white">首页</router-link></li>
              <li><router-link :to="{path:'/home'}"><i class="menu-icon icon-bar-chart"></i>实时监测</router-link></li>
              <li><router-link :to="{path:'/history'}"><i class="menu-icon icon-book"></i>历史监测数据</router-link></li>
              <li><router-link :to="{path:'/vedio'}"><i class="menu-icon icon-table"></i>视频</router-link></li>
              <li><router-link :to="{path:'/kongzhi'}"><i class="menu-icon icon-table"></i>控制</router-link></li>

            </ul>


            <ul class="widget widget-menu unstyled">
              <li><router-link :to="{path:'/lianxi'}"><i class="menu-icon icon-book"></i>手机app下载渠道</router-link></li>
              <li><router-link :to="{path:'/zhichi'}"><i class="menu-icon icon-paste"></i>联系我们</router-link></li>
            </ul>

            <ul class="widget widget-menu unstyled">
              <li><a class="collapsed" data-toggle="collapse" href="#togglePages" style="background-color: #adad88;color: white"><i class="menu-icon icon-cog"></i>
                <i class="icon-chevron-down pull-right"></i><i class="icon-chevron-up pull-right">
                </i>正在中开发功能... </a>
                <ul id="togglePages" class="collapse unstyled">
                  <li><a><i class="icon-inbox"></i>噪声监测 </a></li>
                  <li><a ><i class="icon-inbox"></i>光污染 </a></li>
                </ul>
              </li>
            </ul>



          </div>
        </div>
        <!--/.span3-->
        <div class="span9"  style="width: 68%;height: 600px;">
          <div class="bac" style="width: 100%; height: 600px">

            <img  style="position: absolute; left: 35%" src="../../assets/shou.png"/>

            <div style="width: 70% ">

              <div style="position: fixed; top: 24%;left: 43%">
                <el-button  @click="q_on"  type="primary"  plain="" style="display:block;
               width: 132px;  font-size:16px; ">开启数据监测</el-button>
              </div>

              <div style="position: fixed; top: 41.3%;left: 36.3%">
                <el-button  @click="q_off"  type="primary"  plain=""style="display:block;
            font-size:14px; ">关闭数据监测</el-button>
              </div>

              <div style="position: fixed; top: 52.5%;left: 58.4%">
                <el-button  @click="k_restart"  type="primary"  plain="" icon="el-icon-refresh"style="display:block;
            font-size:16px; ">重启</el-button>
              </div>

              <div style="position: fixed; top: 40%;left: 53.3%">
                <el-button  @click="k_close"  type="primary"  plain="" icon="el-icon-remove-outline"style="display:block;
            font-size:16px; ">关机</el-button>
              </div>


            </div>

          </div>

        </div>

      </div>
    </div>
    <!--/.container-->
  </div>
  <!--/.wrapper-->



  </body>

</template>

<script>
  import { setCookie,getCookie,delCookie } from '../../assets/js/cookie.js'

  import '../../public/scripts/jquery-1.9.1.min'
  import '../../public/scripts/jquery-ui-1.10.1.custom.min'
  import '../../public/bootstrap/js/bootstrap.min'
  import '../../public/scripts/flot/jquery.flot'
  import '../../public/scripts/flot/jquery.flot.resize'
  import '../../public/scripts/datatables/jquery.dataTables'
  import '../../public/scripts/common'

  export default {
    data() {
      return {
        name: '',
        chS: true,

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
      q_on(){

        let data = {'choose':"q_on"}

        console.log(data)

        this.$axios({
               url:'http://192.168.0.100:8888/',
               method:'POST',
               data:JSON.stringify(data),
               contentType:"application/json",
               headers:{
                 'Content-Type':'application/json'
               }
             }).then((res)=> {

          console.log(res)
        })

      },
      q_off(){
        let data = {'choose':"q_off"}

        this.$axios({
          url:'http://192.168.0.100:8888/',
          method:'POST',
          data:JSON.stringify(data),
          contentType:"application/json",
          headers:{
            'Content-Type':'application/json'
          }
        }).then((res)=> {

          console.log(res)
        })
      },
      k_close(){
        let data = {'choose':"k_close"}

        this.$axios({
          url:'http://192.168.0.100:8888/',
          method:'POST',
          data:JSON.stringify(data),
          contentType:"application/json",
          headers:{
            'Content-Type':'application/json'
          }
        }).then((res)=> {

          console.log(res)
        })
      },
      k_restart(){
        let data = {'choose':"k_restart"}

        this.$axios({
          url:'http://192.168.0.100:8888/',
          method:'POST',
          data:JSON.stringify(data),
          contentType:"application/json",
          headers:{
            'Content-Type':'application/json'
          }
        }).then((res)=> {

          console.log(res)
        })
      },
      passwd(){
        this.$router.push('/passwd')
      },

      quit() {

        /*删除cookie*/

        delCookie('username')
        this.$router.push('/')

      },
    }
  }
</script>

<style scoped>

  @import "../../public/bootstrap/css/bootstrap-responsive.min.css";
  @import "../../public/bootstrap/css/bootstrap.min.css";
  @import "../../public/css/theme.css";
  @import "../../public/images/icons/css/font-awesome.css";
  @import "http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600";
  .bac{
    background-image: url("../../assets/100.jpg");
  }

  .tuichu:hover{
    color: #0e0e0e;
  }

</style>
