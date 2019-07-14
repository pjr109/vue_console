<template>
<div class="bannerbox">
  <div class="Carousel">
    <el-carousel :interval="5000" arrow="always" height="350px">
        <el-carousel-item v-for="(item,index) in images" :key="index">
            <img v-bind:src="item.imgurl" />
        </el-carousel-item>
    </el-carousel>
    <br/><br/>

    <!--banner end-->
    <el-row>
        <el-col :span="4" v-for="(o, index) in cards" v-bind:offset="index > 0 ? 1 : 0">
            <el-card :body-style="{ padding: '0px' }">
            <img v-bind:src="o.imgurl" class="image">
            </el-card>
        </el-col>
    </el-row>
    <!--pic card end-->
    

  </div>
</div>
</template>

<script>
import https from "../assets/js/http";

export default {
  name: 'Carousel',
  data () {
    return {
        images:[],
        cards:[],
        currentDate: new Date()
    }
  },
  mounted () {
  },
  created () {
    this.$http.fetchGet(this.API.main).then((data) =>{
      this.images = data.data.images;
      this.cards = data.data.cards;
    })
  },
  methods:{
      
  }
}
</script>

<style scoped>
.bannerbox{
    width:100%;
    background-color: #ffffff;
    padding:20px 0;
}
.Carousel{
    width:1380px;
     margin:5px auto;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  /*****************************/
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
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
