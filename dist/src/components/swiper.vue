<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="(item,index) in list" :key="index">
      <img :src="item.img" alt />
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  props: ["list"],
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: true
      }
    };
  }
};
</script>

<style lang="scss" scoped>
img{
    width: 100%;
    height: 142px;
}
</style>