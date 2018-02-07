import MeetingHeader from './MeetingHeader'

export default ({ meeting }) => (
  meeting !== false
  ? <div><MeetingHeader meeting={meeting} />{meeting.documents.map(doc => <div>{doc.title}</div>)}{meeting.agenda.map(agenda => <div>{agenda.title}</div>)}</div>
  : null
)
