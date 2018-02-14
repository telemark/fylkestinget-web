function getAgendaTitle (meeting, activeAgendaId) {
  let title = ''
  if (meeting && meeting.agenda) {
    if (activeAgendaId) {
      const filteredAgenda = meeting.agenda.filter(item => item.id === activeAgendaId)
      const agenda = filteredAgenda[0]
      title = `${agenda.agendanumber} - ${agenda.title}`
    }
  }
  return (<h1>{title}</h1>)
}

export default ({addForslag, meeting, updating, toggleForslag, activeAgendaId}) => (
  <form onSubmit={addForslag}>
    {getAgendaTitle(meeting, activeAgendaId)}
    <input type='text' id='from' placeholder='Forslagsstiller' required />
    <textarea id='proposal' placeholder='Forslagstekst' required />
    <button onClick={toggleForslag}>Avbryt</button><button type='submit'>Legg til</button>
    <style jsx>
      {`
        button {
          background-color: white;
          border-radius: 2px;
          color: black;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          padding: 10 px;
          font-size: 20px;
          width: 150px;
          height: 40px;
          margin: 10px;
          cursor: pointer;
        }

        button:focus {
          outline:0;
        }

        button:active {
          outline: 0;
        }

        input {
          width: 700px;
          height: 40px;
          margin: 10px;
          font-size: 20px;
        }

        input:focus {
          outline:0;
        }

        input:active {
          outline: 0;
        }

        textarea {
          width: 700px;
          height: 200px;
          margin: 10px;
          font-size: 20px;
          clear: both;
        }

        textarea:focus {
          outline:0;
        }

        textarea:active {
          outline: 0;
        }
      `}
    </style>
  </form>
)
