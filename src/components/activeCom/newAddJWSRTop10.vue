<template>
  <div>
    <div class="newAdd">
      <div class="newAdd-con">
        <div class="newAdd-title">
          <b>境外输入累计确诊省Top10</b>
          <span class="caseShare">分享</span>
        </div>
        <div class="newAdd-line" ref="lineRef"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { getJWSRTop10 } from '@/utils/getFyList.js'
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
      const { data: res } = await getJWSRTop10()

      if (res.result.status.msg !== 'succ') {
        return this.$toast('000')
      }

      const xData = res.result.data.map((item) => {
        return item.from
      })

      const seriesData = res.result.data.map((item) => {
        return item.certain
      })

      // 初始化
      this.chartInstance = this.$echarts.init(this.$refs.lineRef)

      const option = {
        title: {
          subtext: '单位: 例',
          right: 25
        },
        legend: {
          icon: 'circle',
          itemWidth: 8,
          top: '2%',
          left: '5%'
        },
        grid: {
          left: '3%',
          top: '15%',
          right: '5%',
          bottom: '8%',
          containLabel: true
        },
        tooltip: {
          borderColor: '#999',
          backgroundColor: '#fff',
          formatter: (e) => {
            return `<div>${e.name}</div>  <span>${e.marker}</span></span><span>${e.value}</span>`
          },
          extraCssText: 'z-index:2'
        },
        xAxis: {
          type: 'category',
          data: xData,
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
            // 倾斜
            rotate: 40,
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
          type: 'value'
        },
        series: [
          {
            type: 'bar',
            data: seriesData,
            itemStyle: {
              color: (e) => {
                const value = e.value
                if (value > 2000) {
                  return '#da2824'
                } else if (value > 0) {
                  return '#f6b16b'
                }
              }
            },
            barWidth: '46%',
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
        margin-left: 85px;
        margin-top: 2px;

        &::before {
          content: '';
          position: absolute;
          left: 8px;
          top: 2px;
          width: 15px;
          height: 15px;
          background: url('../../assets/images/share-btn-icon.svg')
            center/contain no-repeat;
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
  height: 270px;
}
</style>
