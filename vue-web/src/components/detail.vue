<template>
  <div class="Home">
    <el-container>
      <el-header>
        <Header v-bind:title="title"></Header>
        <!--header components-->
      </el-header>
      <el-main v-on:detaildata="getdata($event)">
        <DetailContent></DetailContent>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
// import https from "../assets/js/http";
import Header from "./Header";
import DetailContent from "./DetailContent";
import Footer from "./Footer";
import "../assets/css/home.css"

export default {
  name: 'Home',
  components: {
    "Header":Header,
    "Footer":Footer,
    "DetailContent":DetailContent
  },
  data () {
    return {
      title:"app.vue Demo ",
      detailinfo:{}
    }
  },
  methods:{
    getdata:function(data){
      this.detailinfo = data;
    }
  }
}
</script>

<style scoped >

</style>
