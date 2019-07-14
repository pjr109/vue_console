<template>
  <div class="Footer">
    <ul class="flex_center_center">
      <li v-for="menu in menus">
        <a href="">{{menu}}</a>
      </li>
      {{ctitle}}
    </ul>
    <hr/>
    <ul class="flex_center_center1">
      <li v-for="title in titles">{{title}}</li>
    </ul>
  </div>
</template>

<script>
import https from "../assets/js/http";

export default {
  name: 'Footer',
  props:{
    ctitle:{
      type:String
    }
  },
  data () {
    return {
      menus:["移动版", "关于我们", "加入站酷", "用户协议", "隐私政策", "侵权申诉", "企业服务", "帮助中心", "联系我们", "中文", "English"],
      titles:["京ICP备11017824号",  "京ICP证130164号",  "京公网安备11010502000501号",  "网络文化经营许可证", "京网文[2016]6173-844号",
        "广播电视节目制作经营许可证（京）字第06990号","网上有害信息举报专区",  "不良信息举报电话：010-56538658",
        "举报邮箱 jubao@zcool.com.cn",  "联系电话：010-56538600", "Copyright © 2006-2019 ZCOOL站酷"]
    }
  },
  methods:{

  }
}
</script>

<style scoped>
.Footer{ width: 100%; margin: 0 auto}
.flex_center_center {display: flex;justify-content:center;align-items:center; margin: 40px auto;box-sizing: border-box; padding: 0 20px}
.flex_center_center li {text-align: center; padding: 0 20px}
.flex_center_center li a{ color:#666666; text-decoration: none}
.flex_center_center li a:hover{ color:#fafafa}
hr{ height:1px;border:none;border-top:1px dashed #666666;}
.flex_center_center1 { margin: 20px 0}
.flex_center_center1 li {float:left; text-align: center; padding:10px; margin-right: 20px}
</style>
