<template>
  <div class="login">
    <p class="title">欢迎来到沐恩之家</p>
    <input type="text" placeholder="请输入用户名" v-model="username" class="user" />

    <input type="text" placeholder="请输入密码" v-model="pasword" class="pwd" />
    <div>
      <p @click="jump" class="zc">立即注册</p>
      <p>忘记密码</p>
    </div>
    <p @click="changelogin" class="login_dl">登录</p>
  </div>
</template>

<script>
import axios from "../../until/http";
export default {
  data() {
    return {
      username: "",
      pasword: ""
    };
  },
  methods: {
    changelogin() {
      axios
        .post("/api/login", {
          userName: this.username,
          password: this.pasword
        })
        .then(res => {
          if (res.code == "1") {
            localStorage.setItem("token", res.token);
             localStorage.setItem("userId", res.userId);
            let redirect = this.$route.query.redirect;
            this.$router.push(redirect);
          }
          console.log(res);
        });
    },
    jump() {
      this.$router.push("/zc");
    }
  }
};
</script>

<style lang="scss">
.login {
  width: 100%;
  text-align: center;
  .title {
    width: 160px;
    margin: 122px auto 0px auto;
    top: 122px;
    color: rgba(80, 80, 80, 1);
    font-size: 20px;
    line-height: 150%;
    text-align: left;
  }
  input {
    width: 245px;
    height: 36px;

    text-indent: 5px;
    color: rgba(166, 166, 166, 1);
    	border: rgba(42, 130, 228, 1) solid 1px;
    border-radius: 2px;
    font-size: 12px;
    line-height: 150%;
    text-align: left;
  }
  .user {
    margin-top: 35px;
  }
  .pwd {
    margin-top: 17px;
  }
  div {
    width: 100%;
    display: flex;
    .zc {
      width: 48px;
      height: 18px;
      left: 65px;
      top: 284px;
      color: rgba(255, 141, 26, 1);
      font-size: 12px;
      line-height: 150%;
      text-align: left;
      margin-left: 65px;
      margin-top: 8px;
    }
    p:nth-child(2) {
      width: 48px;
      height: 18px;
      left: 262px;
      top: 284px;
      color: rgba(153, 153, 153, 1);
      font-size: 12px;
      line-height: 150%;
      text-align: left;
      margin: 8px 0 0 149px;
    }
  }
  .login_dl{
    width: 245px;
	height: 35px;
 
	color: rgba(80, 80, 80, 1);
	background-color: rgba(255, 255, 255, 1);
	border: rgba(128, 128, 128, 1) solid 1px;
	border-radius: 5px;
	font-size: 14px;
	line-height: 35px;
	text-align: center;
  margin: 85px 0 0 65px;

  }
}
</style>