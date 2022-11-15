<template>
  <div v-if="fyList">
    <section class="yq-text">
      <div class="yq-con">
        <div class="yq-title">
          <b>国外疫情</b>
          <span>{{ fyList.data.times }}数据统计</span>
          <div class="popupBtn" href="" @click="dataState">
            <img src="../assets/images/yq-title-right.png" alt="" />
          </div>
        </div>
        <div class="yq-list">
          <div class="yq-item">
            <h5>新增确诊</h5>
            <span>
              <b style="color: #c96161">{{ certain_inc }}</b>
            </span>
          </div>
          <div class="yq-item">
            <h5>新增死亡</h5>
            <span>
              <b style="color: #4d5054">{{ die }}</b>
            </span>
          </div>
          <div class="yq-item">
            <h5>现存确诊</h5>
            <span>
              <b style="color: #ff3535">{{ nowQz }}</b>
            </span>
          </div>
          <div class="yq-item">
            <h5>累计确诊</h5>
            <span>
              <b style="color: #b10000">{{ fyList.data.othertotal.certain }}</b>
            </span>
            <span class="contrast"
              >较昨日<code>{{ fyList.data.othertotal.certain_inc }}</code>
            </span>
          </div>
          <div class="yq-item">
            <h5>累计治愈</h5>
            <span>
              <b style="color: #13b593">{{ fyList.data.othertotal.recure }}</b>
            </span>
            <span class="contrast"
              >较昨日<code>{{ fyList.data.add_daily.addcure_new }}</code>
            </span>
          </div>
          <div class="yq-item">
            <h5>累计死亡</h5>
            <span>
              <b style="color: #666666">{{ fyList.data.othertotal.die }}</b>
            </span>
            <span class="contrast"
              >较昨日<code>{{ fyList.data.othertotal.die_inc }}</code>
            </span>
          </div>
        </div>
        <div class="yq-line"></div>
        <div class="yq-bottom">
          <span @click="goyqRamTrace">疫情动态追踪</span>
        </div>
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
              国外数据说明:
              <br />
              a)数据来源：国外疫情数据来自权威机构的公开报道、世卫组织（WHO）、各国官方通报；<br />
              b)统计口径：因各国分不同时区，疫情数据日期统一采用北京时间的日期；新增数据与趋势图数据为昨日数据与前日数据相减的结果，每天更新一次；<br />
              c)更新时间：国外疫情数据因追踪、核实需要，与各国官方的发布时间相比较有一定的延迟。
              <br /><br />
            </p>
          </div>
        </div>
      </van-popup>
    </section>
  </div>
</template>

<script>
import { getFyData } from '../utils/getFyList.js'

export default {
  name: 'worldNumber',
  data() {
    return {
      // 疫情数据
      fyList: '',
      show: false
    }
  },
  created() {
    this.getFyList()
  },
  computed: {
    certain_inc() {
      if (!this.fyList) {
        return ''
      } else {
        return this.fyList.data.othertotal.certain_inc.slice(1)
      }
    },
    die() {
      if (!this.fyList) {
        return ''
      } else {
        return this.fyList.data.othertotal.die_inc.slice(1)
      }
    },
    nowQz() {
      if (!this.fyList) {
        return ''
      } else {
        return (
          this.fyList.data.othertotal.certain -
          this.fyList.data.othertotal.die -
          this.fyList.data.othertotal.recure
        )
      }
    }
  },
  methods: {
    // 获取疫情数据
    async getFyList() {
      const { data: res } = await getFyData()
      const fyLisyJson = JSON.parse(res.slice(13, -2))
      if (fyLisyJson.status.msg !== 'success') {
        return this.$toast.fail('获取数据失败')
      }

      this.fyList = fyLisyJson
    },
    // 数据说明遮罩层
    dataState() {
      this.show = true
    },
    // 点击关闭遮罩层
    closePopup() {
      this.show = false
    },
    // 去往疫情动态追踪
    goyqRamTrace() {
      this.$toast({
        message: '爱你哟',
        icon: 'like-o'
      })
    }
  }
}
</script>

<style lang="less" scoped>
// 疫情数据-文字
.yq-text {
  margin-top: 15px;
  .yq-con {
    position: relative;
    background-color: #fff;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    margin: 0 10px;
    padding: 5px 2px;
    .yq-title {
      display: flex;
      align-items: center;
      height: 0.35rem;
      color: #4d79f3;
      font-size: 15px;
      margin-right: 0.1rem;
      margin-top: 2px;
      b {
        margin-left: 15px;
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
      span {
        font-size: 10px;
        color: #777;
        margin: 0 10px;
      }
      .popupBtn {
        img {
          width: 50px;
          margin-top: 4px;
          margin-left: 40px;
        }
      }
    }
    .yq-list {
      flex-wrap: wrap;
      display: flex;
      margin-top: 20px;
      text-align: center;
      align-items: center;
      .yq-item {
        width: 33%;
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        h5 {
          font-size: 10px;
          font-style: normal;
          font-weight: normal;
        }
        span {
          margin-top: -2px;
          b {
            font-size: 20px;
          }
        }
        .contrast {
          font-size: 10px;
          color: #999;
          margin-top: 1px;
          code {
            display: inline;
            color: #666;
            font-size: 15;
            font-family: Microsoft YaHei, Helvetica Neue, Helvetica, STHeiTi,
              Arial, sans-serif;
            font-weight: 700;
          }
        }
      }
    }
    .yq-line {
      height: 1px;
      background-color: #eff0f9;
      margin: 10px 8px;
    }
    .yq-bottom {
      span {
        position: relative;
        top: 0;
        right: -65%;
        font-size: 15px;
        color: #3192f1;
        &::before {
          position: absolute;
          content: '';
          border: 1px solid #3192f1;
          border-bottom-color: transparent;
          border-right-color: transparent;
          transform: translate(100%, -50%) rotate(135deg);
          top: 50%;
          right: -5px;
          width: 7px;
          height: 7px;
        }
      }
    }
  }
}

// 弹层
// 数据详情提示框
.DataTip_item {
  position: fixed;
  width: 80%;
  max-height: 100%;
  border-radius: 15px;
  z-index: 9999;
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
