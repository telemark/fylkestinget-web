const { publicRuntimeConfig: { OPENGOV_URL, OPENGOV_PATH } } = require('../next.config')
const { getAgenda } = require('opengov-meetings')
const uuid = require('uuid/v4')

function repackMeeting (data) {
  let meeting = { ...data.details }
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
      id: curr.id,
      public: curr.public
    }
    return prev
  }, {})
  return meeting
}

module.exports = async meetingId => {
  const options = {
    host: OPENGOV_URL,
    path: OPENGOV_PATH,
    meetingId: meetingId
  }
  try {
    const meeting = await getAgenda(options)
    return Object.assign({}, { meetingId: meetingId }, repackMeeting(meeting))
  } catch (error) {
    console.log(error)
    throw error
  }
}
