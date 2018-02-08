export default () => (
  <form>
    <input type='text' id='from' placeholder='Forslagsstiller' required />
    <textarea id='proposal' placeholder='Forslagstekst' required />
    <button type='submit'>Legg til</button>
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
