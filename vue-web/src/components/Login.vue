<template>
  <div class="Login" style="display:flex;flex-direction:column">
    <div class="head">
      <Header></Header>
    </div>
    <div class="main">
      <div class="comm_o1">
          <ul>
            <li class="comm_userinfo">
              <label>用户名：</label>
              <el-input  placeholder="请输入用户名"  v-model="userName"  clearable></el-input>
            </li>
            <li class="comm_userinfo">
              <label>密码：</label>
              <el-input v-model="pwd" type="password" placeholder="请输入密码"></el-input>
            </li>
            <li class="button_submit">
              <el-button type="primary" v-on:click="submitForm()">提交</el-button>
              <el-button v-on:click="reset()">重置</el-button>
            </li>
          </ul>
        </div>
    </div>
    <div class="foot">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import https from "../assets/js/http";
import Header from "./Header";
import Footer from "./Footer";

export default {
  name: 'Login',
  components: {
    "Header":Header,
    "Footer":Footer
  },
  data () {
    return {
      logimg:"../static/img/logo.png",
      userName: '',
      pwd:''
    }
  },
  methods:{
    submitForm: function(){
      if(this.userName == "" || this.pwd == ""){
        alert("请输入用户名和密码");
      }else{
        this.$http.fetchGet(this.API.user)
          .then((data) => {
            var data = data.data.list;
            var d = 0
            for(var i=0;i<data.length;i++){
              if(this.userName == data[i].name){
                if(this.pwd == data[i].pwd){
                  this.$router.push({
                    path: '/'
                  })
                  d = 1;
                }
              }
            }
            if(d !=1){
              alert("用户名或密码错误！")
            }
        }).catch((err)=>{
            console.log(err)
        })
      }
    },
    reset: function(){
      console.log(this.userName + " " + this.pwd);
    }
  }
}
</script>

<style scoped>
.Login{ width: 100%; height: 100%;}
.head{ flex:0 0 56px; align-items: flex-start; justify-content: center;background-color: #FFE300;}
.main{ flex:1; align-items: center; justify-content: center;}
.foot{ flex:0 0 229px; align-items: flex-end; justify-content: center;background-color: #282828;
    color: #666666; text-align: center; height: 230px !important;}
.comm_o1{height:300px; width: 400px; margin: 100px auto; padding: 40px; box-sizing: border-box; 
border:1px solid #d2d2d2; background-color: #ffffff; border-radius: 5px}
.comm_userinfo{  width: 300px; height: 70px; text-align:left; line-height: 40px}
.comm_userinfo label{  width: 80px; text-align: right; float: left;}
.comm_userinfo div{  width: 220px; height: 30px; line-height: 30px; float: left; border-radius:5px }
.button_submit{display: flex;justify-content:center;align-items:center;}
</style>
