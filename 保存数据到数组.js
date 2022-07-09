const arr = [
  {
    label: '北京',
    value: 'AREA|88cff55c-aaa4-e2e0',
    pinyin: 'beijing',
    short: 'bj'
  },
  {
    label: '安庆',
    value: 'AREA|b4e8be1a-2de2-e039',
    pinyin: 'anqing',
    short: 'aq'
  },
  {
    label: '南宁',
    value: 'AREA|2bc437ca-b3d2-5c3c',
    pinyin: 'nanning',
    short: 'nn'
  },
  {
    label: '长沙',
    value: 'AREA|98b03413-6f84-c263',
    pinyin: 'changsha',
    short: 'cs'
  },
  {
    label: '武汉',
    value: 'AREA|27e414ce-a7e1-fd99',
    pinyin: 'wuhan',
    short: 'wh'
  },
  {
    label: '重庆',
    value: 'AREA|df130a14-79a9-a2ca',
    pinyin: 'zhongqing',
    short: 'zq'
  },
  {
    label: '青岛',
    value: 'AREA|0941e83b-fe11-b392',
    pinyin: 'qingdao',
    short: 'qd'
  },
  {
    label: '郑州',
    value: 'AREA|37d79dc2-f02d-0023',
    pinyin: 'zhengzhou',
    short: 'zz'
  },
  {
    label: '沈阳',
    value: 'AREA|d7233472-6b89-e7e5',
    pinyin: 'shenyang',
    short: 'sy'
  },
  {
    label: '佛山',
    value: 'AREA|0ee75d32-8a95-3f73',
    pinyin: 'foshan',
    short: 'fs'
  },
  {
    label: '成都',
    value: 'AREA|27a05931-1701-4e74',
    pinyin: 'chengdu',
    short: 'cd'
  },
  {
    label: '杭州',
    value: 'AREA|19b39d4f-8a36-d6f8',
    pinyin: 'hangzhou',
    short: 'hz'
  },
  {
    label: '西安',
    value: 'AREA|57c882ca-7b1b-afcc',
    pinyin: 'xian',
    short: 'xa'
  },
  {
    label: '广州',
    value: 'AREA|e4940177-c04c-383d',
    pinyin: 'guangzhou',
    short: 'gz'
  },
  {
    label: '廊坊',
    value: 'AREA|0233f220-a4e2-8a00',
    pinyin: 'langfang',
    short: 'lf'
  },
  {
    label: '济南',
    value: 'AREA|8b1d0441-81ab-e9cb',
    pinyin: 'jinan',
    short: 'jn'
  },
  {
    label: '徐州',
    value: 'AREA|de160fec-9197-60e4',
    pinyin: 'xuzhou',
    short: 'xz'
  },
  {
    label: '南京',
    value: 'AREA|93dec481-bd0b-577e',
    pinyin: 'nanjing',
    short: 'nj'
  },
  {
    label: '合肥',
    value: 'AREA|a7979a07-fffb-7afc',
    pinyin: 'hefei',
    short: 'hf'
  },
  {
    label: '兰州',
    value: 'AREA|b7b0889e-fb72-9fbc',
    pinyin: 'lanzhou',
    short: 'lz'
  },
  {
    label: '惠州',
    value: 'AREA|a4c6e115-a283-d137',
    pinyin: 'huizhou',
    short: 'hz'
  },
  {
    label: '福州',
    value: 'AREA|c29923ed-7257-143f',
    pinyin: 'fuzhou',
    short: 'fz'
  },
  {
    label: '盐城',
    value: 'AREA|28cbc063-20be-4abd',
    pinyin: 'yancheng',
    short: 'yc'
  },
  {
    label: '镇江',
    value: 'AREA|fc2a4bb5-76ee-486e',
    pinyin: 'zhenjiang',
    short: 'zj'
  },
  {
    label: '咸阳',
    value: 'AREA|884366b8-accf-ad7f',
    pinyin: 'xianyang',
    short: 'xy'
  },
  {
    label: '长春',
    value: 'AREA|5f14a39a-fcf5-09fb',
    pinyin: 'changchun',
    short: 'cc'
  },
  {
    label: '哈尔滨',
    value: 'AREA|1374672e-51da-ed2c',
    pinyin: 'haerbin',
    short: 'heb'
  },
  {
    label: '太原',
    value: 'AREA|6319a60d-d9e0-3a48',
    pinyin: 'taiyuan',
    short: 'ty'
  },
  {
    label: '常州',
    value: 'AREA|b83bf8cb-7934-8789',
    pinyin: 'changzhou',
    short: 'cz'
  },
  {
    label: '江门',
    value: 'AREA|d41c669e-bb9a-5e26',
    pinyin: 'jiangmen',
    short: 'jm'
  },
  {
    label: '潍坊',
    value: 'AREA|d5620763-a8ea-f2c2',
    pinyin: 'weifang',
    short: 'wf'
  },
  {
    label: '淮安',
    value: 'AREA|1f5da761-3fa2-07b1',
    pinyin: 'huaian',
    short: 'ha'
  },
  {
    label: '泉州',
    value: 'AREA|14715419-13bd-3924',
    pinyin: 'quanzhou',
    short: 'qz'
  },
  {
    label: '清远',
    value: 'AREA|98f06ebc-edf2-60ee',
    pinyin: 'qingyuan',
    short: 'qy'
  },
  {
    label: '威海',
    value: 'AREA|c2f7b36d-2c63-8a91',
    pinyin: 'weihai',
    short: 'wh'
  },
  {
    label: '呼和浩特',
    value: 'AREA|de3755d0-08b0-7cf0',
    pinyin: 'huhehaote',
    short: 'hhht'
  },
  {
    label: '石家庄',
    value: 'AREA|da444e4d-5adb-297a',
    pinyin: 'shijiazhuang',
    short: 'sjz'
  },
  {
    label: '烟台',
    value: 'AREA|ca3f7c2f-0587-605f',
    pinyin: 'yantai',
    short: 'yt'
  },
  {
    label: '深圳',
    value: 'AREA|a6649a11-be98-b150',
    pinyin: 'shenzhen',
    short: 'sz'
  },
  {
    label: '天津',
    value: 'AREA|c633fbe8-f88d-a1cd',
    pinyin: 'tianjin',
    short: 'tj'
  },
  {
    label: '吉林',
    value: 'AREA|7078ebcc-f436-68a0',
    pinyin: 'jilin',
    short: 'jl'
  },
  {
    label: '银川',
    value: 'AREA|10a55ad6-accd-51fe',
    pinyin: 'yinchuan',
    short: 'yc'
  },
  {
    label: '上海',
    value: 'AREA|dbf46d32-7e76-1196',
    pinyin: 'shanghai',
    short: 'sh'
  },
  {
    label: '常德',
    value: 'AREA|8b5c9a5f-77f4-4a6d',
    pinyin: 'changde',
    short: 'cd'
  },
  {
    label: '赣州',
    value: 'AREA|c143cee7-a4c3-88e3',
    pinyin: 'ganzhou',
    short: 'gz'
  },
  {
    label: '岳阳',
    value: 'AREA|ddb3411b-1d6d-56b2',
    pinyin: 'yueyang',
    short: 'yy'
  },
  {
    label: '株洲',
    value: 'AREA|f6be9464-00f8-1227',
    pinyin: 'zhuzhou',
    short: 'zz'
  },
  {
    label: '马鞍山',
    value: 'AREA|17ced06d-f15e-70f1',
    pinyin: 'maanshan',
    short: 'mas'
  },
  {
    label: '芜湖',
    value: 'AREA|83923400-e1c0-a3e2',
    pinyin: 'wuhu',
    short: 'wh'
  },
  {
    label: '南通',
    value: 'AREA|ee2267cd-2782-2f00',
    pinyin: 'nantong',
    short: 'nt'
  },
  {
    label: '厦门',
    value: 'AREA|5bc88487-f57a-3240',
    pinyin: 'shamen',
    short: 'sm'
  },
  {
    label: '九江',
    value: 'AREA|ace0000c-a15a-c549',
    pinyin: 'jiujiang',
    short: 'jj'
  },
  {
    label: '吉安',
    value: 'AREA|acb6430b-dfe3-0e5d',
    pinyin: 'jian',
    short: 'ja'
  },
  {
    label: '南昌',
    value: 'AREA|316343de-7862-e7d1',
    pinyin: 'nanchang',
    short: 'nc'
  },
  {
    label: '淄博',
    value: 'AREA|570ce3fe-3a5c-ed33',
    pinyin: 'zibo',
    short: 'zb'
  },
  {
    label: '苏州',
    value: 'AREA|d15bd52e-01ae-83b6',
    pinyin: 'suzhou',
    short: 'sz'
  },
  {
    label: '上饶',
    value: 'AREA|1a32fa69-2523-0c3f',
    pinyin: 'shangrao',
    short: 'sr'
  },
  {
    label: '临沂',
    value: 'AREA|5171322e-76ad-cec6',
    pinyin: 'linyi',
    short: 'ly'
  },
  {
    label: '宝鸡',
    value: 'AREA|d67f3282-dfc6-a687',
    pinyin: 'baoji',
    short: 'bj'
  },
  {
    label: '大连',
    value: 'AREA|35a9039a-f80b-8038',
    pinyin: 'dalian',
    short: 'dl'
  },
  {
    label: '汉中',
    value: 'AREA|9e6e8dba-8a7e-45df',
    pinyin: 'hanzhong',
    short: 'hz'
  },
  {
    label: '达州',
    value: 'AREA|d200295a-7aca-8eaa',
    pinyin: 'dazhou',
    short: 'dz'
  },
  {
    label: '凉山',
    value: 'AREA|3e0f0522-92fa-a8f5',
    pinyin: 'liangshan',
    short: 'ls'
  },
  {
    label: '漳州',
    value: 'AREA|8ff28dd0-b105-60d7',
    pinyin: 'zhangzhou',
    short: 'zz'
  },
  {
    label: '绵阳',
    value: 'AREA|36262553-3ba2-117c',
    pinyin: 'mianyang',
    short: 'my'
  },
  {
    label: '唐山',
    value: 'AREA|473deed8-3741-e1f8',
    pinyin: 'tangshan',
    short: 'ts'
  },
  {
    label: '东莞',
    value: 'AREA|df4995a8-a691-8898',
    pinyin: 'dongguan',
    short: 'dg'
  },
  {
    label: '南充',
    value: 'AREA|860700ca-69a5-22d8',
    pinyin: 'nanchong',
    short: 'nc'
  },
  {
    label: '张家口',
    value: 'AREA|c03617ff-d6ef-90c2',
    pinyin: 'zhangjiakou',
    short: 'zjk'
  },
  {
    label: '海口',
    value: 'AREA|e4f7245e-1773-3170',
    pinyin: 'haikou',
    short: 'hk'
  },
  {
    label: '襄阳',
    value: 'AREA|a8398f44-4c1d-eba4',
    pinyin: 'xiangyang',
    short: 'xy'
  },
  {
    label: '三亚',
    value: 'AREA|1466e8f3-6fc2-7000',
    pinyin: 'sanya',
    short: 'sy'
  },
  {
    label: '无锡',
    value: 'AREA|c78c958e-9269-d831',
    pinyin: 'wuxi',
    short: 'wx'
  },
  {
    label: '湛江',
    value: 'AREA|5da079fb-f421-4108',
    pinyin: 'zhanjiang',
    short: 'zj'
  },
  {
    label: '昆明',
    value: 'AREA|e66fe36b-48d3-598d',
    pinyin: 'kunming',
    short: 'km'
  },
  {
    label: '开封',
    value: 'AREA|aace77fb-3a22-fc40',
    pinyin: 'kaifeng',
    short: 'kf'
  },
  {
    label: '洛阳',
    value: 'AREA|cd295c34-0609-8454',
    pinyin: 'luoyang',
    short: 'ly'
  },
  {
    label: '湖州',
    value: 'AREA|8a85acd3-bd18-51de',
    pinyin: 'huzhou',
    short: 'hz'
  },
  {
    label: '嘉兴',
    value: 'AREA|18eff40f-35ca-f2cf',
    pinyin: 'jiaxing',
    short: 'jx'
  },
  {
    label: '丹东',
    value: 'AREA|2124ed8d-33e7-a88f',
    pinyin: 'dandong',
    short: 'dd'
  },
  {
    label: '贵阳',
    value: 'AREA|efdb858e-9758-b04d',
    pinyin: 'guiyang',
    short: 'gy'
  },
  {
    label: '新乡',
    value: 'AREA|b1dd9469-8757-dd35',
    pinyin: 'xinxiang',
    short: 'xx'
  },
  {
    label: '宁波',
    value: 'AREA|efd4aaad-e73f-3843',
    pinyin: 'ningbo',
    short: 'nb'
  },
  {
    label: '许昌',
    value: 'AREA|53fd4de5-6b11-5bc9',
    pinyin: 'xuchang',
    short: 'xc'
  },
  {
    label: '宜昌',
    value: 'AREA|b6816d6d-b988-da07',
    pinyin: 'yichang',
    short: 'yc'
  },
  {
    label: '北海',
    value: 'AREA|7d0c1398-df56-c4e8',
    pinyin: 'beihai',
    short: 'bh'
  },
  {
    label: '绍兴',
    value: 'AREA|30cc945e-2ff7-69cf',
    pinyin: 'shaoxing',
    short: 'sx'
  },
  {
    label: '桂林',
    value: 'AREA|7a8db7e0-ba57-ba5e',
    pinyin: 'guilin',
    short: 'gl'
  },
  {
    label: '柳州',
    value: 'AREA|55acc2ee-5add-917e',
    pinyin: 'liuzhou',
    short: 'lz'
  },
  {
    label: '台州',
    value: 'AREA|5f9100f6-9259-a7aa',
    pinyin: 'taizhou',
    short: 'tz'
  },
  {
    label: '珠海',
    value: 'AREA|515b6047-b0ed-edf2',
    pinyin: 'zhuhai',
    short: 'zh'
  },
  {
    label: '温州',
    value: 'AREA|29d27e65-390c-f15e',
    pinyin: 'wenzhou',
    short: 'wz'
  }
]
const arr2 = [
  {
    label: '北京',
    value: 'AREA|88cff55c-aaa4-e2e0',
    pinyin: 'beijing',
    short: 'bj'
  },
  {
    label: '广州',
    value: 'AREA|e4940177-c04c-383d',
    pinyin: 'guangzhou',
    short: 'gz'
  },
  {
    label: '上海',
    value: 'AREA|dbf46d32-7e76-1196',
    pinyin: 'shanghai',
    short: 'sh'
  },
  {
    label: '深圳',
    value: 'AREA|a6649a11-be98-b150',
    pinyin: 'shenzhen',
    short: 'sz'
  }
]
console.log(arr, arr2)
