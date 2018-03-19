function objectToArray (data) {
  let list = data ? Object.keys(data).map(key => Object.assign({}, data[key], {refId: key})) : []
  let start = list.filter(item => (item.title && item.title.startsWith('Møteinnkalling')) || (item.title && /møteinnkalling/.test(item.title)) || (item.title && item.title.startsWith('Godkjenning - Møteprotokoll')))
  let end = list.filter(item => !start.includes(item))
  start.sort(sortAgenda)
  end.sort(sortAgenda)
  let final = start.concat(end)
  return final
}

function sortAgenda (a, b) {
  if (a.agendanumber && b.agendanumber) {
    return parseInt(a.agendanumber, 10) > parseInt(b.agendanumber, 10)
  } else {
    return a > b
  }
}

module.exports = data => {
  const snowflakes = ['agenda', 'documents', 'forslag']
  let meeting = {}
  Object.keys(data).filter(key => !['_', '#'].includes(key)).map(key => {
    meeting[key] = !snowflakes.includes(key) ? data[key] : objectToArray(data[key])
  })
  return meeting
}
