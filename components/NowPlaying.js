function renderAgenda (meeting) {
  let agenda = false
  if (meeting && meeting.agenda) {
    const filteredAgenda = meeting.agenda.filter(item => item.id === meeting.now)
    agenda = filteredAgenda[0]
  }
  if (meeting && meeting.forslag) {
    const filteredForslag = meeting.forslag.filter(item => item.agendaId === meeting.now).filter(forslag => forslag.show === false)
    agenda.forslag = filteredForslag
  }
  return agenda !== false
  ? (<div>
    <h1>{agenda.agendanumber} - {agenda.title}</h1>
    {agenda && agenda.forslag ? agenda.forslag.map((forslag, index) => <div><h2>{index + 1}</h2><div>{forslag.from}</div><div>{forslag.proposal}</div></div>) : null}
  </div>)
  : null
}

export default ({ meeting }) => (
  meeting !== false && meeting.now
  ? renderAgenda(meeting)
  : 'Det behandles ingen saker for øyeblikket'
)
