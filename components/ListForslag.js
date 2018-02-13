function repackForslag (meeting) {
  if (meeting.agenda && meeting.forslag) {
    const agenda = meeting.agenda.map(agenda => {
      const forslag = meeting.forslag.filter(forslag => forslag.agendaId === agenda.id)
      return Object.assign({}, agenda, {forslag: forslag})
    })
    return agenda
  } else {
    return []
  }
}

export default ({ meeting }) => (
  meeting !== false && meeting.forslag ? meeting.forslag : 'Det er ikke registrert noen forslag ennå'
)
