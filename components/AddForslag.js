import { COLORS } from '../config'
import Button from './Button'

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
    <div>
      <Button onClick={toggleForslag} backgroundColor='#c46a6a' value='Avbryt' />
      <Button type='submit' backgroundColor={COLORS.color3} value='Legg til' />
    </div>
    <style jsx>
      {`
        input {
          width: 80%;
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
          width: 80%;
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
