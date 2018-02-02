export default ({ meetings }) => (
  meetings !== false
  ? Object.keys(meetings).filter(key => !['_', '#'].includes(key)).map(key => <div>{meetings[key]}</div>)
  : null
)
