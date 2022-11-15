<template>
  <div>
    <div class="newAdd">
      <div class="newAdd-con">
        <div class="newAdd-title">
          <b>重点疫情国家累计确诊趋势</b>
          <span class="caseShare">分享</span>
        </div>
        <div class="newAdd-line" ref="lineRef">
          <van-loading size="24px">拼命加载中...</van-loading>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getPriorityUSA,
  getPriorityIndia,
  getPriorityBrazil,
  getPriorityGermany,
  getPriorityUK,
  getPriorityRussia,
  getPriorityKorea,
  getPriorityFrance
} from '@/utils/getFyList.js'
export default {
  name: '',
  data() {
    return {
      yqList: {},
      chartInstance: null,
      changeDataStatus: true
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList() {
      const { data: res } = await getPriorityUSA()
      const { data: resIndia } = await getPriorityIndia()
      const { data: resBrazil } = await getPriorityBrazil()
      const { data: resGermany } = await getPriorityGermany()
      const { data: resUK } = await getPriorityUK()
      const { data: resRussia } = await getPriorityRussia()
      const { data: resKorea } = await getPriorityKorea()
      const { data: resFrance } = await getPriorityFrance()

      const xData = resRussia.data.historylist.map((item) => {
        return item.date
      })
      const getDate = xData.reverse().slice(40)
      // 美国
      const seriesDataUSA = res.data.historylist.map((item) => {
        return item.conNum
      })
      const getSeriesData = seriesDataUSA.reverse()

      // 印度
      const seriesDataIndia = resIndia.data.historylist.map((item) => {
        return item.conNum
      })
      const getSeriesDataIndia = seriesDataIndia.reverse()

      // 巴西
      const seriesDataBrazil = resBrazil.data.historylist.map((item) => {
        return item.conNum
      })
      const getSeriesDataBarzil = seriesDataBrazil.reverse()

      // 德国
      const seriesDataGermany = resGermany.data.historylist.map((item) => {
        return item.conNum
      })
      const getSeriesDataGermany = seriesDataGermany.reverse()

      // 英国
      const seriesDataUK = resUK.data.historylist.map((item) => {
        return item.conNum
      })
      const getSeriesDataUK = seriesDataUK.reverse()

      // 俄罗斯
      const seriesDataRussia = resRussia.data.historylist.map((item) => {
        return item.conNum
      })
      const getSeriesDataRussia = seriesDataRussia.reverse()

      // 韩国
      const seriesDataKorea = resKorea.data.historylist.map((item) => {
        return item.conNum
      })
      const getSeriesDataKorea = seriesDataKorea.reverse()

      // 法国
      const seriesDataFrance = resFrance.data.historylist.map((item) => {
        return item.conNum
      })
      const getSeriesDataFrance = seriesDataFrance.reverse()

      // 初始化
      this.chartInstance = this.$echarts.init(this.$refs.lineRef)

      const option = {
        title: {
          subtext: '单位: 例',
          right: 25
        },
        legend: [
          {
            data: ['美国', '印度', '巴西', '德国'],
            icon: 'circle',
            x: 'center',
            top: '8%',
            padding: [0, 50]
          },
          {
            data: ['英国', '俄罗斯', '韩国', '法国'],
            icon: 'circle',
            top: '13%',
            x: 'center'
          }
        ],
        grid: {
          left: '1%',
          top: '25%',
          right: '5%',
          bottom: '8%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          borderColor: '#eee',
          backgroundColor: '#fff',
          extraCssText: 'z-index:2'
        },
        xAxis: {
          type: 'category',
          data: getDate,
          // 坐标轴刻度
          axisTick: {
            show: false,
            // 刻度与元素对齐
            alignWithLabel: true,
            // 坐标轴长度
            length: 0
          },
          axisLabel: {
            inside: false,
            fontSize: 10,
            // x轴数据间距
            rotate: 30,
            interval: 96,
            showMaxLabel: true
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#8d8d8d'
            }
          },
          boundaryGap: true
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            fontSize: 10
          }
        },
        series: [
          {
            name: '美国',
            type: 'line',
            data: getSeriesData,
            itemStyle: {
              color: '#cb2a0b'
            },
            // 折现平滑
            smooth: true,
            // 去掉折线上的圆点
            symbol: 'none',
            // 拐点位置放大
            emphasis: {
              scale: 2
            },
            zlevel: 0
          },
          {
            name: '印度',
            type: 'line',
            data: getSeriesDataIndia,
            itemStyle: {
              color: '#0d9074'
            },
            // 折现平滑
            smooth: true,
            // 去掉折线上的圆点
            symbol: 'none',
            // 拐点位置放大
            emphasis: {
              scale: 2
            },
            zlevel: 0
          },
          {
            name: '巴西',
            type: 'line',
            data: getSeriesDataBarzil,
            itemStyle: {
              color: '#cb5b03'
            },
            // 折现平滑
            smooth: true,
            // 去掉折线上的圆点
            symbol: 'none',
            // 拐点位置放大
            emphasis: {
              scale: 2
            },
            zlevel: 0
          },
          {
            name: '德国',
            type: 'line',
            data: getSeriesDataGermany,
            itemStyle: {
              color: '#50a100'
            },
            // 折现平滑
            smooth: true,
            // 去掉折线上的圆点
            symbol: 'none',
            // 拐点位置放大
            emphasis: {
              scale: 2
            },
            zlevel: 0
          },
          {
            name: '英国',
            type: 'line',
            data: getSeriesDataUK,
            itemStyle: {
              color: '#cc096a'
            },
            // 折现平滑
            smooth: true,
            // 去掉折线上的圆点
            symbol: 'none',
            // 拐点位置放大
            emphasis: {
              scale: 2
            },
            zlevel: 0
          },
          {
            name: '俄罗斯',
            type: 'line',
            data: getSeriesDataRussia,
            itemStyle: {
              color: '#974fcb'
            },
            // 折现平滑
            smooth: true,
            // 去掉折线上的圆点
            symbol: 'none',
            // 拐点位置放大
            emphasis: {
              scale: 2
            },
            zlevel: 0
          },
          {
            name: '韩国',
            type: 'line',
            data: getSeriesDataKorea,
            itemStyle: {
              color: '#515151'
            },
            // 折现平滑
            smooth: true,
            // 去掉折线上的圆点
            symbol: 'none',
            // 拐点位置放大
            emphasis: {
              scale: 2
            },
            zlevel: 0
          },
          {
            name: '法国',
            type: 'line',
            data: getSeriesDataFrance,
            itemStyle: {
              color: '#2774c0'
            },
            // 折现平滑
            smooth: true,
            // 去掉折线上的圆点
            symbol: 'none',
            // 拐点位置放大
            emphasis: {
              scale: 2
            },
            zlevel: 0
          }
        ]
      }

      this.chartInstance.setOption(option)
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
        margin-left: 80px;
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

.newAdd-line {
  width: 360px;
  height: 360px;
}

::v-deep .van-loading {
  position: relative;
  color: #c8c9cc;
  font-size: 0;
  vertical-align: middle;
  text-align: center;
  transform: translateY(90px);
  /* align-items: center; */
  /* justify-content: center; */
  /* top: 50%; */
}
</style>
