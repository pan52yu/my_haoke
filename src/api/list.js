import axios from '@/utils/request'

// 房子列表
// export const gerHousingList = () =>
//   axios({
//     url: '/houses?cityId=AREA%7C88cff55c-aaa4-e2e0&area=AREA%7C88cff55c-aaa4-e2e0&rentType=true&price=null&more=CHAR%7C76eb0532-8099-d1f4%2CFLOOR%7C1%2CAREA%7C88cff55c-aaa4-e2e0%2CORIEN%7C61e99445-e95e-7f37%2Ctrue&roomType=ROOM%7Cd1a00384-5801-d5cd&oriented=ORIEN%7C61e99445-e95e-7f37&characteristic=CHAR%7C76eb0532-8099-d1f4&floor=FLOOR%7C1&start=1&end=20'
//   })
// 使用关键词查询小区信息
export const communityInformation = (name, id) =>
  axios({
    url: '/area/community',
    params: {
      name,
      id
    }
  })
// 根据条件查询房屋
export const queryHouses = (cityId) =>
  axios({
    url: '/houses',
    params: cityId
  })
// 获取房屋查询条件
export const queryBuilder = (id) =>
  axios({
    url: '/houses/condition',
    params: {
      id
    }
  })

// 输入houseCode查询房屋具体信息
export const getHouseInformation = (id) =>
  axios({
    url: `/houses/${id}`
  })
