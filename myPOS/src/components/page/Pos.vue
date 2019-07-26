<template>
  <div class="Pos">
    <el-row>
      <el-col :span='7' class="pos-order" id="posHeight">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="tableData" stripe border style="width: 100%">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量" width="70"></el-table-column>
              <el-table-column prop="price" label="价格" width="70"></el-table-column>
              <el-table-column label="操作" width="100" fixed="right">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="reduceOrderList(scope.row)">删除</el-button>
                  <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="total">
              <small>商品数量：</small> {{totalCount}} &nbsp;&nbsp;&nbsp;&nbsp;
              <small>价格总计：</small> {{totalMoney}}
            </div>
            <div class="div-btn">
              <el-button type="primary" @click="listOrder">挂单</el-button>
              <el-button type="warning" @click="delAllGoods">删除</el-button>
              <el-button type="success" @click="checkout">结账</el-button>
            </div>

          </el-tab-pane>
          <el-tab-pane label="挂单">
            <template v-for="(data1, index) in tableData1">
              <el-table :data="data1.datas" stripe border style="width: 100%">
                <el-table-column prop="goodsName" label="商品名称"></el-table-column>
                <el-table-column prop="count" label="数量" width="70"></el-table-column>
                <el-table-column prop="price" label="价格" width="70"></el-table-column>
              </el-table>
              <div class="total">
                <small>商品数量：</small> {{data1.totalCount1}} &nbsp;&nbsp;&nbsp;&nbsp;
                <small>价格总计：</small> {{data1.totalMoney1}}
              </div>
              <div class="div-btn">
                  <el-button type="warning" @click="delAllGoods1(index)">删除</el-button>
                  <el-button type="success" @click="checkout1(index)">结账</el-button>
              </div>
            </template>
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span='17'>
        <div class="often-goods">
            <div class="title">常用商品</div>
            <div class="often-goods-list">
              <ul>
                <li v-for='goods in oftenGoods' @click="addOrderList(goods)">
                  <span>{{goods.goodsName}}</span>
                  <span class="o-price">￥{{goods.price}}元</span>
                </li>
              </ul>
            </div>
        </div>

        <div class="goods-type">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <ul class='cookList'>
                <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                  <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">￥{{goods.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="小食">
              <ul class='cookList'>
                <li v-for="goods in type1Goods" @click="addOrderList(goods)">
                  <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">￥{{goods.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <ul class='cookList'>
                <li v-for="goods in type2Goods" @click="addOrderList(goods)">
                  <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">￥{{goods.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <ul class='cookList'>
                <li v-for="goods in type3Goods" @click="addOrderList(goods)">
                  <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">￥{{goods.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Pos',
  data () {
    return {
      type0Goods: [],
      type1Goods: [],
      type2Goods: [],
      type3Goods: [],
      oftenGoods: [],
      tableData: [],
      tableData1: [],
      tableData2: [],
      totalCount:0,
      totalMoney:0,
      totalCount1:0,
      totalMoney1:0
    }
  },
  created: function () {
    axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods')
    .then(response=>{
      this.oftenGoods=response.data;
    })
    .catch(error=>{
      alert("数据请求失败！")
    })

    axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/typeGoods')
    .then(response=>{
      this.type0Goods=response.data[0];
      this.type1Goods=response.data[1];
      this.type2Goods=response.data[2];
      this.type3Goods=response.data[3];
    })
    .catch(error=>{
      alert("数据请求失败！")
    })
  },
  mounted: function () {
    var posHeight = document.body.clientHeight
    document.getElementById('posHeight').style.height = posHeight + 'px'
  },
  methods: {
    addOrderList(goods){
      //判断订单中是否有当前产品
      let isHave = false;
      for(let i=0; i<this.tableData.length; i++){
        if(this.tableData[i].goodsId == goods.goodsId){
          isHave = true;
        }
      }
      //增加订单
      if(isHave){
        let arr = this.tableData.filter(o=>o.goodsId == goods.goodsId)
        arr[0].count++;
      }else{
        let newGoods = {goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1};
        this.tableData.push(newGoods);
      }
      this.delSigleGoods();
    },
    reduceOrderList(goods){
      this.tableData=this.tableData.filter(o => o.goodsId !=goods.goodsId);
      this.delSigleGoods();
    },
    delAllGoods(){
      this.tableData = [];
      this.totalCount = 0;
      this.totalMoney = 0;
    },
    delSigleGoods(){
      this.totalCount = 0;
      this.totalMoney = 0;
      if(this.tableData){
        this.tableData.forEach((pro)=>{
          this.totalCount+=pro.count;
          this.totalMoney += (pro.count*pro.price);
        })
      }
    },
    checkout(){
      if(this.totalCount != 0){
        this.tableData = [];
        this.totalCount = 0;
        this.totalMoney = 0;
        this.$message({
          message: '结账成功，感谢你又为店铺出了一份力！',
          type: 'success'
        })
      }else{
        this.$message.error('不能空结，老板理解你急切的心情！')
      }
    },
    listOrder(){
      if(this.totalCount!=0){
        var newdata = {
          totalCount1: this.totalCount,
          totalMoney1: this.totalMoney,
          datas: this.tableData
        }
        this.tableData1.push(newdata);
      }
      this.tableData = [];
      this.totalCount = 0;
      this.totalMoney = 0;
    },
    delAllGoods1(index){
      this.tableData1.splice(index,1);
    },
    checkout1(index){
      this.tableData1.splice(index,1);
      this.$message({
        message: '结账成功，感谢你又为店铺出了一份力！',
        type: 'success'
      })
    }
  }
}
</script>

<style scoped>
.total{
  padding:10px;
  background-color: #ffffff;
  border-bottom: 1px solid #c0ccda;
}
.pos-order{
background-color: #f9fafc;
border:1px solid #c0ccda;
overflow-y: auto;
}
.div-btn{
margin: 10px 0
}
.often-goods{
  width: 100%;
  float: left;
}
.title{
height: 20px;
border-bottom:1px solid #D3DCE6;
background-color: #F9FAFC;
padding:10px;
text-align: left;
}
.often-goods-list ul li{
list-style: none;
float:left;
border:1px solid #E5E9F2;
padding:10px;
margin:5px;
background-color:#fff;
}
.o-price{
color:#58B7FF;
}
.goods-type{
width: 100%;
float: left;
}
.cookList li{
list-style: none;
width:23%;
border:1px solid #E5E9F2;
height: auot;
overflow: hidden;
background-color:#fff;
padding: 2px;
float:left;
margin: 2px;

}
.cookList li span{
display: block;
float:left;
text-align: left;
}
.foodImg{
width: 40%;
height: 100%;
float: left;
}
.foodName{
font-size: 18px;
padding-left: 10px;
color:brown;
width: 50%;
}
.foodPrice{
font-size: 16px;
padding-left: 10px;
padding-top:10px;
width: 50%;
}
</style>
