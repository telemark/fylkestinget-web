export default ({ meeting }) => (
  meeting !== false
  ? Object.keys(meeting).filter(key => !['_', '#'].includes(key)).map(key => <div>{key}</div>)
  : null
)
