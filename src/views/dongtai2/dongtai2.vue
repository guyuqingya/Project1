<template>
  <div>
    <h1 style="text-align: left;text-indent: 1em;">2018年12月31日-2019年1月6日动态</h1>

    <div style="width: 90%;margin:0 auto;">
      <hr color="green" style="width: 100%" >
      <div>
        <div style="width: 450px;float: left;display: inline;">
          <img src="../../assets/a.jpg" />
        </div>
        <div style="display: inline;">
          <p class="ziti">任务：数据转换、arm连接sqlite3数据库、arm用socket访问ubuntu及windows、日志功能实现、qt界面设计 </p>
          <p class="ziti">完成情况：数据转换、arm连接sqlite3数据库、arm用socket访问ubuntu及windows、日志功能实现 已完成。
            正在着手qt界面。</p>
          <p class="ziti">出现问题：向sqlite3数据库写入数据，第二次打开，写入失败</p>
          <p class="ziti">解决办法：添加序号，每次获取最后一位地址，往后延续。</p>

        </div>
      </div>

      <hr color="green" style="width: 100%" >

      <div>
        <div style="width: 450px;float: left;display: inline;">
          <img src="../../assets/b.jpg" />
        </div>
        <div style="display: inline;">
          <p class="ziti">任务：视频采集+传输+环境部署+安全测试 </p>
          <p class="ziti">完成状况： 嵌入式端部署mjpeg-streamer，sqlite3和samba。 采用mjpeg-streamer进行视频采集和部署到web端。 发现了web端的用户登录存在sql注入漏洞。</p>
          <p class="ziti">出现问题:ffmpeg+nginx的视频播放存在较高延迟。</p>
          <p class="ziti">解决办法：优化无果，改用mjpeg-streamer。</p>
        </div>
      </div>

      <hr color="green" style="width: 100%" >

      <div>
        <div style="width: 450px;float: left;display: inline;">
          <img src="../../assets/c.jpg" />
        </div>
        <div style="display: inline;">
          <p class="ziti"> 任务：web后端</p>
          <p class="ziti">完成状况：完成了web前后端登录的数据交互。 修复了sql注入漏洞。</p>
          <p class="ziti">出现问题:对java语法以及基础的知识储备不足，对spring boot和操作的生疏。</p>
        </div>
      </div>

      <hr color="green" style="width: 100%" >

      <div>
        <div style="width: 450px;float: left;display: inline;">
          <img src="../../assets/d.jpg" />
        </div>
        <div style="display: inline;">
          <p class="ziti">完成状况：部分web后端、qt界面显示实时数据并存储到嵌入式数据库sqlite和服务器的数据库mysql。</p>
          <p class="ziti">出现问题:手动更新开发板上动态库libc.so.6时，操作不当删了libc.so.6
            ，导致ln、cp等一系列命令无法使用。此时正确的操作应当立即将LD_PRELOAD设置为libc.so.6链接到的那个动态库上，
            结果当时重启了开发板，最后导致无法开机。尝试了网上的教程进入救援模式，但是操作过于复杂，最后还是选择了重装系统。</p>
        </div>
      </div>

      <hr color="green" style="width: 100%" >

      <div>
        <div style="width: 450px;float: left;display: inline;">
          <img src="../../assets/a.jpg" />
        </div>
        <div style="display: inline;">
          <p class="ziti">任务：WEB前端 </p>
          <p class="ziti">完成状况： 完成了用户登录与注册界面以及与后台请求.粗略完成了功能界面。正在解决前端与后端实时接收数据的问题</p>
          <p class="ziti">出现问题:一开始用http在向后端请求的时候出现问题，没有解决，后来改用axios像后端请求，解决了.
            在登录界面进行优化的时候，在用粒子动画的时候出现了一些问题，最后百度解决了。</p>
        </div>
      </div>


    </div>

  </div>
</template>

<script>
  export default {
    name: "dongtai2"
  }
</script>

<style scoped>

  .ziti{
    text-align: left; font-size: 20px; color: #3b3b3b;text-indent: 2em; letter-spacing: 2px;line-height: 160%;
  }

</style>
