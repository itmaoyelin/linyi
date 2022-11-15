<template>
  <div>
    <keep-alive
      include="nationNewAddAndJWSR,nationSuspected,nationAddZyANdDeath,nationZyPrecent"
    >
      <component :is="comCom"></component>
    </keep-alive>

    <!-- 切换图表 -->
    <div class="change-btn">
      <div
        class="btn"
        @click="goNation"
        :class="{ btnActive: changeBtnStatus1 }"
      >
        <div>全国疫情</div>
        <div>新增趋势</div>
      </div>
      <div
        class="btn"
        @click="goSuspected"
        :class="{ btnActive: changeBtnStatus2 }"
      >
        <div>全国确诊</div>
        <div>疑似趋势</div>
      </div>
      <div class="btn" @click="goAdd" :class="{ btnActive: changeBtnStatus3 }">
        <div>全国累计</div>
        <div>治愈死亡</div>
      </div>
      <div
        class="btn"
        @click="goPrecent"
        :class="{ btnActive: changeBtnStatus4 }"
      >
        <div>治愈率</div>
        <div>死亡率</div>
      </div>
    </div>
  </div>
</template>

<script>
import nationNewAddAndJWSR from './activeCom/nationNewAddAndJWSR.vue'
import nationSuspected from './activeCom/nationSuspected.vue'
import nationAddZyANdDeath from './activeCom/nationAddZyANdDeath.vue'
import nationZyPrecent from './activeCom/nationZyPrecent.vue'
export default {
  name: 'nationData',
  data() {
    return {
      comCom: 'nationNewAddAndJWSR',
      changeBtnStatus1: true,
      changeBtnStatus2: false,
      changeBtnStatus3: false,
      changeBtnStatus4: false
    }
  },
  components: {
    nationNewAddAndJWSR,
    nationSuspected,
    nationAddZyANdDeath,
    nationZyPrecent
  },
  created() {},
  methods: {
    goNation() {
      this.comCom = 'nationNewAddAndJWSR'
      this.changeBtnStatus1 = true
      this.changeBtnStatus2 = false
      this.changeBtnStatus3 = false
      this.changeBtnStatus4 = false
    },
    goSuspected() {
      this.comCom = 'nationSuspected'
      this.changeBtnStatus1 = false
      this.changeBtnStatus2 = true
      this.changeBtnStatus3 = false
      this.changeBtnStatus4 = false
    },
    goAdd() {
      this.comCom = 'nationAddZyANdDeath'
      this.changeBtnStatus1 = false
      this.changeBtnStatus2 = false
      this.changeBtnStatus3 = true
      this.changeBtnStatus4 = false
    },
    goPrecent() {
      this.comCom = 'nationZyPrecent'
      this.changeBtnStatus1 = false
      this.changeBtnStatus2 = false
      this.changeBtnStatus3 = false
      this.changeBtnStatus4 = true
    }
  }
}
</script>

<style lang="less" scoped>
.change-btn {
  display: flex;
  text-align: center;
  justify-content: space-around;
  margin: 0 10px;
  margin-top: 15px;
  .btn {
    display: flex;
    width: 33%;
    flex-direction: column;
    background: #fff;
    text-align: center;
    color: #9a9ead;
    font-size: 14px;
    margin: 0 5px;
    border: 1px solid #d7deeb;
    border-radius: 8px;
    padding: 5px 0;
  }
  .btnActive {
    background: #f1f4ff;
    color: #4d79f3 !important;
    border-color: #bdcfff;
    // font-weight: 300;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border: 1px solid #bdcfff;
      border-width: 0 0 1px 1px;
      display: block;
      top: -0.07rem;
      left: 50%;
      margin-left: -0.05rem;
      background: #f1f4ff;
      transform: rotate(135deg);
      width: 0.1rem;
      height: 0.1rem;
    }
  }
}
</style>
