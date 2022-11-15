<template>
  <div>
    <div class="newAdd">
      <div class="newAdd-con">
        <div class="newAdd-title">
          <b>全球新冠疫苗接种追踪</b>
          <span class="caseShare">分享</span>
        </div>

        <div class="chinaVaccine">
          <div class="jiezhong">
            <i>中国累计接种</i>
            <span
              >{{ chinaVaccine }}
              <em>亿剂</em>
            </span>
          </div>
          <div class="borderBB"></div>
          <div class="jiezhong">
            <i>中国每百人接种</i>
            <span class="hunder"
              >{{ chinaHundredVaccine }}
              <em>剂</em>
            </span>
          </div>
        </div>

        <div class="divider"></div>

        <div class="chinaVaccine">
          <div class="jiezhong">
            <i>全球累计接种</i>
            <span
              >{{ worldVaccine }}
              <em>亿剂</em>
            </span>
          </div>
          <div class="borderBB"></div>
          <div class="jiezhong">
            <i>全球每百人接种</i>
            <span class="hunder"
              >{{ worldHundredVaccine }}
              <em>剂</em>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getVaccine } from '../utils/getFyList'
export default {
  name: '',
  data() {
    return {
      chinaVaccine: '',
      chinaHundredVaccine: '',
      worldVaccine: '',
      worldHundredVaccine: ''
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      const { data: res } = await getVaccine()
      this.vaccineData = res.data.VaccineTopData['中国']
      this.chinaHundredVaccine =
        res.data.VaccineTopData['中国'].total_vaccinations_per_hundred
      const aa = this.vaccineData.total_vaccinations.toString()
      this.chinaVaccine = aa.slice(0, 3) + ',' + aa.slice(3, 4)

      this.vaccineWoerldData = res.data.VaccineTopData['全球']
      this.worldHundredVaccine =
        res.data.VaccineTopData['全球'].total_vaccinations_per_hundred
      const bb = this.vaccineWoerldData.total_vaccinations.toString()
      this.worldVaccine = bb.slice(0, 3) + ',' + bb.slice(3, 4)
    }
  }
}
</script>

<style lang="less" scoped>
.newAdd {
  margin: 0 10px;
  .newAdd-con {
    position: relative;
    margin-top: 12px;
    height: auto;
    background-color: #fff;
    border-radius: 15px;
    .newAdd-title {
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
        margin-left: 110px;
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
  }
}

.chinaVaccine {
  margin: 0 10px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;

  .jiezhong {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 15px 0;
    i {
      font-style: normal;
      font-size: 12px;
    }
    span {
      margin-top: 5px;
      font-size: 20px;
      color: #178b50;
      font-weight: 600;
      em {
        font-size: 10px;
        font-style: normal;
      }
    }
    .hunder {
      color: #4e5a65;
    }
  }
  .borderBB {
    border: 0.1px solid #eee;
    height: 40px;
    margin-top: 15px;
  }
}

// 分割线
.divider {
  border: 0.1px solid #eee;
  margin: 0 10px;
}
</style>
