import axios from '@/utils/request'
// 获取用户的信息资料
export const userProfile = (authorization) => {
  return axios({
    url: '/user',
    headers: {
      authorization
    }
  })
}
