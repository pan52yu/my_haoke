import axios from '@/utils/request'
// 租房小组
export const getRenting = () => axios({ url: '/home/groups' })
