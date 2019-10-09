<template>


  <body >



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
        <div class="span9" style="width:68%;">


          <div style="width: 80%;float: left">

            <div id="myChart" style="height:500px"></div>

            <h4 style="color: #4f5d61;text-align: left;display: inline;float: left;font-size: 25px">异常数据记录表</h4>

            <div style="float:right;">
              <el-button  @click="exportToExcel"  type="primary"  plain="" icon="el-icon-download"style="display:block;
             background-color:#41b883; color:#fff;
            font-size:16px; ">导出数据</el-button>
            </div>

            <div>
              <el-table
                :data="tableData"
                style="width: 100%"
                height="300px"
                id="danger-table"
              >
                <el-table-column width="200" label="日期" prop="tim"></el-table-column>
                <el-table-column width="200" label="湿度" prop="hum"></el-table-column>
                <el-table-column width="200" label="氨气含量" prop="gas"></el-table-column>
                <el-table-column width="200" label="温度" prop="tem"></el-table-column>

              </el-table>
            </div>

          </div>

          <div style="position: fixed; top: 11.3%;left: 76.3%">
            <el-switch v-model="audio" active-text="开启语音预警播报" inactive-text="关闭语音预警播报"></el-switch>
          </div>

          <!--<el-switch style="display: block" v-model="value2" active-color="#13ce66"-->
                     <!--inactive-color="#9da0a4" active-text="开启语音预警播报" inactive-text="关闭语音预警播报"></el-switch>-->


          <div style="width: 30%;float: left;position: fixed; left:75%; top: 20%;" >
            <img   v-if="Nice" src="../../assets/nice.png"/>
            <img   v-if="Shi" src="../../assets/shidu.png"/>
            <img   v-if="An" src="../../assets/anqi.png"/>
            <img   v-if="AnShi" src="../../assets/anshi.png"/>

          </div>

          <div style="width: 30%;float: left;position: fixed;top: 50%;left: 75%">
            <img  src="../../assets/he.png"/>
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
        tableData:[],
        Nice:true,
        Shi:false,
        An:false,
        AnShi:false,
        timedata:"",
        errhum: 0, //监测湿度
        errgas:0, //监测氨气
        errhg:0, //间的湿度和氨气
        audio: true,

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

      this.drawLine();

    },




    // 监听异常发生变化，语音播报

    watch: {

      // 'errhum': function () {
      //
      //   this.err1()
      // },
      // 'errgas':function () {
      //
      //   this.err2()
      // },
      // 'errhg':function () {
      //
      //   this.err3()
      // },
      'Shi':function () {
        if(this.Shi == true )
        {
          this.err1()
        }
      },
      'An':function () {
        if(this.An == true)
        {
          this.err2()
        }
      },
      'AnShi':function () {
        if(this.AnShi==true)
        {
          this.err3()
        }
      },

    },


    methods: {

      err1 () {
        if( this.audio == true)
        {
          var utterance = new SpeechSynthesisUtterance('请注意当前湿度');
          window.speechSynthesis.speak(utterance);
        }
      },
      err2 () {
        if( this.audio == true )
        {
          var utterance = new SpeechSynthesisUtterance('请注意当前氨气成分');
          window.speechSynthesis.speak(utterance);
        }
      },
      err3 () {
        if( this.audio == true )
        {
          var utterance = new SpeechSynthesisUtterance('请注意当前湿度和氨气成分');
          window.speechSynthesis.speak(utterance);
        }
      },


      exportToExcel(){
        let et = XLSX.utils.table_to_book(document.getElementById('danger-table')); //此处传入table的DOM节点
        let etout = XLSX.write(et, {
          bookType: 'xlsx',
          bookSST: true,
          type: 'array'
        });
        try {
          FileSaver.saveAs(new Blob([etout], {
            type: 'application/octet-stream'
          }), 'danger.xlsx');   //trade-publish.xlsx 为导出的文件名
        } catch (e) {
          console.log(e, etout) ;
        }
        return etout;
      },
      passwd(){
        this.$router.push('/passwd')
      },

      quit() {

        /*删除cookie*/

        delCookie('username')
        this.$router.push('/')

      },
      connect()
      {
        this.$axios({
          url:'http://192.168.0.41:8080/data/real',
          method:'post',
          data:'JSON',
        }).then((res)=>{
          console.log(res);
          var Data = res.data.resData;


          console.log(Data);
          window.d1=Data.tem;
          window.d2=Data.gas;    //气体含量 氨气
          window.d3=Data.hum;    //湿度

          if(Data.hum >60 && Data.gas>0 ){    //湿度和氨气超标
            this.AnShi=true;
            this.Nice=false;
            this.Shi=false;
            this.An=false;
            if( Data.tim !== this.timedata )
            {
              this.errhg++;
              this.tableData.push({tim:Data.tim,hum:Data.hum,gas:Data.gas,tem:Data.tem});
              this.timedata = Data.tim;


            }
          }
          else if( Data.hum >50){   //湿度超标
            this.Shi=true;
            this.Nice=false;
            this.An=false;
            this.AnShi=false;

            if( Data.tim !== this.timedata)
            {
              this.errhum++;
              this.tableData.push({tim:Data.tim,hum:Data.hum,gas:Data.gas,tem:Data.tem});
              this.timedata = Data.tim;

            }
          }
          else if(Data.gas > 0 )     //氨气超标
          {
            this.An=true;
            this.Nice=false;
            this.AnShi=false;
            this.Shi=false;
            if( Data.tim !== this.timedata)
            {
              this.errgas++;
              this.tableData.push({tim:Data.tim,hum:Data.hum,gas:Data.gas,tem:Data.tem});
              this.timedata = Data.tim;
            }
          }
          else {
            this.errhg=0;
            this.errhum=0;
            this.errgas=0;
            this.Shi=false;
            this.Nice=true;
            this.An=false;
            this.AnShi=false;
          }
          // console.log(window.d1);
          // alert("ok")
        })
      },


      quit() {

        /*删除cookie*/

        delCookie('username')
        this.$router.push('/')

      },

      back(){
        this.$router.push('/choose')
      },



      drawLine() {
        // 基于准备好的dom，初始化echarts实例

        let myChart = this.$echarts.init(document.getElementById('myChart'))
        var option = {
          title: {
            text: '实时监测',
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#283b56'
              }
            }
          },
          legend: {
            data:['氨气含量', '湿度','温度']
          },
          toolbox: {
            show: true,
            feature: {
              dataView: {readOnly: false},
              restore: {},
              saveAsImage: {}
            }
          },
          dataZoom: {
            show: false,
            start: 0,
            end: 100
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: true,
              data:(function () {
                var now = new Date();
                var res = [];
                var len = 10;
                while (len--) {
                  res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                  now = new Date(now - 2000);
                }
                return res;
              })()
            },
            {
              type: 'category',
              boundaryGap: true,
              data:(function (){
                var res = [];
                var len = 10;
                while (len--) {
                  res.push(10 - len - 1);
                }
                return res;
              })
              ()
            }
          ],
          yAxis: [
            {
              type: 'value',
              scale: true,
              name: '百分比',
              max: 100,
              min: 0,
              boundaryGap: [0.2, 0.2]
            },
            {
              type: 'value',
              scale: true,
              name: '摄氏度',
              max: 40,
              min: 0,
              boundaryGap: [0.2, 0.2]
            }
          ],
          series: [
            {
              name:'温度',
              type:'bar',
              xAxisIndex: 1,
              yAxisIndex: 1,
              data:
                (function (){
                  var res = [];
                  var len = 10;
                  while (len--) {
                    res.push(0);
                  }
                  return res;
                })()
            },
            {
              name:'氨气含量',
              type:'line',
              data:(function (){
                var res = [];
                var len = 0;
                while (len < 10) {
                  res.push(0);
                  len++;
                }
                return res;
              })()
            },
            {
              name:'湿度',
              type:'line',
              data:(function (){
                var res = [];
                var len = 0;
                while (len < 10) {

                  res.push(0);
                  len++;
                }
                return res;
              })()
            }
          ]
        };

        var app = {};
        app.count = 11;

        setInterval(this.connect, 2100);

        setInterval(function () {
          let axisData = {};
          axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');

          var data0 = option.series[0].data;  //tem
          var data1 = option.series[1].data;   //gas
          var data2 = option.series[2].data;

          data0.shift();
          data0.push(window.d1);
          // console.log(window.d1);
          data1.shift();
          data1.push(window.d2);
          data2.shift();
          data2.push(window.d3);

          var dx0 = option.xAxis[0].data;
          var dx1 = option.xAxis[1].data;

          dx0.shift();
          dx0.push(axisData);
          dx1.shift();
          dx1.push(app.count++);

          myChart.setOption(option);

        }, 2100);
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
