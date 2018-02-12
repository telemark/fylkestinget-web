function objectToArray (data) {
  let list = []
  if (data != null) {
    Object.keys(data).map(key => {
      list.push(Object.assign({}, data[key], {refId: key}))
    })
  }
  return list
}

module.exports = data => {
  const snowflakes = ['agenda', 'documents', 'forslag']
  let meeting = {}
  Object.keys(data).filter(key => !['_', '#'].includes(key)).map(key => {
    meeting[key] = !snowflakes.includes(key) ? data[key] : objectToArray(data[key])
  })
  return meeting
}
