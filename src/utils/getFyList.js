import axios from 'axios'

/**
 *
 * 新闻资讯
 */
export const getFastNews = () => {
  return axios.get(
    '/fastNews/app.news/24hours_news.d.json?conf=timeline_v2&page=1&pageSize=3&pageType=kangYiNewsFlash'
  )
}

/**
 *
 * 疫情数据
 */
export const getFyData = () => {
  return axios.get('/fyData/project/fymap/ncp2020_full_data.json')
}

/**
 *
 * 31省市最新数据
 */
export const getFyRencentData = () => {
  return axios.get(
    '/recentList/project/fymap/ncp2020_feiyan_procity_loc_data.jsonp?callback=callbacklocation'
  )
}

// 境外输入TOP10
export const getJWSRTop10 = () => {
  return axios.get('/gwpreData/ncp/top_jwsr?sortby=certainto&n=10')
}

// 境外输入TOP10
export const getVaccine = () => {
  return axios.get(
    '/vaccineData/newsqa/v1/automation/modules/list?modules=VaccineTopData'
  )
}

// 重点国家疫情确诊趋势
// 1.美国
export const getPriorityUSA = () => {
  return axios.get(
    '/gwpreData/interface/news/wap/ncp_foreign.d.json?citycode=SCUS0001'
  )
}
// 2.印度
export const getPriorityIndia = () => {
  return axios.get(
    '/gwpreData/interface/news/wap/ncp_foreign.d.json?citycode=SCIN0091'
  )
} // 3.巴西
export const getPriorityBrazil = () => {
  return axios.get(
    '/gwpreData/interface/news/wap/ncp_foreign.d.json?citycode=SCBR0055'
  )
} // 4.德国
export const getPriorityGermany = () => {
  return axios.get(
    '/gwpreData/interface/news/wap/ncp_foreign.d.json?citycode=SCDE0049'
  )
} // 5.英国
export const getPriorityUK = () => {
  return axios.get(
    '/gwpreData/interface/news/wap/ncp_foreign.d.json?citycode=SCGB0044'
  )
} // 6.俄罗斯
export const getPriorityRussia = () => {
  return axios.get(
    '/gwpreData/interface/news/wap/ncp_foreign.d.json?citycode=SCRU0007'
  )
} // 7.韩国
export const getPriorityKorea = () => {
  return axios.get(
    '/gwpreData/interface/news/wap/ncp_foreign.d.json?citycode=SCKR0082'
  )
} // 8.法国
export const getPriorityFrance = () => {
  return axios.get(
    '/gwpreData/interface/news/wap/ncp_foreign.d.json?citycode=SCFR0033'
  )
}
