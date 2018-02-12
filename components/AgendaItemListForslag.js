import Forslag from './Forslag'

function getForslag (meeting, item) {
  let forslag = []
  if (meeting && meeting.forslag) {
    if (item) {
      const filteredForslag = meeting.forslag.filter(forslag => forslag.agendaId === item.id)
      forslag = filteredForslag
    }
  }
  return forslag
}

export default ({ meeting, item, adminView, toggleShowForslag, deleteForslag }) => (
  <div>
    {getForslag(meeting, item).map((forslag, index) => <Forslag data={forslag} index={index} adminView={adminView} toggleShowForslag={toggleShowForslag} deleteForslag={deleteForslag} />)}
  </div>
)
