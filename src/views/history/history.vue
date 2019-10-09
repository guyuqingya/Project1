<template>


  <body class="bac">
  <div class="navbar navbar-fixed-top">

    <div class="navbar-inner">

      <div class="container" >

        <a class="btn btn-navbar" data-toggle="collapse" data-target=".navbar-inverse-collapse">
          <i class="icon-reorder shaded"></i>
        </a>

        <a class="brand">监测系统平台</a>
        <div class="nav-collapse collapse navbar-inverse-collapse">
          <ul class="nav pull-right">
            <li><a href="#"><p style="color: #3b3b3b">{{this.name}}</p></a></li>
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
        <div class="span9" style="width: 68%">
          <div>

            <div style="float: left; font-size: 15px; width: 63%">

              选择要查询的时间范围
              <el-date-picker
                v-model="form.value1"
                size="mini"
                type="datetimerange"
                format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss"
                @change="selectTime"
                :picker-options="pickerOptions2"
                range-separator="至"
                unlink-panels start-placeholder="开始日期"
                end-placeholder="结束日期"
                >

              </el-date-picker>

              <label>
                <br/>
              </label>
            </div>


            <div style="float:right;">
              <el-button  @click="exportToExcel"  type="primary"  plain="" icon="el-icon-download"style="display:block;
             background-color:#41b883; color:#fff;
            font-size:16px; ">导出数据</el-button>
            </div>


            <div >
            <el-table
              :data="tableData"
              style="width: 100%"
              height="600px"
              id="table-content"
            >
              <el-table-column  label="序号"  width="80" type="index" :index="indexMethod"></el-table-column>

              <el-table-column width="240" label="1" prop="tim"></el-table-column>
              <el-table-column width="240" label="2" prop="hum"></el-table-column>
              <el-table-column width="240" label="3" prop="gas"></el-table-column>
              <el-table-column width="240" label="4" prop="tem"></el-table-column>
            </el-table>
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


  import FileSaver from 'file-saver'
  import XLSX from 'xlsx'


  export default {
    data() {
      return {
        name: "",
        chS: true,
        form:{
          value1:[new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, 0),
            new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 23, 59, 59)],
        },
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },

        tableData:[]

        // tableData:[{ tim: '2016-05-03', hum: '0', gas: '0',tem:'20' },
        //             { tim: '2016-05-02', hum: '20', gas: '0',tem:'30' },
        //             { tim: '2016-05-02', hum: '50', gas: '0',tem:'0'},
        //             { tim: '2016-05-02', hum: '0', gas: '10',tem:'0' },
        //             { tim: '2016-05-02', hum: '0', gas: '20',tem:'0' },]
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
      passwd(){
        this.$router.push('/passwd')
      },

      indexMethod(index) {
        return index + 1;
      },

      exportToExcel(){
          let et = XLSX.utils.table_to_book(document.getElementById('table-content')); //此处传入table的DOM节点
          let etout = XLSX.write(et, {
            bookType: 'xlsx',
            bookSST: true,
            type: 'array'
          });
          try {
            FileSaver.saveAs(new Blob([etout], {
              type: 'application/octet-stream'
            }), 'history.xlsx');   //trade-publish.xlsx 为导出的文件名
          } catch (e) {
            console.log(e, etout) ;
          }
          return etout;
      },

      quit() {

        /*删除cookie*/

        delCookie('username')
        this.$router.push('/')

      },
      selectTime(timedata)
      {
        this.form.value1 = timedata;

        let data = { 'starttime': timedata[0], 'endtime':timedata[1]}
        console.log(data)

        // this.tableData=[{ date: '2016-05-03', shidu: '0', anqi: '0',wendu:'0' },
        // { date: '2016-05-02',shidu: '0', anqi: '0',wendu:'0' }];

        this.$axios({
               url:'http://192.168.0.41:8080/mydb/getAllData',
               method:'POST',
               data:JSON.stringify(data),
               contentType:"application/json",
               headers:{
                 'Content-Type':'application/json'
               }
             }).then((res)=> {

          console.log(res)
               this.tableData=res.data.resData;
        })

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


  .bac{
    background-image: url("../../assets/100.jpg");
  }

  .tuichu:hover{
    color: #0e0e0e;
  }

</style>
