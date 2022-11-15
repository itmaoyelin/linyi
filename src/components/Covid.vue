<template>
  <div>
    <!-- 头部 -->
    <section>
      <covidHeader></covidHeader>
    </section>

    <!-- 顶栏 -->
    <section>
      <covidLayout></covidLayout>
    </section>

    <!-- 抗疫快讯 -->
    <section>
      <covidQuickNews></covidQuickNews>
    </section>

    <!-- 疫情数据--文字 -->
    <section>
      <covidNumber></covidNumber>
    </section>

    <!-- 疫情地图 -->
    <section>
      <covidMap></covidMap>
    </section>

    <!-- banner -->
    <section>
      <covidBanner></covidBanner>
    </section>

    <!-- 近期31省区市本土病例 -->
    <section>
      <covid31ProvinceList></covid31ProvinceList>
    </section>

    <!-- 抗疫工具箱 -->
    <section>
      <covidTool></covidTool>
    </section>

    <!-- 新增疫情折线图 -->
    <section>
      <covidNewAddLine></covidNewAddLine>
    </section>

    <!-- 全国疫情趋势图 -->
    <section>
      <covidNationalData></covidNationalData>
    </section>

    <!-- 国内各地区疫情统计汇总 -->
    <section>
      <covidChinaData></covidChinaData>
    </section>

    <!-- banner2 -->
    <section>
      <covidWorldBanner></covidWorldBanner>
    </section>

    <!-- 新冠疫苗接种信息 -->
    <section>
      <covidVaccine></covidVaccine>
    </section>

    <!-- 世界疫情---文字 -->
    <section>
      <covidWorld></covidWorld>
    </section>

    <!-- 世界疫情地图 -->
    <section>
      <covidWorldMap></covidWorldMap>
    </section>

    <!-- 重点疫情国家累计确诊趋势 -->
    <section>
      <covidPriorityCountriesData></covidPriorityCountriesData>
    </section>

    <!-- 全球各地区疫情统计汇总 -->
    <section>
      <covidWorldData></covidWorldData>
    </section>

    <!-- 底部 -->
    <section>
      <covidFooter></covidFooter>
    </section>
  </div>
</template>

<script>
import covidHeader from '../views/covidHeader.vue'
import covidLayout from '../views/covidLayout.vue'
import covidQuickNews from '../views/covidQuickNews.vue'
import covidNumber from '../views/covidNumber.vue'
import covidMap from '../views/covidMap.vue'
import covidBanner from '../views/covidBanner.vue'
import covid31ProvinceList from '../views/covid31ProvinceList.vue'
import covidTool from '../views/covidTool.vue'
import covidNewAddLine from '../views/covidNewAddLine.vue'
import covidNationalData from '../views/covidNationalData.vue'
import covidChinaData from '../views/covidChinaData.vue'
import covidVaccine from '../views/covidVaccine.vue'
import covidWorld from '../views/covidWorld.vue'
import covidWorldMap from '../views/covidWorldMap.vue'
import covidWorldBanner from '../views/covidWorldBanner.vue'
import covidPriorityCountriesData from '../views/covidPriorityCountriesData.vue'
import covidWorldData from '../views/covidWorldData.vue'
import covidFooter from '../views/covidFooter.vue'
export default {
  name: 'Covid',
  components: {
    covidHeader,
    covidLayout,
    covidQuickNews,
    covidNumber,
    covidMap,
    covidBanner,
    covid31ProvinceList,
    covidTool,
    covidNewAddLine,
    covidNationalData,
    covidChinaData,
    covidWorldBanner,
    covidVaccine,
    covidWorld,
    covidWorldMap,
    covidPriorityCountriesData,
    covidWorldData,
    covidFooter
  }
}
</script>
