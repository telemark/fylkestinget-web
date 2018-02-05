const ogm = require('opengov-meetings')

module.exports = async url => {
  const urlSplit = url.split('/')
  const meetingId = urlSplit[urlSplit.length - 1]
  const options = {
    host: 'http://opengov.cloudapp.net',
    path: '/Meetings/tfk',
    meetingId: meetingId
  }
  try {
    return await ogm.getAgenda(options)
  } catch (error) {
    throw error
  }
}
