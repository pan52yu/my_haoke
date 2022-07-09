const columns = [
  {
    text: '浙江',
    children: [
      {
        text: '杭州',
        children: [{ text: '西湖区' }, { text: '余杭区' }]
      },
      {
        text: '温州',
        children: [{ text: '鹿城区' }, { text: '瓯海区' }]
      }
    ]
  },
  {
    text: '福建',
    children: [
      {
        text: '福州',
        children: [{ text: '鼓楼区' }, { text: '台江区' }]
      },
      {
        text: '厦门',
        children: [{ text: '思明区' }, { text: '海沧区' }]
      }
    ]
  }
]
const recursionFileMap = obj => {
  const arr = []
  obj.map(item => {
    const obj = {
      value: '',
      children: []
    }
    obj.value = item.text
    if (item.children) {
      obj.children = recursionFileMap(item.children)
    }
    arr.push(obj)
  })
  return arr
}
console.log(recursionFileMap(columns))
