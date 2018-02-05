function objectToArray (data) {
  let list = []
  Object.keys(data).map(key => {
    list.push(data[key])
  })
  return list
}

module.exports = data => {
  const snowflakes = ['agenda', 'documents']
  let meeting = {}
  Object.keys(data).filter(key => !['_', '#'].includes(key)).map(key => {
    meeting[key] = !snowflakes.includes(key) ? data[key] : objectToArray(data[key])
  })
  return meeting
}
