import axios from '@/utils/request'

// 获取城市列表
export const getCityList = (level) =>
  axios({
    url: '/area/city',
    params: {
      level
    }
  })

//   获取热门城市列表
export const getHotList = () => axios({ url: '/area/hot' })
