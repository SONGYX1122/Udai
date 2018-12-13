<template>
    <div class="register">
        <!--头部-->
        <div class="head">
            <img src="../assets/logo.jpg" alt="">
        </div>
    <!--登录-->
        <div class="content">
            <div class="content-login">
                <p>欢迎注册U袋网平台</p>
                <hr>
                <el-form label-width="5rem" :model="formRegister">
                    <el-form-item label="用户名" >
                        <el-input v-model="formRegister.uname"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="formRegister.upwd" type="password"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码">
                        <el-input v-model="formRegister.checkupwd" type="password" @blur="checkpwd"></el-input>
                    </el-form-item>
                    <el-button type="danger" @click="toRegister">注册</el-button>
                    <p><router-link to="/login">返回登录</router-link></p>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data() {
           return{
               formRegister:{//用户注册 的信息
                   uname:"",
                   upwd:"",
                   checkupwd:""
               }
           } 
        },
        methods:{
            toRegister(){
                var unamereg=/^.{5,12}$/;
                var upwdreg=/^\w{5,12}$/;
                if(this.formRegister.uname==""){
                    this.$message({
                        message: '用户名不能为空',
                        type: 'warning'
                    });
                   return; 
                } 
                if(this.formRegister.upwd==""){
                    this.$message({
                        message: '密码不能为空',
                        type: 'warning'
                    });
                   return; 
                }
                if(this.formRegister.checkupwd==""){
                    this.$message({
                        message: '重复密码不能为空',
                        type: 'warning'
                    });
                   return; 
                }
                //正则判断
                if(!unamereg.test(this.formRegister.uname)){
                    this.$message('用户名只能是5~12个字符之间');
                    return;
                }
                if(!upwdreg.test(this.formRegister.upwd)){
                    this.$message('密码只能是5~12个字符之间');
                    return;
                }
                if(this.formRegister.checkupwd!=this.formRegister.upwd){
                    this.$message.error('两次密码不一致');
                    return;
                }
                this.axios.get("register?uname="+this.formRegister.uname+"&upwd="+this.formRegister.upwd).then(res=>{
                    if(res.data.code==1){
                        this.$message({
                            message: res.data.msg,
                            type: 'success'
                        });
                        this.$router.push("/login")
                    }else{
                        this.$message.error('注册失败');
                    }
                })
                //清空文字
                this.formRegister={};
            },
            checkpwd(){
                if(this.formRegister.checkupwd!=this.formRegister.upwd){
                    this.$message.error('两次密码不一致');
                }
            },
        }
    }
</script>
<style scoped>
    .register{ 
        width:100%;
    }
    .register .head{
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
    .register .content{
        box-sizing:border-box;
        width:100%;
        height:28rem;
        padding-right:4rem;
    }
    .register .content-login{
        float:right;
        width:20rem;
        height:23rem;
        box-shadow: 0px 4px 10px #f1d6d7;
    }
    .register .el-form{
        padding:1rem;
    }
    .register .el-form{
        padding:1rem;
    }
    .register .el-button{
        width:100%;
        height:100%;
    }

</style>