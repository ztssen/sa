<template>
  <div class="con">
    <Header :shows=true>
        <b>注册</b>
    </Header>
    <div class="top">
      <img :src="require('@/assets/图片 338.png')" alt />
      <p>沐恩之家欢迎你</p>
    </div>
    <input type="text" placeholder="请输入用户名" v-model="username" />
   
    <input type="text" placeholder="请输入姓名" v-model="name" />
    
    <input type="text" placeholder="请输入密码" v-model="pwd" />
   
    <input type="text" placeholder="请确认密码" v-model="password" />
    
    <p @click="register" class="zc">注册</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      username: "",
      name: "",
      pwd: "",
      password: ""
    };
  },
  methods: {
    register() {
      if (this.pwd == this.password) {
        axios
          .post("/api/register", {
            userName: this.username,
            password: this.password,
            realName: this.name
          })
          .then(res => {
            console.log(res);
            if (res.code == 1) {
              this.$router.push("/login");
            }
          });
      } else {
        alert("密码不一致");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.con{
    width: 100%;

.top {
  width: 100%;
  display: flex;
  margin-bottom: 47px;
  img{
      width: 44px;
	height: 44px;
	left: 65px;
	top: 101px;
	border-radius: 4px;
    margin: 49px 15px 0 65px;
    
}
  p {
    width: 155px;
    height: 30px;
    left: 124px;
    top: 108px;
    color: rgba(80, 80, 80, 1);
    font-size: 20px;
    line-height: 150%;
    text-align: left;
    margin-top: 56px;
  }
}
input{
    width: 245px;
	height: 36px;
	left: 64px;
	top: 185px;
	text-indent: 5px;
	color: rgba(166, 166, 166, 1);
	border: rgba(42, 130, 228, 1) solid 1px;
	border-radius: 2px;
	font-size: 12px;
	line-height: 150%;
	text-align: left;
    margin: 10px 0 0 64px;
}
.zc{
    	width: 245px;
	height: 35px;
	left: 65px;
	top: 380px;
	color: rgba(80, 80, 80, 1);
	background-color: rgba(255, 255, 255, 1);
	border: rgba(128, 128, 128, 1) solid 1px;
	border-radius: 5px;
	font-size: 14px;
	line-height: 35px;
	text-align: center;
    margin: 16px 0 0 65px;
}
}
</style>