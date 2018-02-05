export default ({ meeting }) => (
  meeting !== false
  ? (<div><div>{meeting.board}</div><div>{meeting.place}</div><div>{meeting.state}</div><div>{meeting.date}</div><div>{meeting.documents.map(doc => <div>{doc.title}</div>)}</div><div>{meeting.agenda.map(agenda => <div>{agenda.title}</div>)}</div></div>)
  : null
)
