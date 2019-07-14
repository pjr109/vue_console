<template>
  <div class="DetailContent">
    <div><img :src="guangg" class="img"/></div>
    <hr>
    <div class="autorInfo">
      <ul class="leftbox">
        <li class="title">{{autor.title}}</li>
        <li class="time">{{autor.time}}</li>
        <li class="time">{{autor.cont}}
            <div class="bottom grey">
              <i class="el-icon-view"></i>{{autor.see}}
              <i class="el-icon-edit-outline"></i>{{autor.msg}}
              <i class="el-icon-star-off"></i>{{autor.admire}}
            </div>
        </li>
      </ul>
      <div class="rightbox">
        <div class="picture"><img :src="autor.imgurl"/></div>
        <ul class="introduce">
          <li class="name">{{autor.name}}</li><li class="addr">{{autor.addr}}</li>
          <li class="addr">
            <el-button type="primary">关注</el-button>
            <el-button type="success">私信</el-button>
          </li>
        </ul>
      </div>
    </div>
    <hr>
    <div class="detail_content" v-html="content"></div>
    <div class="zan" v-on:click="plusconst"><i class="el-icon-star-off"></i><br/>{{conts}}</div>
    <hr>
    <ul class="tag">
      <label>标签：</label><li>美食摄影</li><li>小家电摄影</li><li>电商摄影</li><li>产品摄影</li><li>小熊电器</li>
      <li style="float:right; border:none; padding:0; margin:0">
        <el-button><i class="el-icon-share"></i> 分享</el-button>
        <el-button><i class="el-icon-star-off"></i> 收藏</el-button>
      </li>
    </ul>
    <!------------  about this opus  -------------->
    <div class="box">
      <div class="bottombox">
        <div class="leftbox">
          <div class="autor">
            <div class="picture"><img :src="autor.imgurl"/></div>
            <ul class="introduce">
              <li class="name">{{autor.name}}</li><li class="addr">{{autor.addr}}</li>
              <li class="buttom">
                <el-button type="primary">关注</el-button>
                <el-button type="success">私信</el-button>
              </li>
            </ul>
          </div>
        </div>
        <!-------left box end------>
        <div class="rightbox">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="相关作品" name="first">
              <ul class="picbox">
                <li v-for="(pic,index) in aboutpro">
                  <img v-bind:src="pic.url" class="image">
                  <span>{{ pic.title }}</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="收录收藏" name="second">
              <ul class="picbox">
                <li v-for="(pic,index) in aboutpro1">
                  <img v-bind:src="pic.url" class="image">
                  <span>{{ pic.title }}</span>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
          <!-------------- tabs end -------------->
          <div class="leavemsg">
            <div class="comment">
              <el-input v-model="input" placeholder="请输入内容"></el-input>
              <el-button>评论</el-button>
            </div>
            <hr/>
            <div class="Commentary">
              <div class="totle">全部评论 {{totle}}</div>
              <div class="abox" v-for ="com in comment">
                <div class="pic"><img :src="com.imgurl" /></div>
                <ul class="rbox">
                  <li class="name">{{com.name}}</li>
                  <li class="cont">{{com.content}}</li>
                  <li class="time">{{com.time}} <span><i class="el-icon-more-outline" @click="com.isok = !com.isok"></i> <i class="el-icon-star-off"></i> {{com.zan}}</span></li>
                  <li class="comment1" v-if="com.isok">
                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                    <el-button>评论</el-button>
                  </li>
                </ul>
              </div>
              <div>查看更多评论>></div>
            </div>
            <!----------评论结束------------>
          </div>
          <!-------------- pinglun end------------------>
          <div class="likemore">
            <div class="title">你可能喜欢</div>
            <div class="picbox">
              <div v-for="(pic,index) in aboutpros" class="morbox">
                <img v-bind:src="pic.url">
                <div style="padding: 14px; text-align:left">
                  <span class="title">{{ pic.title }}</span>
                  <div class="clearfix">
                    <time classcard="time">{{ pic.ecod }}</time>
                  </div>
                  <div class="bottom grey">
                    <i class="el-icon-view"></i>{{pic.see}}
                    <i class="el-icon-edit-outline"></i>{{pic.msg}}
                    <i class="el-icon-star-off"></i>{{pic.admire}}
                  </div>
                  <hr/>
                  <div class="autor">
                    <span>{{pic.author}}</span>
                    <span style="float:right;color:#999">{{pic.time}}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <!----------------------->
        </div>
        <!-------right box end-------->

      </div>
    </div>
    

  </div>
</template>

<script>
import https from "../assets/js/http";
import "../assets/css/detail.css"

export default {
  name: 'DetailContent',
  data () {
    return {
      totle:0,
      time:0,
      input:"",
      aboutpro:[],
      aboutpros:[],
      aboutpro1:[],
      activeName: 'second',
      guangg:"",
      content:"",
      conts:0,
      autor:{
        title:"来自灵魂的拷问 | 小熊电饼铛 ✖ foodography ",
        time:"16小时前发布",
        cont:"原创作品 / 摄影 / 产品 ",
        see:500,
        msg:2146,
        admire:99,
        imgurl:"../static/img/autor.jpg",
        name:"Foodography ",
        addr:"广州 | 广告营销/艺术"
      },
      comment:[]
    }
  },
  mounted() {
    
  },
  methods:{
    plusconst: function(){
      this.conts ++;
    },
    handleClick(tab, event) {
        console.log(tab, event);
      }
  },
  created (){
    this.$http.fetchGet(this.API.detail).then((data) =>{
      this.guangg = data.data.ggao;
      this.content = data.data.detailcontent;
      this.aboutpro = data.data.aboutpro;
      this.aboutpro1 = data.data.aboutpro1;
      this.aboutpros = data.data.aboutpros;
      this.comment = data.data.comment;
      this.totle = data.data.comment.length;
    })
  }
}
</script>

<style scoped>

</style>
