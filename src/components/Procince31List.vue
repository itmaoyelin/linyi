<template>
  <div>
    <section class="recentCase" v-if="recentListTable">
      <div class="recent-con">
        <div class="recent-title">
          <b>近期31省区市本土病例</b>
          <span class="riskArea">风险地区</span>
          <span class="caseShare">分享</span>
        </div>
        <table class="recentMain">
          <thead>
            <tr>
              <th>城市(区)</th>
              <th>省区市</th>
              <th>新增</th>
              <th>现有确诊</th>
              <th>详细情况</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, i) in recentListTable.slice(0, this.showTotal)"
              :key="i"
            >
              <td>{{ item.city }}</td>
              <td>{{ item.province }}</td>
              <td class="newAdd">{{ item.newadd }}</td>
              <td>{{ item.nowdata }}</td>
              <td>
                <a :href="item.cityUrl"> <span>查看更多</span></a>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="showAllList" v-show="showAllListBtn" @click="lookAllList">
          <span>展开更多</span>
          <img src="../assets/images/ic_arrow_more_1.png" alt="" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { getFyRencentData } from '../utils/getFyList.js'

export default {
  name: 'province31List',
  data() {
    return {
      // 31省市疫情数据
      recentProvinceList: [],
      // 31省市table表格
      recentListTable: [
        {
          city: '',
          province: '',
          newadd: '',
          nowData: '',
          cityUrl: ''
        }
      ],
      showTotal: 10,
      // 展开更多按钮
      showAllListBtn: true
    }
  },
  created() {
    this.getRecentList()
  },
  methods: {
    // 获取31省市最新疫情数据
    async getRecentList() {
      const { data: res } = await getFyRencentData()
      const recentListJson = JSON.parse(res.slice(17, -2))

      if (recentListJson.result.status.msg !== 'success') {
        return this.$toast.fail('获取数据失败')
      }
      this.recentProvinceList = recentListJson.result

      const tableRecentList = this.recentProvinceList.data.map((item) => {
        return {
          city: item.city,
          province: item.province,
          newadd: item.conadd_str,
          nowdata: item.econNum,
          cityUrl: item.h5_url
        }
      })

      this.recentListTable = tableRecentList
    },
    // 点击查看更多疫情数据
    lookAllList() {
      this.showTotal = this.recentListTable.length
      this.showAllListBtn = false
      this.foldAllListBtn = true
    }
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
      }
      .riskArea {
        font-weight: normal;
        font-size: 12px;
        border: 1px solid #4d79f3;
        border-radius: 15px;
        padding: 2px 9px;
        color: #4d79f3;
        margin-left: 35px;
        margin-top: 2px;
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
        margin-left: 10px;
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
    .recentMain {
      min-width: 100%;
      text-align: center;
      border-collapse: collapse;
      margin-top: 5px;
      thead {
        th {
          min-width: auto;
          padding: 2px 11px;
          border-right: 2px solid #fff;
          font-size: 12px;
          background: rgba(77, 121, 243, 0.1);
          color: #4d79f3;
          font-weight: normal;
          &:nth-last-child(1) {
            border: none;
          }
        }
      }
      tbody {
        min-width: 300px;
        tr {
          font-size: 12px;
          height: 30px;
          background-color: #fff;
          .newAdd {
            color: red;
          }
          a {
            color: #000;
            span {
              position: relative;
              &::after {
                position: absolute;
                top: 2px;
                left: 50px;
                content: '';
                width: 10px;
                height: 10px;
                background: url('../assets/images/ic_arrow_right_blue.png')
                  center/contain no-repeat;
              }
            }
          }

          &:nth-child(even) {
            background-color: #f3f3f3;
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
</style>
