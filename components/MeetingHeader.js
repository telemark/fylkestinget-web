const monthNames = {
  '01': 'januar',
  '02': 'februar',
  '03': 'mars',
  '04': 'april',
  '05': 'mai',
  '06': 'juni',
  '07': 'juli',
  '08': 'august',
  '09': 'september',
  '10': 'oktober',
  '11': 'november',
  '12': 'desember'
}

function formatDate (date) {
  let out = ''
  if (date) {
    const dateList = date.split('.')
    out = `${dateList[0]}. ${monthNames[dateList[1]]} ${dateList[2]}`
  }

  return out
}

export default ({meeting}) => (
  <div>
    <h1>{meeting.board}</h1>
    <div>Dato: {formatDate(meeting.date)}</div>
    <div>Møtested: {meeting.place}</div>
    <div>Status: {meeting.status}</div>
  </div>
)
