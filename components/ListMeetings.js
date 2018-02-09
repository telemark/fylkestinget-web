import MeetingHeader from './MeetingHeader'
import AgendaItems from './AgendaItems'

export default ({ meeting, adminView, toggleForslag }) => (
  meeting !== false
  ? <div><MeetingHeader meeting={meeting} />{meeting.documents.map(doc => <div>{doc.title}</div>)}<AgendaItems agenda={meeting.agenda} adminView={adminView} toggleForslag={toggleForslag} /></div>
  : null
)
