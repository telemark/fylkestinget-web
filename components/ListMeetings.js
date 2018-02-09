import MeetingHeader from './MeetingHeader'
import AgendaItems from './AgendaItems'

export default ({ meeting, adminView }) => (
  meeting !== false
  ? <div><MeetingHeader meeting={meeting} />{meeting.documents.map(doc => <div>{doc.title}</div>)}<AgendaItems agenda={meeting.agenda} adminView={adminView} /></div>
  : null
)
