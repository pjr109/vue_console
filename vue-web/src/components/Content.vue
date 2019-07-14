<template>
  <div class="Content">
    <div class="menus1">
    <el-menu v-bind:default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">首页推荐</el-menu-item>
      <el-menu-item index="2">最新发布</el-menu-item>
      <el-menu-item index="3">上升最快</el-menu-item>
    </el-menu>
    </div>
    <!--导航本行结束啦-->
    <div class="mainbox">
    <el-row>
      
      <el-col v-bind:span="4" v-for="(card, index) in cards" style="margin:20px 23px 0 23px">
        <el-card v-bind:body-style="{ padding: '0px' }">
          <router-link v-bind:to="to"><img v-bind:src="card.url" class="image"></router-link>
          <div style="padding: 14px; text-align:left" class="cards">
            <span>{{ card.title }}</span>
            <div class="top clearfix">
              <time classcard="time">{{ card.ecod }}</time>
            </div>
            <div class="bottom grey">
              <i class="el-icon-view"></i>{{card.see}}
              <i class="el-icon-edit-outline"></i>{{card.msg}}
              <i class="el-icon-star-off"></i>{{card.admire}}
            </div>
            <hr/>
            <div>
              <span>{{card.author}}</span>
              <span style="float:right;color:#999">{{time}}</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div class="page"><el-pagination background layout="prev, pager, next" :total="pagination" :page-size="20" :current-page="currentPage"
    v-on:current-change="pagesizechange" @prev-click="pagesizechange" @next-click="pagesizechange"></el-pagination></div>
    
    </div>

  </div>
</template>

<script>
import https from "../assets/js/http";

export default {
  name: 'Content',
  data () {
    return {
      to:"/detail",
      allData:[],
      pagination:1000,
      currentPage:1,
      activeIndex: '1',
      cards:[],
      currentDate: new Date(),
      imgurl:"../static/img/card01.jpg",
      time:""
    }
  },
  mounted() {
    
  },
  methods:{
    detaildata: function( data ){
      this.$emit("detaildata",data);
    },
    pagesizechange:function(val) {
      var start = (val-1)*20;
      var end = val*20;
      var data = [];
      for(var i= start;i<end;i++){
        data.push(this.allData[i]);
      }
      this.cards = data;
    }
  },
  created (){
    this.$http.fetchGet(this.API.main).then((data) =>{
      this.allData = data.data.list;
      this.pagination = data.data.list.length;
      var start = 0;
      var end = 20;
      var data = [];
      for(var i= start;i<end;i++){
        data.push(this.allData[i]);
      }
      this.cards = data;

      var date = new Date();
      return this.time = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    })
  }
}
</script>

<style scoped>
.cards a{ text-decoration: 0}
.menus1{
  display: flex;
  justify-content: center;
  align-items:center;
  width: 100%; background: #ffffff
}
.newcard{
    width:1380px;
     margin:5px 0 30px 0;
}
.page{ margin: 30px auto;}
.el-pager li.active{background-color: #F6C708 !important;}
.el-pagination.is-background .el-pager li:not(.disabled).active{background-color: #F6C708 !important;}
.grey{color:#999}
.Content{display: flex;justify-content: space-between;flex-direction: column;align-items:center;}
.mainbox{
    width:1420px;
    margin:5px 0 10px 0;
}
.el-col-4{margin-top: 30px}
.time {
    font-size: 13px;
    color: #999;
  }
  .top {
    margin-top: 3px;
    line-height: 12px;
    padding: 0;
  }
  .bottom {
    padding-bottom: 10px;
    margin-top: 13px;
    line-height: 12px;
    height: 24px;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
