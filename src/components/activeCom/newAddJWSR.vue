<template>
  <div>
    <div class="newAdd">
      <div class="newAdd-con">
        <div class="newAdd-title">
          <b>近期境外输入新增趋势</b>
          <span class="caseShare">分享</span>
        </div>
        <div class="newAdd-line" ref="lineRef"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { getFyData } from '@/utils/getFyList.js'
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
      const { data: res } = await getFyData()
      this.yqList = JSON.parse(res.slice(13, -2))

      const xData = this.yqList.data.historylist.map((item) => {
        return item.date
      })
      const getDate = xData.reverse().slice(300)

      const seriesData = this.yqList.data.historylist.map((item) => {
        return item.cn_addjwsrNum
      })

      const getSeriesData = seriesData.reverse().slice(300)

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
            interval: 5,
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
            name: '新增境外输入',
            type: 'line',
            data: getSeriesData,
            itemStyle: {
              color: '#ffa200'
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
        margin-left: 113px;
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
