export function getLocal(key) {
  const data = localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (e) {
    console.log(e)
  }
  return data
}

export function setLocal(key, data) {
  localStorage.setItem(key, typeof data === 'object' ? JSON.stringify(data) : data)
}
