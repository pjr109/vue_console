<!--模板：HTML结构-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<!--行为：处理逻辑-->
<script>

//局部注册引用

export default {
  name: 'App',
  components: {
  }
}
</script>
<!--样式-->
<style>
/*公共样式--开始*/
html, body, div, ul, li, h1, h2, h3, h4, h5, h6, p, dl, dt, dd, ol, form, input, textarea, th, td, select {
    margin: 0;
    padding: 0;
}
*{box-sizing: border-box;}
html, body {
    height: 100%; width: 100%;
}
body {
    font-family: "Microsoft YaHei";
    font-size:14px;
    color:#333;
}
h1, h2, h3, h4, h5, h6{font-weight:normal;}
ul,ol {
    list-style: none;
}
img {
    border: none;
    vertical-align: middle;
}
#app{
  width: 100%; height: 100%;min-width: 1310px;
}
</style>
