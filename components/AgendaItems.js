import AgendaItem from './AgendaItem'

export default ({ agenda }) => (
  agenda ? agenda.map(item => <AgendaItem item={item} />) : null
)
