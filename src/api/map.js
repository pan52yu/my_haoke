import axios from '@/utils/request'

export const getMapHouse = (id) =>
  axios({
    url: '/area/map',
    params: { id }
  })
