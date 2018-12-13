<template>
    <div class="shoppingCart"> 
        <!--标题-->
        <div class="title">
            <div class="title_left">
                <div><input type="checkbox" id="qx" v-model="checkall" @click="quanxuan"/><label for="qx">全选</label></div>
                <div>商品</div>
            </div>
            <div class="title_right">
                <div>单价</div>
                <div>数量</div>
                <div>小计</div>
                <div>操作</div>
            </div>
        </div>
        <!--商品-->
        <div class="goods" v-for="item in shoppingCart">
            <div class="goods_left">
                <input type="checkbox" v-model="checkbox" :value="item" />
                <img :src="item.img"/>
                <div>{{item.title}}</div>
                <div>
                    <p>颜色: {{item.color}}</p>
                    <p>尺码: {{item.size}}</p>
                </div>
            </div>
            <div class="goods_right">
                <div>￥{{item.price}}</div>
                <el-input-number  v-model="item.count" size="mini" :min="1" :max="9" ></el-input-number>
                <div>￥{{item.price*item.count | fit-price}}</div>
                <div @click="remove(item)">删除</div>
            </div>  
        </div>
        <!--结算-->
        <div class="pay">
            <div class="total">总价:<span>￥{{total | fit-price}}</span></div>
            <div class="jiesuan">结算</div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                shoppingCart:[],
                checkbox:[],
                checkall:false
            }
        },
        methods:{
            getShoppingCart(){
                this.axios.get("getShoppingCart").then(res=>{
                    this.shoppingCart=res.data;
                    /**初始化价格和全选 */
                    this.checkbox=this.shoppingCart;
                    this.checkall=true
                })
            },
            quanxuan(){/**点击全选 */
                this.checkbox=this.checkall?[]:this.shoppingCart/**false为选中,true为不选中 */
            },
            remove(item){/**删除 */
                this.shoppingCart.splice(item,1)
            }
        },
        created() {
            this.getShoppingCart();
        },
        computed:{
            total:{
                get:function(){
                    var sum=0;
                    for(var i=0;i<this.checkbox.length;i++){
                        sum+=this.checkbox[i].price*this.checkbox[i].count;
                    }
                    return sum;
                }
            }
        },
        watch:{
            checkbox(){
                this.checkall=this.checkbox.length==this.shoppingCart.length?true:false
            }
        }
    }
</script>

<style scoped>
    img{
        width:100%;
        height:100%;
    }
    .shoppingCart{
        width:60rem;
        margin:auto;
        margin-top:5px;
        color: #666;
        font-size:12px;
    }
    .title{
        width:100%;
        height:3rem;
        background: #f3f3f3;
        border: 1px solid #e9e9e9;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    .title_left,.title_right{
        width:20%;
        display:flex;
        justify-content:space-around;
    }
    .title_right{
        width:40%;
    }
    .title_left>div>input{
        vertical-align:middle;/**垂直对齐方式 */
    }
    /**商品 */
    .goods+.goods{
        border-top:1px solid #ddd;
    }
    .goods{
        width:100%;
        display:flex;
        justify-content:space-between;
        background:#fff4e8;
        padding:1rem 0;
    }
    .goods_left,.goods_right{
        width:40%;
        display:flex;
        justify-content:space-around;
    }
    .goods_right{
        width:40%;
    }
    .goods_left img{
        width:4rem;
        height:4rem;
    }
    .goods_left p:first-child{
        margin-top:0;
    }
    .goods_right .el-input-number{
        width:5rem;
    }
    /**底部结算 */
    .pay{
        width:100%;
        height:3rem;
        background: #f3f3f3;
        border: 1px solid #e9e9e9;
        display:flex;
        justify-content:flex-end;
        align-items:center;
    }
    .total{
        margin-right:1rem;
    }
    .total>span{
        width:3rem;
        height:60%;
        font-size:16px;
        margin-left:.5rem;
        color:#E2231A;
    }
    .jiesuan{
        width:5rem;
        height:100%;
        font-size:20px;
        line-height:3rem;
        background:#e54346;;
        color:white;
    }
</style>