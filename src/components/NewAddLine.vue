<template>
  <div>
    <keep-alive include="newAddBT,newAddJw,newAddJwTop">
      <component :is="comCom"></component>
    </keep-alive>
    <!-- 切换图表 -->
    <div class="change-btn">
      <div class="btn" @click="goNew" :class="{ btnActive: changeBtnStatus1 }">
        <div>新增</div>
        <div>本土趋势</div>
      </div>
      <div class="btn" @click="goJw" :class="{ btnActive: changeBtnStatus2 }">
        <div>境外输入</div>
        <div>新增趋势</div>
      </div>
      <div
        class="btn"
        @click="goJwTop"
        :class="{ btnActive: changeBtnStatus3 }"
      >
        <div>境外输入</div>
        <div>省级TOP10</div>
      </div>
    </div>
  </div>
</template>

<script>
import newAddBT from './activeCom/newAddLineMainland.vue'
import newAddJw from './activeCom/newAddJWSR.vue'
import newAddJwTop from './activeCom/newAddJWSRTop10.vue'
export default {
  name: '',
  data() {
    return {
      comCom: 'newAddBT',
      changeBtnStatus1: true,
      changeBtnStatus2: false,
      changeBtnStatus3: false
    }
  },
  components: {
    newAddBT,
    newAddJw,
    newAddJwTop
  },
  created() {},
  methods: {
    goNew() {
      this.comCom = 'newAddBT'
      this.changeBtnStatus1 = true
      this.changeBtnStatus2 = false
      this.changeBtnStatus3 = false
    },
    goJw() {
      this.comCom = 'newAddJw'
      this.changeBtnStatus1 = false
      this.changeBtnStatus2 = true
      this.changeBtnStatus3 = false
    },
    goJwTop() {
      this.comCom = 'newAddJwTop'
      this.changeBtnStatus1 = false
      this.changeBtnStatus2 = false
      this.changeBtnStatus3 = true
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
