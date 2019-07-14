<template>
  <div class="BottomContent">
    
    <div class="newcard">
      <div><img v-bind:src="bannerimg" class="image"></div>
      <el-row>
        <el-col :span="4" v-for="(card, index) in newcard" v-bind:offset="index > 0 ? 1 : 0">
            <el-card v-bind:body-style="{ padding: '0px' }">
            <img v-bind:src="card.url" class="image">
            <div style="padding: 14px; text-align:left">
              <span>{{ card.title }}</span>
            </div>
            </el-card>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
import https from "../assets/js/http";

export default {
  name: 'BottomContent',
  data () {
    return {
      to:"/detail",
      bannerimg:"../static/img/b1.jpg",
      newcard:[],
    }
  },
  mounted() {
    
  },
  methods:{
  },
  created (){
    this.$http.fetchGet(this.API.main).then((data) =>{
      this.newcard = data.data.newcard;
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
.BottomContent{display: flex;justify-content: space-between;flex-direction: column;align-items:center;}
.el-col-4{margin-top: 30px}
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
