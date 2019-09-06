<template>
  <div class="header">
    <span v-if="shows" class="tips" @click="$router.go(-1)">&lt;</span>
   <slot></slot>
  </div>
</template>

<script>
export default {
    props:['shows']
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  border-bottom: 1px solid #000;
  display: flex;
  .tips {
    width: 35px;
    height: 35px;
    left: -1px;
    top: 8px;
    font-size: 25px;
   
    margin-top: 8px;
    color: rgba(56, 56, 56, 1);
  }
  b {
    width: 86px;
    height: 22px;
    left: 143px;
    top: 15px;
    color: rgba(56, 56, 56, 1);
    font-size: 15px;
    line-height: 150%;
    text-align: center;
    margin: 15px 145px 14px 109px;
  }
  p{
      width: 86px;
	height: 22px;
	left: 143px;
	top: 15px;
	color: rgba(56, 56, 56, 1);
	font-size: 15px;
	line-height: 22px;
	text-align: center;
    margin: 15px 145px 14px 144px;
  }
}
</style>