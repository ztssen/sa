<template>
  <div class="item">
    <div class="tab">
      <span
        v-for="(item,index) in data"
        :key="index"
        @click="changind(index)"
        :class="{'active':index==ind}"
      >{{item}}</span>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["list", "data",'changind','ind'],
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.item {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  .tab {
  width: 280px;
  height: 30px;
  left: 47px;
  top: 61px;
  display: flex;
  overflow: hidden;
  margin: 9px auto 0 auto;
  border: solid 1px rgba(255, 87, 51, 1);
  border-radius: 5px;
  .active {
    color: #fff;
    background: rgba(255, 87, 51, 1);
  }
  span {
    flex: 1;
    text-align: center;
    line-height: 30px;
    border-right: solid 1px rgba(255, 87, 51, 1);
    color: rgba(255, 87, 51, 1);
  }
  span:last-child {
    border: none;
  }
}
}
</style>