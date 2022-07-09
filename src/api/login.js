import axios from '@/utils/request'

// 用户登录接口
export const userLogin = (data) => {
  return axios({
    url: '/user/login',
    method: 'POST',
    data
  })
}
