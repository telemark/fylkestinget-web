import AgendaItem from './AgendaItem'

export default ({ meeting, adminView, toggleForslag, setNowPlaying }) => (
  meeting && meeting.agenda ? meeting.agenda.map(item => <AgendaItem meeting={meeting} item={item} adminView={adminView} toggleForslag={toggleForslag} setNowPlaying={setNowPlaying} />) : null
)
