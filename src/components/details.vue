<template>
    <div class="details">
        <div class="left_img"><img :src="goods.img"/></div>
        <div class="right_img">
            <h2>{{goods.title}}</h2>
            <div class="price">
                <div class="title">价格</div>
                <div class="content">
                    <span>￥{{goods.price}}</span>
                </div>
            </div>
            <div class="color">
                <div class="title">颜色</div>
                <div class="content">
                    <span v-for="(item,i) in colorarr" v-text="item" :class="[coloract==i?'active':'']" @click="checkColor(i)"></span>
                </div>
            </div>
            <div class="size">
                <div class="title">大小</div>
                <div class="content">
                    <span v-for="(item,i) in sizearr" v-text="item" :class="[sizeact==i?'active':'']" @click="checkSize(i)"></span>
                </div>
            </div>
            <div class="count">
                <el-input-number v-model="count" @change="countChange" :min="1" :max="100" ></el-input-number>
                <el-button type="danger" round @click="addGoods">加入购物车</el-button>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                goods:{
                    pid:this.$route.query.pid,
                    img:this.$route.query.img,
                    title:this.$route.query.title,
                    price:this.$route.query.price,
                },
                colorarr:["黑亮色","宝石蓝","樱粉金","翡冷翠","极光色"],
                sizearr:["S","M","L","XL","XXL","3XXL"],
                count:1,
                coloract:0,
                sizeact:0
            }
        },
        methods:{
            countChange(){/**测试*/ 
                console.log(this.count)
            },
            checkColor(n){
                this.coloract=n
            },
            checkSize(n){
                this.sizeact=n;
            },
            addGoods(){/**添加到购物车 */
                console.log(this.goods.title,this.goods.img,this.goods.price,this.goods.pid,this.count,this.colorarr[this.coloract],this.sizearr[this.sizeact])
                var obj={
                    title:this.goods.title,
                    img:this.goods.img,
                    price:this.goods.price,
                    pid:this.goods.pid,
                    count:this.count,
                    color:this.colorarr[this.coloract],
                    size:this.sizearr[this.sizeact]
                }
                this.axios.post("addGoods",obj).then(res=>{
                    console.log(res.data)
                    this.$message({
                        message: '添加成功',
                        type: 'success'
                    });
                })
            }
        }
    }
</script>
<style scoped>
  .details img{
      width:100%;
      height:100%
  }
  .details{
      width:100%;
      height:30rem;
      display:flex;
      align-items:center;
      justify-content:space-around;
      border-top:1px solid black;
      margin-top:5px;
  }
  .left_img{
      width:25rem;
      height:90%;
  }
  .right_img{
      height:100%;
      width:50rem;
      display:flex;
      flex-direction:column;
  }
  .color,.size,.price{
      display:flex;
      justify-content:space-around;
      padding:1rem;
      border-top:1px solid #eee;
  }
  .price{
      background:#f3f3f3;
  }
  .price .content>span{
      color:red;
      border:0;
      font-size:26px;
  }
  .title{
      width:40%;
      font-family: simsun;
      color:#999;
      font-size:16px;   
  }
  .content{
      width:60%;
      display:flex;
      justify-content:space-around;
  }
  .content>span{
      padding:1rem;
      border:1px solid #b2b2b2;
      border-radius:1rem;
  }
  .count{
      padding:2rem 0;
      border-top:1px solid #eee;
  }
  .active{
      border: 1px solid red !important;
  }
  
</style>