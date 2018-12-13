<template>
    <div class="index">
    <!--导航栏-->
        <div class="top-nav">
            <div>全部分类</div>
            <div>首页</div>
            <div>企业简介</div>
            <div>新手上路</div>
            <div>U袋学堂</div>
            <div>企业账号</div>
            <div>诚信合约</div>	
        </div>
       <section class="swipe">
        <!--轮播图-->
            <el-carousel height="30rem">
                <el-carousel-item v-for="item in swiperImage" :key="item.id">
                    <img :src="item.img" />
                </el-carousel-item>
            </el-carousel> 
        <!--轮播图上层-->
            <div class="swipe-top">
            <!--全部分类-->
                <div class="list-box">
                    <div class="cat-box">
                        <div class="title">女装</div>
                        <ul>
                            <li>下装</li>
                            <li>上装</li>
                            <li>裙装</li>
                            <li>内衣</li>
                        </ul>
                    </div>
                    <div class="cat-box">
                        <div class="title">男装</div>
                        <ul>
                            <li>下装</li>
                            <li>上装</li>
                            <li>套装</li>
                        </ul>
                    </div>
                    <div class="cat-box">
                        <div class="title">包包</div>
                        <ul>
                            <li>女士包包</li>
                            <li>男式包包</li>
                        </ul>
                    </div>
                    <div class="cat-box">
                        <div class="title">童装</div>
                        <ul>
                            <li>女童</li>
                            <li>男童</li>
                            <li>男女童鞋></li>
                        </ul>
                    </div>
                    <div class="cat-box">
                        <div class="title">鞋靴</div>
                        <ul>
                            <li>男鞋</li>
                            <li>女鞋</li>
                            <li>儿童鞋</li>
                        </ul>
                    </div>		
                </div>
                <!--用户信息-->
                <div class="user-box">
                    <div class="login-box">
                        <div class="upic"><img src="../assets/udai.png" alt=""></div>
                    
                        <p v-if="uname!=undefined">Hi~<span>{{uname}}</span></p>
                        <p v-if="uname!=undefined">积分:30</p>
                        <div v-if="uname!=undefined" class="report-box">已签到1天</div>
                        
                        <section v-else>
                            <router-link to="/login" style="color:red">请先登录</router-link>
                        </section>
                    </div>
                    <div class="agent-box">
                        <div class="agent right-border">申请网店代销</div>
                        <div class="agent"><span>9527</span>位代销商</div>
                    </div>
                    <div class="verify-qq">
                        <p>真假客服验证-远离骗子</p>
                        <input type="text" placeholder="输入客服QQ号码"><span>验证</span>
                    </div>
                    <div class="tags">
                        <div class="tag tag-right">品牌正品</div>
                        <div class="tag">信誉认证</div>
                        <div class="tag tag-right tag-bottom">当天发货</div>
                        <div class="tag tag-bottom">人工质检</div> 
                    </div>
                </div>
            </div>    
       </section>
       <!--商品-->
       <section>
            <el-container class="container" v-for="(floor,i) in goods" :key="floor.id">
                <el-header :style="{background:background[i]}" ><p>{{floor.title}}</p></el-header>
                <el-container>
                    <el-aside><img :src="floor.floor"></el-aside>
                    <el-main>
                        <el-card @click="toDetails" class="box-card" v-for="img in floor.imgs" :key="img.id" >
                            <img :src="img.img" @click="toDetails(img.pid,img.img,img.price,img.title)"/>
                            <div>价格:<span style="color:red">￥{{img.price}}</span></div>
                            <div class="ell">{{img.title}}</div>
                        </el-card>
                    </el-main>
                </el-container>
            </el-container>  
       </section>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                swiperImage:[
                    {id:1,img:"http://localhost:3000/img/banner_1.jpg"},
                    {id:2,img:"http://localhost:3000/img/banner_2.jpg"},
                    {id:3,img:"http://localhost:3000/img/banner_3.jpg"},
                    {id:4,img:"http://localhost:3000/img/banner_4.jpg"},
                    {id:5,img:"http://localhost:3000/img/banner_5.jpg"},
                ],
                goods:[],
                background:[//标题背景颜色
                    "linear-gradient(to right,#6DD5ED,#29ABCC)",
                    "linear-gradient(to right,#FDD4B3,#DAB190)",
                ],
                uname:this.$route.query.uname
            }
        },
        methods:{
            getGoods(){
                this.axios.get("goods").then(res=>{
                    console.log(res.data)
                    this.goods=res.data
                })
            },
            toDetails(pid,img,price,title){
                this.$router.push("/details?pid="+pid+"&img="+img+"&price="+price+"&title="+title)
            }
        },
        created() {
            this.getGoods();
            this.uname=sessionStorage.getItem("uname")/**使用sessionStorage保存用户名刷新不会消失 */
        },
    }
</script>

<style scoped>
    .index img{
        width:100%;
        height:99%;
    }
/**黑色导航栏 */
    .index .top-nav{
		width:100%;
		height:3rem;
		background-color:black;
        margin-top:5px;
        display:flex;
        justify-content:flex-start;
        color:white;
	}
    .index .top-nav>div{
        height:100%;
        padding:0 2rem;
        line-height:3rem;
    }
    .index .top-nav>div:first-child{
        padding:0 5rem;
        background:red;
    }
    /**轮播图 */
   .index .swipe{
       width:100%;
       height:30rem;
       position:relative;
   }
   /**轮播图上层 */
   .index .swipe-top{
       width:100%;
       height:30rem;
       position:absolute;
       top:0;
       z-index:3;
       display:flex;
       justify-content:space-between;
   }
   .index .list-box{
       width:14rem;
       height:100%;
       display:flex;
       flex-direction:column;
       justify-content:space-between;
       color:white !important;
       background:rgba(225,225,225,0.1);
   }
   .index .cat-box{
       width:100%;
       height:19%;
       display:flex;
       flex-direction:column;
       justify-content:space-around;
       background-color:rgba(0,0,0,.7);
   }
   .index .title{
       text-align:left !important;
       padding-left:1rem;
   }
   .index .cat-box>ul{
       display:flex;
       justify-content:space-around;
   } 
   /*轮播图右边用户信息*/
    .index .user-box{
    width:14rem;
    height:100%;
    background:rgba(225,225,225,0.9);
    margin-right:2rem;
    }
    .index .user-box .login-box{/**登录 */
        width:100%;
        height:40%;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
    }
    .index .user-box .login-box p{
        margin:0;
    }
    .user-box>.login-box img{
		width:4rem;
		height:4rem;
		border-radius:50%;
		margin-top:20px;
	}
    .user-box>.login-box>.report-box{
        height:30px;
        line-height:30px;
        margin-top:5px;
        background-image:linear-gradient(to top,#73C7E0,lightblue);
	}
    .index .user-box .agent-box{/**代理 */
        width:100%;
        height:15%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        border-top:1px solid #ddd;
        border-bottom:1px solid #ddd;
    }
    .user-box>.agent-box>.agent{
		width:49%;
		height:3rem;
		text-align:center;
        float:left;
		margin:5px auto;
		text-align:center;
		line-height:3rem;
	}
    .user-box>.agent-box>.right-border{
		border-right:1px solid #ccc;
	}
	.user-box>.agent-box>.agent>span{
		color:red;
	}
    .verify-qq{/**qq验证 */
        width:100%;
        height:20%;
    }
    .user-box>.verify-qq>input{
		height:28px;
		width:129px;
		margin-left:25px;
		border-radius:6px 0 0 6px;
	}
	.user-box>.verify-qq>span{
		background-color:red;
		color:white;
		padding:5px;
		padding-top:4px;
		padding-bottom:7px;
		border:1px solid black;
		border-radius:0 6px 6px 0;
	}
    .tags{/**底层 */
        width:100%;
        height:25%;
    }
    .user-box>.tags>.tag{
		box-sizing:border-box;
		width:50%;
		height:40px;
		float:left;
		text-align:center;
		line-height:40px;
		border-top:1px solid rgba(0,0,0,.1);
	}
	.tag-right{
		border-right:1px solid rgba(0,0,0,.1);
	}
	.tag-bottom{
		border-bottom:1px solid rgba(0,0,0,.1);
	}
  /**1楼 */
  .index .container{
      width:100%;
      height:40rem;  
  }
  .index .el-header{
      border-bottom:1px solid #eee;
  }
   .index .el-header p{
      color:white;
      font-size:20px;
    
   }
   .index .el-main{
       display:flex;
       flex-wrap:wrap;/**超出换行 */
       justify-content:space-around;
       padding:0;
   }
   .index .el-card{
       width:24%;
       height:49%;
       display:flex;
       flex-direction:column;
       justify-content:space-between;
   }
   .index .el-card img{
       width:100%;
       height:50%;
   }
   .index .el-card div{
       width:100%;
       height:15%;
   }
</style>