function objectToArray (data) {
  return data ? Object.keys(data).map(key => Object.assign({}, data[key], {refId: key})) : []
}

module.exports = data => {
  const snowflakes = ['agenda', 'documents', 'forslag']
  let meeting = {}
  Object.keys(data).filter(key => !['_', '#'].includes(key)).map(key => {
    meeting[key] = !snowflakes.includes(key) ? data[key] : objectToArray(data[key])
  })
  return meeting
}
