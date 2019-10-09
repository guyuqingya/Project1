 <template>

  <body>

  <div class="navbar navbar-fixed-top">

    <div class="navbar-inner">

      <div class="container" >

        <a class="btn btn-navbar" data-toggle="collapse" data-target=".navbar-inverse-collapse">
          <i class="icon-reorder shaded"></i>
        </a>

        <a class="brand" style="color: #3b3b3b">监测系统平台</a>
        <div class="nav-collapse collapse navbar-inverse-collapse">
        <ul class="nav pull-right">
          <li><a ><p style="color: #3b3b3b">{{this.name}}</p></a></li>
          <li class="nav-user dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <img src="../../public/images/user.png" class="nav-avatar" />
            <b class="caret"></b></a>
            <ul class="dropdown-menu">
              <li  class="tuichu" @click="passwd">更改密码</li>
              <li  class="tuichu" @click="quit">退出</li>
            </ul>
          </li>
        </ul>
      </div>
      </div>
    </div>


    <div>

      <el-carousel :interval="3000" indicator-position="none" id="el-carousel">
        <el-carousel-item v-for="item in dataimg" :key="item">
          <img :src="item.src">
        </el-carousel-item>
      </el-carousel>

    </div>
  </div>



  <!--<div>-->

    <!--<img src="../../assets/11.jpg">-->

  <!--</div>-->

  <div class="wrapper" style="height: 100%; width: 100%">
    <div class="container" style="height: 100% ;width: 100%">
      <div class="row" style="height: 100%">

        <div class="span3" style="padding-left: 50px; width: 18%">
          <br/><br/><br/><br/>
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



            <br/><br/><br/><br/><br/>

            <img src="../../assets/logo.png"/>

          </div>
        </div>


        <!--/.span3-->
        <div class="span9"style="width: 68%">
           <div>
             <h1 style="color: #0e0e0e">关于WEM</h1>
             新型办公室环境监测服务项目小组
             <hr color="green" style="width: 100%" >
             <div>
               <div style="width: 560px;display: inline;float: left">
                 <img src="../../assets/photo.jpg"/>
               </div>
               <div style="display: inline;">
                 <br/>
                 <p class="ziti1">  WEM(维慕)项目小组成立于2018年12月25日，为实现嵌入式办公环境监控中心的设计而自主组成的项目小组。</p>
                 <br/>
                 <p class="ziti1">
                   现代化的办公环境中，存在着众多污染源，包括各类办公设备 （打印机等）产生的臭 氧、碳氢化合物，办公
                   室装修及办公家具散发 的甲醛、氨气、苯、VOC等有毒有害气体，以 及各类可吸入颗粒物（PM2.5、PM10等）， 除 此之外，还
                   有噪音和声光污染。办公楼宇环境 监测，作为楼宇智能化系统的一个组成部分， 在保障工作环境健康等方面，日益凸现其应用价值。
                 </p>
               </div>
             </div>

             <br/>
             <hr color="green" style="width: 100%" >

             <h1>动态</h1>
             <div style="width: 33%;display: inline;float: left">
               <img  class="tupian1" style="width: 80%;" @click="d1" src="../../assets/1.jpg"/>
               <p style="color: #3b3b3b">2018年12月25日-2018年12月29日动态</p>
               <p class="ziti2" @click="d1">了解流程，环境部署等前期准备大致完成，即将进行代码的编写和移植。</p>
             </div>

             <div style="width: 33%;display: inline;float: left">
               <img   @click="d2" style="width: 80%;" src="../../assets/2.jpg"/>
               <p style="color: #3b3b3b">2018年12月31日-2019年1月6日动态</p>
               <p class="ziti2"  @click="d2">基本功能大致完成，还差web前后端的采集数据交互，嵌入式端的视频显示。
                 接下来会进行界面美化，性能优化，安全测试。</p>
             </div>

             <div style="width: 33%;display: inline;float: left">
               <img   @click="d3" style="width: 80%;" src="../../assets/3.jpg"/>
               <p style="color: #3b3b3b">2019年1月7日-2019年1月13日</p>
               <p class="ziti2"  @click="d3">基本功能基本完成。
                 接下来会进行完善用户体验，以及展示内容的完成。</p>
             </div>
             </div>

           </div>

        </div>

      </div>
    </div>
    <br/>
    <!--/.container-->

  <!--/.wrapper-->

  <div>
    <h1>联系我们</h1>
  </div>

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
        name: "",
        chS: true,
        bannerHeight: 400,
        screenWidth: 1920,

        dataimg: [
          {
          src: require('../../assets/14.jpg'),
           },
          {
            src: require('../../assets/12.jpg'),
          },
          {
            src: require('../../assets/13.jpg'),
          },
        ],


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

      this.setSize1();
      const that = this;
      window.addEventListener('resize', function() {
        that.screenWidth = $(window).width();
        that.setSize();
      }, false);


    },

    methods: {

      passwd(){
        this.$router.push('/passwd')
      },

      d1(){
        this.$router.push('/dongtai1')
      },

      d2(){
        this.$router.push('/dongtai2')
      },
      d3(){
        this.$router.push('/dongtai3')
      },

      quit() {

        /*删除cookie*/

        delCookie('username')
        this.$router.push('/')

        },

      setSize1: function() {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.screenWidth = width;
        //图片                高 / 宽
        this.bannerHeight = 400 / 1920 * this.screenWidth
        document.getElementById('el-carousel').style.height = this.bannerHeight + 'px';
      },

      setSize: function() {
        this.bannerHeight = 400 / 1920 * this.screenWidth
        document.getElementById('el-carousel').style.height = this.bannerHeight + 'px';
      }

      }
    }
</script>

<style scoped>

  @import "../../public/bootstrap/css/bootstrap-responsive.min.css";
  @import "../../public/bootstrap/css/bootstrap.min.css";
  @import "../../public/css/theme.css";
  @import "../../public/images/icons/css/font-awesome.css";
  @import "http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600";

  /*img {*/

    /*display: inline-block;*/

    /*height: auto;*/

    /*max-width: 100%;*/

  /*}*/

  .bac{
    background-image: url("../../assets/100.jpg");
  }

  .ziti1{
    font-size: 20px; color: #0e0e0e;text-indent: 2em; letter-spacing: 2px;line-height: 160%;text-align: left;
  }
  .ziti2{
    font-size: 17px;text-align:left;text-indent: 2em;color: #9da0a4;
  }
  .ziti2:hover{
    color: #3b3b3b;
  }

  .tuichu:hover{
    color: #0e0e0e;
  }

</style>
