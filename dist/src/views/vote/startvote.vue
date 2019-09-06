<template>
  <div>
    <Header :shows="true">
      <p>发起投票</p>
    </Header>
    <div class="con">
      <div class="con_top">
        <span>标题</span>
        <input type="text" placeholder="输入标题" v-model="title" />
      </div>
      <div class="con_cen">
        <span>描述</span>
        <textarea name id cols="30" rows="10" placeholder="输入内容(选填)" v-model="info"></textarea>
      </div>
      <div class="cen">
        <div v-for="(item,index) in text" :key="index">
          <span>选项{{index+1}}</span>
          <p>{{item.title}}</p>
          <i @click="sub(index)">
            <img :src="require('@/assets/图标 259 (1).svg')" alt />
          </i>
        </div>
      </div>
      <div class="tips">
        <input type="text" placeholder="请输入选项内容最长输入20个字" v-model="ipt" />
        <i @click="add">
          <img :src="require('@/assets/图标 263.svg')" alt />
        </i>
      </div>
    </div>

    <div class="select">
      <el-select v-model="isSingle" placeholder="请选择" class="sel_top">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-select v-model="anonymity" placeholder="请选择" class="sel_top">
        <el-option
          v-for="item in anonymitys"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>

    <div class="times">
      <p class="tim_top">
        <span>截止日期</span>
        <el-date-picker v-model="endTime" type="date" placeholder="选择日期"></el-date-picker>
      </p>
      <p class="tim_cen">
        <el-time-select
          v-model="times"
          :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
    
    }"
          placeholder="选择时间"
        ></el-time-select>
      </p>
    </div>
    <p class="publish" @click="pub">发布</p>
  </div>
</template>
   

<script>
import axios from "@/until/http";
export default {
  data() {
    return {
      options: [
        {
          value: "0",
          label: "单选"
        },
        {
          value: "1",
          label: "多选"
        }
      ],
      anonymitys: [
        {
          value: "0",
          label: "匿名"
        },
        {
          value: "1",
          label: "不匿名"
        }
      ],
      text: [
        {
          title: "易烊千玺啊啊"
        }
      ],

      isSingle: "",
      value: "",
      anonymity: "",
      endTime: "",
      times: "",
      title: "",
      info: "",
      ipt: ""
    };
  },
  methods: {
    add() {
      this.text.length < 3 && this.text.push({ title: this.ipt });
      this.ipt = "";
    },
    sub(index) {
      this.text.splice(index, 1);
    },
    pub() {
      axios
        .post("/api/vote/newvote", {
          isSingle: this.isSingle*1,
          title: this.title,
          info: this.info,
          anonymity: this.anonymity*1,
          endTime: this.endTime,
          startTime:new Date(),
          userId:localStorage.getItem('userId')*1,
          chooseList:this.text
        })
        .then(res => {
          if(res.code==1){
            this.$router.push("/vote")
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.con {
  width: 100%;
  padding-left: 14px;
  .con_top {
    width: 100%;
    display: flex;
    span {
      width: 28px;
      height: 21px;
      left: 14px;
      top: 69px;
      color: rgba(80, 80, 80, 1);
      font-size: 14px;
      line-height: 150%;
      text-align: left;
      margin: 13px 24px 0 0;
    }
    input {
      width: 160px;
      height: 30px;
      left: 66px;
      top: 64px;
      text-indent: 5px;
      color: rgba(166, 166, 166, 1);
      border-radius: 2px;
      font-size: 12px;
      line-height: 150%;
      border: rgba(153, 153, 153, 1) solid 1px;
      text-align: left;
      margin-top: 8px;
    }
  }
  .con_cen {
    width: 100%;
    display: flex;
    span {
      width: 28px;
      height: 21px;
      left: 14px;
      top: 110px;
      color: rgba(80, 80, 80, 1);
      font-size: 14px;
      line-height: 150%;
      text-align: left;
      margin: 20px 24px 0 0;
    }
    textarea {
      width: 250px;
      height: 60px;
      left: 66px;
      top: 105px;
      text-indent: 5px;
      color: rgba(166, 166, 166, 1);
      border-radius: 2px;
      font-size: 12px;
      line-height: 150%;
      border: rgba(153, 153, 153, 1) solid 1px;
      text-align: left;
      margin-top: 11px;
    }
  }
  .cen {
    width: 100%;
    div {
      display: flex;
      span {
        height: 21px;
        left: 14px;
        top: 179px;
        color: rgba(80, 80, 80, 1);
        font-size: 14px;
        line-height: 150%;
        text-align: left;
        margin: 14px 12px 0 0;
      }
      p {
        width: 213px;
        height: 48px;
        line-height: 48px;
        left: 66px;
        top: 165px;
        color: rgba(80, 80, 80, 1);
        background-color: rgba(153, 153, 153, 0);
        font-size: 14px;
      }
      i {
        width: 28px;
        height: 28px;
        left: 328px;
        display: flex;
        align-items: center;
        align-self: auto;
        top: 175px;
        font-size: 28px;
        color: rgba(212, 48, 48, 1);
        margin: 10px 0 10px 49px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .tips {
    width: 100%;
    display: flex;
    input {
      width: 270px;
      height: 35px;
      left: 24px;
      top: 271px;
      text-indent: 6px;
      color: rgba(80, 80, 80, 1);
      background-color: rgba(255, 255, 255, 1);
      border: rgba(204, 204, 204, 1) solid 1px;
      font-size: 14px;
      line-height: 150%;
      text-align: left;
      margin: 10px 36px 0 10px;
    }
    i {
      width: 28px;
      height: 28px;
      left: 328px;
      top: 274px;
      font-size: 28px;
      color: rgba(0, 186, 173, 1);
      margin-top: 10px;
      img {
        width: 100%;
      }
    }
  }
}
.select {
  width: 100%;
  padding-left: 14px;
  margin-top: 13px;
  display: flex;
  flex-direction: column;
  .sel_top {
    margin-top: 10px;
    width: 165px;
    height: 32px;
  }
}
.times {
  width: 100%;
  .tim_top {
    display: flex;
    margin-top: 16px;
    padding-left: 24px;
    span {
      width: 56px;
      margin-right: 17px;
      height: 21px;
      color: rgba(80, 80, 80, 1);
      font-size: 14px;
      line-height: 150%;
      text-align: left;
      display: flex;
      align-self: center;
    }
    .el-date-picker,
    .el-time-select {
      width: 160px;
      height: 32px;
    }
  }
  .tim_cen {
    width: 100%;
    display: flex;
    padding: 14px 0 0 97px;
    .el-time-select {
    }
  }
}
.publish {
  width: 281px;
  height: 35px;
  left: 47px;
  top: auto;
  bottom: 7px;
  position: fixed;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(42, 130, 228, 1);
  border-radius: 4px;
  font-size: 14px;
  line-height: 35px;
  text-align: center;
}
</style>