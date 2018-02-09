import AgendaItem from './AgendaItem'

export default ({ agenda, adminView }) => (
  agenda ? agenda.map(item => <AgendaItem item={item} adminView={adminView} />) : null
)
