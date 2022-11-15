<template>
  <div>
    <section class="recentCase">
      <div class="recent-con">
        <div class="recent-title">
          <b>国外各国家疫情统计汇总 </b>
          <span class="caseShare">分享</span>
        </div>
        <div class="recent-subTitle">
          7:00-10:00为更新高峰，数据若滞后敬请谅解
        </div>
        <!-- 弹层 -->
        <van-popup class="DataTip_item" v-model="show">
          <div>
            <img
              class="close-img"
              @click="closePopup"
              src="@/assets/images/share-close.08f0789.png"
              alt=""
            />
            <div class="Data_shuoming">数据说明</div>
            <div class="DataTip_list">
              <p class="popup-title">
                【现有确诊数据说明】<br />
                1、各省、市的现有确诊=累计确诊-累计治愈-累计死亡；<br />
                2、部分省份的治愈和死亡人数分布状况公布不充分，其下辖市/区的已知治愈与死亡人数小于实际人数，导致出现：<br />
                a)市/区的现有确诊总和大于全省/直辖市的现有确诊总数； <br />
                b)待确认的现有确诊为负数，因此展示为0
              </p>
            </div>
          </div>
        </van-popup>

        <div class="main">
          <div class="main-title">
            <div class="titleCon">省市区</div>
            <div class="titleCon" @click="diagnoseSort">
              <i>新增</i>
            </div>
            <div class="titleCon" @click="wzzSort">
              <i>累计确诊</i>
            </div>
            <div class="titleCon" @click="deathSort">
              <i>死亡</i>
            </div>
            <div class="titleCon" @click="cureSort">
              <i>治愈</i>
            </div>
            <div class="titleCon" @click="cureSort">
              <i>详情</i>
            </div>
          </div>
        </div>

        <div class="main-list">
          <div
            class="main-list-item"
            v-for="(item, i) in recentProvinceList.slice(0, showTotal)"
            :key="i"
          >
            <div class="titleCon" @click="showCity(item)">
              {{ item.name }}
            </div>
            <div class="titleCon" @click="diagnoseSort">
              <i>{{ item.conadd }}</i>
            </div>
            <div class="titleCon" @click="wzzSort">
              <i>{{ item.conNum }}</i>
            </div>
            <div class="titleCon" @click="deathSort">
              <i>{{ item.deathNum }}</i>
            </div>
            <div class="titleCon" @click="cureSort">
              <i>{{ item.cureNum }}</i>
            </div>
            <a
              class="titleCon"
              :href="`https://news.sina.cn/project/fy2020/yq_province.shtml?province=${item.ename}`"
            >
              <i
                >详情
                <img src="../assets/images/ic_arrow_right_blue.png" alt="" />
              </i>
            </a>
          </div>
        </div>

        <div class="showAllList" v-show="showAllListBtn" @click="showList">
          <span>展开更多</span>
          <img src="../assets/images/ic_arrow_more_1.png" alt="" />
        </div>

        <!-- <div class="showAllList" v-show="foldAllListBtn" @click="foldList">
          <span>折叠</span>
          <img src="../assets/images/ic_arrow_more_1.png" alt="" />
        </div> -->
      </div>
    </section>
  </div>
</template>

<script>
import { getFyData } from '../utils/getFyList.js'

export default {
  name: 'province31List',
  data() {
    return {
      recentProvinceList: [],
      showTotal: 10,
      // 展开更多按钮
      showAllListBtn: true,
      // 遮罩层
      show: false
    }
  },
  created() {
    this.getCovidList()
  },
  mounted() {},
  methods: {
    // 获取31省市最新疫情数据
    async getCovidList() {
      const { data: res } = await getFyData()
      const covidDataJson = JSON.parse(res.slice(13, -2))

      this.recentProvinceList = covidDataJson.data.otherlist

      console.log(this.recentProvinceList)
    },
    // 点击查看更多疫情数据
    showList() {
      this.showTotal = 50
      this.showAllListBtn = false
      this.foldAllListBtn = true
    },
    foldList() {
      this.showTotal = 10
      this.showAllListBtn = true
      this.foldAllListBtn = false
    },
    showPopup() {
      this.show = true
    },
    closePopup() {
      this.show = false
    },
    showCity() {},
    diagnoseSort() {},
    wzzSort() {},
    deathSort() {},
    cureSort() {}
  }
}
</script>

<style lang="less" scoped>
// 近期31省区市本土病例
.recentCase {
  margin: 0 10px;
  .recent-con {
    position: relative;
    margin-top: 12px;
    height: auto;
    background-color: #fff;
    border-radius: 15px;
    .recent-title {
      padding: 8px 2px;
      position: relative;
      display: flex;
      align-items: center;
      height: 0.35rem;
      color: #4d79f3;
      font-size: 15px;
      margin-right: 0.1rem;
      font-weight: 700;
      b {
        margin-left: 15px;
        display: flex;
        align-items: center;
        img {
          width: 15px;
          height: 15px;
          margin-left: 5px;
        }
      }
      .caseShare {
        position: relative;
        font-weight: normal;
        font-size: 12px;
        border: 1px solid #666;
        border-radius: 15px;
        line-height: 16.48px;
        padding: 2px 9px 2px 25px;
        color: #000;
        margin-left: 95px;
        margin-top: 2px;

        &::before {
          content: '';
          position: absolute;
          left: 8px;
          top: 2px;
          width: 15px;
          height: 15px;
          background: url('../assets/images/share-btn-icon.svg') center/contain
            no-repeat;
          margin-right: 5px;
        }
      }
      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 5px;
        left: 5px;
        width: 5px;
        height: 20px;
        border-radius: 5px;
        background-color: #4d79f3;
      }
    }
    .recent-subTitle {
      margin-left: 5px;
      font-size: 11px;
      color: #888;
    }
    .main {
      margin-top: 15px;
      .main-title {
        display: flex;
        justify-content: space-between;
        font-size: 10px;
        align-items: center;
        .titleCon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20%;
          height: 20px;
          padding: 5px 0;
          margin-left: 2px;
          i {
            font-style: normal;
          }
          &:nth-child(1) {
            width: 25%;
            background-color: #eaeaea;
            margin-left: 0;
          }
          &:nth-child(2) {
            width: 22%;
            background-color: #ffe2dc;
          }
          &:nth-child(3) {
            width: 22%;
            background-color: #ffc9c9;
          }
          &:nth-child(4) {
            width: 22%;
            background-color: #b4c0d5;
          }
          &:nth-child(5) {
            width: 22%;
            background-color: #c0ece0;
          }
          &:nth-child(6) {
            width: 15%;
            background-color: #e3e7f3;
          }
          .arrow {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: -8px;
            span {
              width: 5px;
              height: 7px;
              opacity: 0.2;
            }
            .arrowActive {
              color: #f46767;
              opacity: 1;
            }
          }
        }
      }
    }
    .showAllList {
      display: flex;
      overflow: hidden;
      justify-content: center;
      align-items: center;
      margin: 10px 0;
      padding-bottom: 10px;
      span {
        font-size: 14px;
      }
      img {
        width: 15px;
        height: 15px;
      }
    }
  }
}

.main-list {
  font-size: 11px;
  .main-list-item {
    display: flex;
    padding: 10px 0;
    &:nth-child(even) {
      background-color: #f3f3f3;
    }
    a {
      color: #000;
    }
    .titleCon {
      width: 20%;
      display: flex;
      align-content: center;
      justify-content: center;
      &:nth-child(1) {
        width: 25%;
      }
      &:nth-child(2) {
        width: 22%;
      }
      &:nth-child(3) {
        width: 22%;
      }
      &:nth-child(4) {
        width: 22%;
      }
      &:nth-child(5) {
        width: 22%;
      }
      &:nth-child(6) {
        width: 15%;
        margin-right: -2px;
        img {
          width: 11px;
          height: 11px;
          margin-left: -3px;
          vertical-align: middle;
        }
      }
    }
    i {
      font-style: normal;
    }
  }
}

// 弹层
// 数据详情提示框
.DataTip_item {
  position: fixed;
  z-index: 999;
  width: 80%;
  max-height: 100%;
  border-radius: 15px;
  overflow: hidden;
  .close-img {
    position: absolute;
    top: 8px;
    right: 10px;
    width: 25px;
    height: 25px;
  }
  .Data_shuoming {
    width: 100%;
    background-color: #679bfc;
    padding: 15px 0;
    text-align: center;
    font-weight: 700;
    font-size: 25px;
    color: #fff;
  }
  .DataTip_list {
    margin: 10px;
    .popup-title {
      font-size: 13px;
    }
  }
}
</style>
