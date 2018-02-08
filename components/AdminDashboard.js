import AddForslag from './AddForslag'
import AddMeeting from './AddMeeting'

export default ({doAddForslag, doAddMeeting, toggleImport, toggleForslag, addMeeting, addForslag, updating, meeting}) => (
  <div>
    {doAddMeeting !== true ? <button onClick={toggleImport}>Importer møte</button> : null}
    {doAddForslag !== true ? <button onClick={toggleForslag}>Registrer forslag</button> : null}
    {doAddMeeting === true ? <AddMeeting addMeeting={addMeeting} updating={updating} toggleImport={toggleImport} /> : null}
    {doAddForslag === true ? <AddForslag addForslag={addForslag} agenda={meeting.agenda} updating={updating} toggleForslag={toggleForslag} /> : null}
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
          width: 175px;
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
      `}
    </style>
  </div>
)
