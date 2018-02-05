const ogm = require('opengov-meetings')
const uuid = require('uuid/v4')

function repackMeeting (data) {
  let meeting = {...data.details}
  meeting.documents = data.documents.reduce((prev, curr) => {
    prev[uuid()] = {
      fileUrl: curr.fileUrl,
      title: curr.title
    }
    return prev
  }, {})
  meeting.agenda = data.agenda.reduce((prev, curr) => {
    prev[uuid()] = {
      agendanumber: curr.agendanumber,
      title: curr.title,
      id: curr.is
    }
    return prev
  }, {})
  return meeting
}

module.exports = async meetingId => {
  const options = {
    host: 'http://opengov.cloudapp.net',
    path: '/Meetings/tfk',
    meetingId: meetingId
  }
  try {
    const meeting = await ogm.getAgenda(options)
    return repackMeeting(meeting)
  } catch (error) {
    throw error
  }
}
