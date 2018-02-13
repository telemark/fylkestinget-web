import ForslagItem from './ForslagItem'

function getForslag (meeting, item, adminView) {
  let forslag = []
  if (meeting && meeting.forslag) {
    if (item) {
      const filteredForslag = meeting.forslag.filter(forslag => forslag.agendaId === item.id)
      if (adminView === true) {
        forslag = filteredForslag
      } else {
        const showOnlyVisible = filteredForslag.filter(forslag => forslag.show === true)
        forslag = showOnlyVisible
      }
    }
  }
  return forslag
}

export default ({ meeting, item, adminView, toggleShowForslag, deleteForslag }) => (
  <div>
    {getForslag(meeting, item, adminView).map((forslag, index) => <ForslagItem data={forslag} index={index} adminView={adminView} toggleShowForslag={toggleShowForslag} deleteForslag={deleteForslag} />)}
  </div>
)
