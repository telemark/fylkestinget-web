import MeetingHeader from './MeetingHeader'
import AgendaItems from './AgendaItems'

export default ({ meeting, adminView, toggleForslag, setNowPlaying }) => (
  meeting !== false
  ? <div><MeetingHeader meeting={meeting} />{meeting.documents.map(doc => <div>{doc.title}</div>)}<AgendaItems meeting={meeting} adminView={adminView} toggleForslag={toggleForslag} setNowPlaying={setNowPlaying} /></div>
  : null
)
