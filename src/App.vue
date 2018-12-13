<template>
  <div id="app">
    <header class="header">
      <!-- 顶部tab -->
      <div class="tab-header">
        <div class="tab-header-left ell">
        <div>嗨,欢迎来到<span style="color:red">U袋网</span></div>
        <a href="#">网店代购</a>
        <a href="#">帮助中心</a>
        </div>
        <div class="table-header-right ell">
          <router-link to="/login">登录</router-link>
          <router-link to="/register">注册</router-link>
          <a href="#">我的U袋</a>
          <a href="#">我的订单</a>
          <a href="#">积分平台</a>
        </div>
      </div>
      <!--   搜索栏 -->
      <div class="top-search">
        <router-link to="index"><img src="./assets/logo.jpg" alt="logo" ></router-link>
        <el-input placeholder="连衣裙"  class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <div class="cart-box">
        <el-badge value="" class="item ell">
          <router-link to="/shoppingCart">购物车<span class="el-icon-goods"></span></router-link>
        </el-badge>
          
        </div>
      </div>
    </header>
    <router-view/>
    <!--底部-->
    <footer class="footer">
      <!-- 底部 -->
      <ul>
        <li><a href="#">网店代购</a></li>
        <li><a href="#">U袋学堂</a></li>
        <li><a href="#">联系我们</a></li>
        <li><a href="#">企业简介</a></li>
        <li><a href="#">新手上路</a></li>
      </ul>
      <div class="copyright">
        <p>&copy; 2005-2018 U袋网 版权所有，并保留所有权利</p>
        <p>ICP备案证书号：闽ICP备16015525号-2    福建省宁德市福鼎市南下村小区（锦昌阁）1栋1梯602室    Tel: 18650406668    E-mail: 18650406668@qq.com</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #666;;
  white-space:nowrap;
}
#app a{
  color:black;
  text-decoration:none;
}
#app ul{
  list-style:none;
}
#app .ell{
  overflow:hidden;
  white-space:nowrap;
  text-overflow: ellipsis;
}
/**头部 */
#app .header{
  width:100%;
  height:8rem;
  top:0;
}
#app .tab-header{
  height:30%;
  width:100%;
  display:flex;
  justify-content:space-between;
}
#app .tab-header-left,#app .table-header-right{
  width:40%;
  display:flex;
  justify-content:space-around;
  padding:.5rem 0;
}
#app .top-search{
  width:100%;
  height:70%;
  display:flex;
  justify-content:space-between;
  align-items:center;
}
#app .input-with-select{
  padding:0 10rem;
}
/**购物车 */
#app .cart-box{
  width:8rem;
  height:2rem;
  line-height:2rem;
  border:1px solid #ccc;
	box-shadow:1px 1px 2px black;
  margin-right:3rem;
  padding:.3rem;
}
#app .cart-box span{
  color:red;
}
/**底部 */
#app .footer{
  bottom:0;
  width:100%;
  height:10rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  border-top:1px solid #ccc;
}
#app .footer>ul{
  display:flex;
  justify-content:space-around;
}

</style>
