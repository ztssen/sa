<template>
  <div class="vote">
    <Header :shows="true">
      <div class="top">
        <span>投票</span>
        <span @click="$router.push('/startvote')">发起投票</span>
      </div>
    </Header>

    <Item :list="list" :data="data" :changind="changindex" :ind="ind">
      <div class="con">
          <div>
        <dl v-for="(item,index) in nowlist" :key="index">
          <dt>
            <img :src="require('@/assets/图片 338.png')" alt />
          </dt>
          <dd class="con_cen">
            <p>沐恩666</p>
            <p>{{item.title}}</p>
          </dd>
          <dd class="con_rig">
            <p>截止到{{item.endTime}}</p>
            <p>{{item.isSingle?'多选':'单选'}}</p>
          </dd>
        </dl>
        </div>
      </div>
    </Item>
  </div>
</template>

<script>
import axios from "@/until/http";
import Item from "@/components/item";
import Bscroll from "better-scroll";
export default {
  components: {
    Item
  },
  created() {
    axios.get("/api/vote/allVote").then(res => {
      this.list = res;
      this.nowlist = res;
    });
    this.$nextTick(()=>{
        new Bscroll('.con')
    })
  },
  data() {
    return {
      list: [],
      data: ["全部", "已结束", "正在进行"],
      ind: 0,
      nowlist: []
    };
  },
  methods: {
    changindex(index) {
      this.ind = index;
      var times = new Date().getTime();
      console.log(times);
     this.nowlist=this.ind == 0?this.list: this.list.filter((item, index) => {
            return this.ind==1? new Date(item.endTime).getTime() < times:new Date(item.endTime).getTime() < times;
          })
    }
  }
};
</script>

<style lang="scss" scoped>
.vote {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.top {
  flex: 1;
  display: flex;
  span:first-child {
    width: 86px;
    height: 22px;
    left: 144px;
    top: 15px;
    color: rgb(31, 5, 5);
    font-size: 15px;
    line-height: 150%;
    text-align: center;
    margin: 15px 76px 14px 109px;
  }
  span:last-child {
    width: 56px;
    height: 21px;
    left: 306px;
    top: 16px;
    margin-top: 16px;
    // position: fixed;
    color: rgba(42, 130, 228, 1);
    font-size: 14px;
    line-height: 150%;
    text-align: left;
  }
}

.con {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-top: 6px;
  dl {
    width: 348px;
    height: 71px;
    margin: 11px auto 0 auto;
    display: flex;
    color: rgba(80, 80, 80, 1);
    background-color: rgba(255, 255, 255, 1);
    border-radius: 4px;
    font-size: 14px;
    line-height: 150%;
    box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.5);
    text-align: center;

    dt {
      width: 44px;
      height: 44px;
      border-radius: 22px;
      margin: 9px 8px 0 8px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    dd {
      margin-top: 9px;
      p {
        height: 21px;
        color: rgba(80, 80, 80, 1);
        font-size: 12px;
        line-height: 150%;
        text-align: left;
      }
    }
    .con_cen {
      display: flex;
      flex-direction: column;
      align-self: flex-start;
      p:last-child {
        margin-top: 7px;
      }
    }
    .con_rig {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding-right: 27px;
      p:last-child {
        margin-top: 10px;
      }
    }
  }
}
</style>