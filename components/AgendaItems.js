import AgendaItem from './AgendaItem'

export default ({ agenda, adminView, toggleForslag }) => (
  agenda ? agenda.map(item => <AgendaItem item={item} adminView={adminView} toggleForslag={toggleForslag} />) : null
)
