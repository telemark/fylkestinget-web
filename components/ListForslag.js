export default ({meeting}) => (
  meeting !== false && meeting.forslag ? meeting.forslag : 'Det er ikke registrert noen forslag ennå'
)
