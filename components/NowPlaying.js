export default ({meeting}) => (
  meeting !== false && meeting.now ? meeting.now : 'Det behandles ingen saker for øyeblikket'
)
