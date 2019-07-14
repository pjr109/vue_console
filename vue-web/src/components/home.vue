<template>
  <div class="Home">
    <el-container>
      <el-header>
        <Header v-bind:title="title" v-on:titleChanged="updateTitle($event)"></Header>
        <!--header components-->
      </el-header>
      <el-main>
        <Carousel></Carousel>
        <Content></Content>
        <BottomContent></BottomContent>
      </el-main>
      <el-footer>
        <Footer v-bind:ctitle="title"></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
// import https from "../assets/js/http";
import Header from "./Header";
import Carousel from "./Carousel";
import Content from "./Content";
import BottomContent from "./BottomContent"
import Footer from "./Footer";
import "../assets/css/home.css"

export default {
  name: 'Home',
  components: {
    "Header":Header,
    "Carousel":Carousel,
    "Content":Content,
    "BottomContent":BottomContent,
    "Footer":Footer
  },
  data () {
    return {
      title:"app.vue Demo "
    }
  },
  methods:{
    updateTitle:function(newtitle){
      this.title = newtitle;
    }
  }
}
</script>

<style scoped >

</style>
