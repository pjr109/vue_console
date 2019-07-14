<template>
  <div class="Header">
    <el-row>
      <el-col :span="4"><div class="grid-content1" v-on:click="changeTitle"><i class="el-icon-info"></i>{{title}}</div></el-col>
      <el-col :span="12">
        <!-- <div class="grid-content">
          <div class="dropdown" v-for="row in menus">
            <button class="dropbtn"><router-link v-bind:to="row.to">{{row.fmenu}}</router-link></button>
            <div class="dropdown-content" v-if="row.childmenu">
              <a href="" v-for="child in row.childmenu">{{child.cmenu}}</a>
            </div>
          </div>
        </div> -->
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
        <template v-for="row in menus">
          <el-menu-item :index="row.index" v-if="!row.childmenu"><router-link :to="row.to">{{row.fmenu}}</router-link></el-menu-item>
          <el-submenu :index="row.index" v-if="row.childmenu">
            <template slot="title"><router-link :to="row.to">{{row.fmenu}}</router-link></template>
            <el-menu-item :index="child.index" v-for="child in row.childmenu"><router-link :to="row.to">{{child.cmenu}}</router-link></el-menu-item>
          </el-submenu>
        </template>
      </el-menu>
      </el-col>
      <el-col :span="8"><div class="grid-content search_up">
        <i class="el-icon-search"></i>
        <i class="el-icon-upload"></i>
        <span><router-link v-bind:to="logurl">登录</router-link></span>
        <span>注册</span>
      </div></el-col>
    </el-row>
    
  </div>
</template>

<script>
import https from "../assets/js/http";

export default {
  name: 'Header',
  props:{
    title:{
      type:String
    }
  },
  data () {
    return {
      router:true,
      activeIndex:"1",
      menus:[],
      logurl:"/login"
    }
  },
  methods:{
    changeTitle: function(){
      this.$emit("titleChanged","子向父组件传值");
    }
  },
  created: function(){
    this.$http.fetchGet("http://localhost:8080/static/menus.json").then((data) =>{
      this.menus = data.data;
    })
  }
}
</script>

<style scoped>
.el-menu{ background-color: #FFE300}
.el-menu.el-menu--horizontal{
  padding:0; margin: 0; height: 60px; border-bottom: none;
}
.el-menu--horizontal>.el-menu-item{ margin: 0; padding: 0}
.el-menu--horizontal>.el-menu-item:hover{ margin: 0; padding: 0}
.el-menu a{color: #282828; border:none; text-decoration: none;
 padding:20px 30px; height: 20px; line-height: 20px;
 }
.el-menu a:hover{ background: #282828; color: #ffe300;}
.el-menu-item{color: #282828;}
.el-menu-item:hover{color: #ffe300; background-color: #282828;}
.el-menu--horizontal>.el-menu-item{color: #282828; text-decoration: none}
.el-menu--horizontal>.el-menu-item:hover{ background: #282828; color: #FFE300}
.el-menu--horizontal>.el-submenu.is-opend{color: #282828 !important}
.el-menu--horizontal>.el-submenu:hover, .el-menu--horizontal>.el-menu-item:hover{ background: #282828; color: #FFE300}
.el-menu--horizontal>.el-menu-item.is-active:hover{ border-bottom: none; color: #FFE300;}
.el-menu-item{transition:none;}
.el-menu--horizontal .el-menu .el-menu-item a, .el-menu--horizontal .el-menu .el-submenu__title a{ 
  padding:0 !important; margin:0 !important; background-color: none; width:175px;
}
.el-menu--horizontal .el-menu .el-menu-item a:hover, .el-menu--horizontal .el-menu .el-submenu__title a:hover{
  padding:0 !important; margin:0 !important; background: #FFE300; color: #282828
}

.search_up{ margin-top: 10px;  }
.search_up i{ padding:0 20px; font-size: 20px !important }
.search_up span{ padding:0 20px; font-size: 12px !important }
.el-row { }
.el-col { border-radius: 4px; }
.grid-content { border-radius: 4px; min-height: 36px; text-align: right }
.grid-content a{ color:#282828; }
.grid-content i {font-size: 36px; margin-top: 10px}
.row-bg { padding: 10px 0; background-color: #f9fafc; }
.grid-content1 { border-radius: 4px; min-height: 36px; text-align: left  }
.grid-content1 a{ color:#282828;   }
.grid-content1 i {font-size: 36px; margin-top: 10px}
</style>
