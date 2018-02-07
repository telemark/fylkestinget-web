export default ({ addMeeting, updating }) => (
  <form onSubmit={addMeeting}>
    <input
      type='text'
      name='meetingUrl'
      id='meetingUrl'
      title='Legg inn URL til møtet i OpenGov'
      placeholder='URL til møtet i OpenGov'
      disabled={updating}
      required='required' />
    <button type='submit' disabled={updating}>Importer</button>
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
      `}
    </style>
  </form>
)
