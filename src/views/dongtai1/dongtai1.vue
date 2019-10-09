<template>
<div>
  <h1 style="text-align: left;text-indent: 1em;">2018年12月25日-2018年12月29日动态</h1>
  <div style="width: 90%;margin:0 auto;">

    <hr color="green" style="width: 100%" >
    <div >
      <div style="width: 450px;float: left;display: inline;">
        <img src="../../assets/d1.jpg" />
      </div>
      <div style="display: inline;">
        <p class="ziti">任务：产品调研报告+数据采集+数据转换 </p>
        <p class="ziti">完成情况：报告已完成。 已可用开发板向气体变送器发送请求，并从气体变送器实时接收数据。 数据转换已开始操作。</p>
        <p class="ziti">出现问题：开发板RS485总线连接气体变送器，无提示出现，也没有数据显示。</p>
        <p class="ziti">解决办法：气体变送器机制：向特定端口（ttyO1）发送格式正确的指令，才会有数据返回。一发，一收。</p>

      </div>
    </div>

    <hr color="green" style="width: 100%" >

    <div>
      <div style="width: 450px;float: left;display: inline;">
        <img src="../../assets/d2.jpg" />
      </div>
      <div style="display: inline;">
        <p class="ziti">任务：需求分析报告+视频采集+传输 </p>
        <p class="ziti">完成状况： 完成了需求分析报告的大致内容。 可实现linux的ffmpeg+nginx推流rtmp，局域网内可使用相关播放器观看。</p>
        <p class="ziti">出现问题:摄像头可被检测到，但是播放软件黑屏。</p>
        <p class="ziti">解决办法：播放软件不要用cheese，用guvcview，并把虚拟机的usb2.0设置成usb3.0。</p>
      </div>
    </div>

    <hr color="green" style="width: 100%" >

    <div>
      <div style="width: 450px;float: left;display: inline;">
        <img src="../../assets/d3.jpg" />
      </div>
      <div style="display: inline;">
        <p class="ziti"> 任务：本地传感器数据库+服务器用户信息库+日志文件+前端访问后端的接口。</p>
        <p class="ziti">完成状况：完善了需求分析报告。 安装qt以及对web后端的学习和完成。目前qt的安装解决了，还在对idea工具对后端编程的学习。</p>
        <p class="ziti">出现问题:对java的类和框架不熟悉，对任务不知从何下手。请教了学长学姐，理清了整个思路，一步步开始学习和熟悉。</p>
      </div>
    </div>

    <hr color="green" style="width: 100%" >

    <div>
      <div style="width: 450px;float: left;display: inline;">
        <img src="../../assets/d4.jpg" />
      </div>
      <div style="display: inline;">
        <p class="ziti">任务：本地传感器数据库+服务器用户信息库+日志文件+前端访问后端的接口 </p>
        <p class="ziti">已完成：搭建NFS网络文件系统、交叉编译ARM平台的QT。正在进行：web后端</p>
        <p class="ziti">出现问题:交叉编译QT时出现的若干问题。解决办法是上网找教程、博客，然后修改一些环境变量和配置</p>
      </div>
    </div>

    <hr color="green" style="width: 100%" >

    <div>
      <div style="width: 450px;float: left;display: inline;">
        <img src="../../assets/d5.jpg" />
      </div>
      <div style="display: inline;">
        <p class="ziti">任务：QT界面+ WEB界面 </p>
        <p class="ziti">完成状况：学习了如何安装和使用qt，以及vue框架。 初步完成qt和开发板的交叉编译，并且用qt编写了一个界面。</p>
        <p class="ziti">出现问题:安装qt和vue框架出现了一些小问题，通过上网搜索解决了。</p>
      </div>
    </div>

  </div>

</div>
</template>

<script>
    export default {
        name: "dongtai1"
    }
</script>

<style scoped>

  .ziti{
    text-align: left; font-size: 20px; color: #3b3b3b;text-indent: 2em; letter-spacing: 2px;line-height: 160%;
  }

</style>
