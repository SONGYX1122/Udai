<template>
    <div class="login">
        <!--头部-->
        <div class="head">
            <img src="../assets/logo.jpg" alt="">
        </div>
    <!--登录-->
        <div class="content">
            <div class="content-login">
                <p>欢迎登录U袋网平台</p>
                <hr>
                <el-form label-width="4rem" :model="formLoign">
                    <el-form-item label="用户名" >
                        <el-input v-model="formLoign.uname"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" >
                        <el-input v-model="formLoign.upwd" type="password" @keyup.native.13="toLogin"></el-input>
                    </el-form-item>
                    <el-button type="danger" @click="toLogin">登录</el-button>
                    <p>没有账号?&nbsp;<router-link to="/register">免费注册</router-link></p>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                formLoign: {
                    uname: '',
                    upwd: '',
                }
            }
        },
        methods:{
            toLogin(){
                if(this.formLoign.uname.trim()==""||this.formLoign.upwd.trim()==""){
                    this.$message({
                        message: '请正确的输入用户名和密码',
                        type: 'warning'
                    });
                    return;
                }
                this.axios.get("login?uname="+this.formLoign.uname+"&upwd="+this.formLoign.upwd).then(res=>{
                    this.$message(res.data);
                    if(res.data=="登录成功"){
                        this.$router.push("/index?uname="+this.formLoign.uname)
                        sessionStorage.setItem("uname",this.formLoign.uname)/**使用web Storage保存名字 */
                    }
                })
            }
        }
    }
</script>
<style scoped>
    .login{ 
        width:100%;
    }
    .login .head{
        box-sizing:border-box;
        height:8rem;
        width:100%;
        text-align:left;
        padding:1rem;
        background:white;
        position:absolute;
        top:0;
    }
    /**登录框 */
    .login .content{
        box-sizing:border-box;
        width:100%;
        height:25rem;
        padding-right:4rem;
    }
    .login .content-login{
        float:right;
        width:20rem;
        height:21rem;
        box-shadow: 0px 4px 10px #f1d6d7;
    }
    .login .el-form{
        padding:1rem;
    }
    .login .el-form a{
        color:red !important;
    }
    .login .el-button{
        width:100%;
        height:100%;
    }
</style>