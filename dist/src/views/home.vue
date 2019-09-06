<template>
  <div>
    <Header :shows="false">
      <p>沐恩muen</p>
    </Header>
    <div class="swiper">
      <Swiper :list="list"></Swiper>
    </div>
    <button @click="$router.push('/vote')">获取</button>
  </div>
</template>

<script>
import Swiper from "@/components/swiper.vue";
import axios from "../until/http";
export default {
  data() {
    return {
      list: [
        {
          img:
            "http://img1.imgtn.bdimg.com/it/u=3713895876,1871091011&fm=26&gp=0.jpg"
        },
        {
          img:
            "http://img5.imgtn.bdimg.com/it/u=2337247360,2219385767&fm=26&gp=0.jpg"
        },
        {
          img:
            "http://img2.imgtn.bdimg.com/it/u=1827581025,231700547&fm=26&gp=0.jpg"
        },
        {
          img:
            "http://img5.imgtn.bdimg.com/it/u=1984069010,3695002417&fm=26&gp=0.jpg"
        },
        {
          img:
            "http://img3.imgtn.bdimg.com/it/u=1447261405,1439504438&fm=26&gp=0.jpg"
        }
      ]
    };
  },
  components: {
    Swiper
  },
  methods: {
   
  }
};
</script>

<style lang="scss" scoped>
</style>