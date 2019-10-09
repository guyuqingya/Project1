<template>
  <div>
    <h1 style="text-align: left;text-indent: 1em;">2019年1月7日-2019年1月13日</h1>

    <div style="width: 90%;margin:0 auto;">
      <hr color="green" style="width: 100%" >
      <div>
        <div style="width: 450px;float: left;display: inline;">
          <img src="../../assets/a1.jpg" />
        </div>
        <div style="display: inline;">
          <p class="ziti">任务：qt界面设计 </p>
          <p class="ziti">完成情况：页面设计完成、跳转完成、跳转动画完成、按钮变形完成、字体变形、加载gif动画完成（余铭琦提供图片ps支持）</p>
          <p class="ziti">出现问题：pushbutton 和 label 背景默认为 窗体背景的左上角</p>
          <p class="ziti">解决办法：在改变表样式时 添加 #{back-ground。。。。。}。</p>

        </div>
      </div>

      <hr color="green" style="width: 100%" >

      <div>
        <div style="width: 450px;float: left;display: inline;">
          <img src="../../assets/a2.jpg" />
        </div>
        <div style="display: inline;">
          <p class="ziti">任务：嵌入式端视频显示与优化 </p>
          <p class="ziti">完成状况：在胡元瑞的帮助下，已完成。</p>
          <p class="ziti">出现问题:嵌入式端程序和推流服务器同时读取设备，会造成冲突。</p>
          <p class="ziti">解决办法：嵌入式端程序不再直接读取设备，而是读取网页视频流。</p>
        </div>
      </div>

      <hr color="green" style="width: 100%" >

      <div>
        <div style="width: 450px;float: left;display: inline;">
          <img src="../../assets/a3.jpg" />
        </div>
        <div style="display: inline;">
          <p class="ziti"> 完成状况：和队友张凌峰共同完成了开发板上显示屏的ui设计，充分应用了photoshop技术对所有ui界面进行了美化加工。
            增加了后端的记录error的日志功能以及编译的info级别的日志功能。
            加强了前端对请求数据的要求。
            完成了后端打包的任务，以及和前端一起打包移植到服务器的任务。
            加深了对该项目现有市面上产品的调研，对我团队项目的产品更加改善，完成了调研报告。</p>
        </div>
      </div>

      <hr color="green" style="width: 100%" >

      <div>
        <div style="width: 450px;float: left;display: inline;">
          <img src="../../assets/a4.jpg" />
        </div>
        <div style="display: inline;">
          <p class="ziti">完成状况：嵌入式端历史数据查询，日志分等级查询，实时显示视频，程序设为开机自启动。
            帮助潘华著改了2个关键BUG。</p>
          <p class="ziti">出现问题:重启开发板时间会初始化为2000年。搭建NTP服务，开机自动获取网络时间，并要设置时区。</p>
        </div>
      </div>

      <hr color="green" style="width: 100%" >

      <div>
        <div style="width: 450px;float: left;display: inline;">
          <img src="../../assets/a5.jpg" />
        </div>
        <div style="display: inline;">
          <p class="ziti">任务：WEB前端 </p>
          <p class="ziti">完成状况： 前端功能全部完成了，部分功能进行了优化，正在进行细节方面的优化</p>
          <p class="ziti">出现问题:将web端历史记录的表格以excel形式导到本地的时候一直提示找不到元素，后来百度了才知道，一定要先给他一个id。</p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: "dongtai3"
  }
</script>

<style scoped>

  .ziti{
    text-align: left; font-size: 20px; color: #3b3b3b;text-indent: 2em; letter-spacing: 2px;line-height: 160%;
  }

</style>
