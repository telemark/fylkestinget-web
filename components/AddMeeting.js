export default () => (
  <form>
    <input type='text' name='meetingUrl' id='meetingUrl' placeholder='URL til møte' />
    <button type='submit'>Importer</button>
    <style jsx>
      {`
        button {
          background-color: white;
          border-radius: 2px;
          color: black;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          width: 150px;
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
          width: 500px;
          height: 40px;
          margin-bottom: 10px;
          font-size: 20px;
        }
      `}
    </style>
  </form>
)
