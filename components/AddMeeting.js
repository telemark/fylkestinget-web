import { COLORS } from '../config'
import Button from './Button'

export default ({ addMeeting, updating, toggleImport }) => (
  <form onSubmit={addMeeting}>
    <input
      type='text'
      name='meetingUrl'
      id='meetingUrl'
      title='Legg inn URL til møtet i OpenGov'
      placeholder='URL til møtet i OpenGov'
      disabled={updating}
      required='required' />
    <div>
      <Button onClick={toggleImport} backgroundColor='#c46a6a' value='Avbryt' />
      <Button type='submit' backgroundColor={COLORS.color3} disabled={updating} value='Importer' />
    </div>
    <style jsx>
      {`
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
      `}
    </style>
  </form>
)
