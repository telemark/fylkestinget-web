export default ({ item, adminView }) => (
  <div className={'wrapper'}>
    <h2>{item.agendanumber} - {item.title}</h2>
    <div>
      <a href={`http://opengov.cloudapp.net/Meetings/tfk/AgendaItems/Details/${item.id}`} target='_blank' className={'button'}>Se dokumenter</a>
      {adminView !== true ? <a href={`mailto:forslag@t-fk.no?subject=Forslag sak ${item.agendanumber}`} target='_blank' className={'button'}>Lever forslag</a> : null}
      {adminView === true ? <button className={'button'} data-agenda-item={item.id}>Registrer forslag</button> : null}
      {adminView === true ? <button className={'button'} data-agenda-item={item.id}>Behandles nå</button> : null}
    </div>
    <style jsx>
      {`
        a {
          padding: 0px;
          margin: 0px;
          font-size: 20px;
        }
        .wrapper {
          text-align: left;
          padding: 10px;
          border-radius: 0;
          background-color: #FFF;
          box-shadow: 0 2px 2px 0 rgba(0,0,0,.16), 0 0 2px 0 rgba(0,0,0,.12);
          margin-top: 10px;
        }

        .button {
          background-color: white;
          border-radius: 2px;
          border: 1px solid black;
          color: black;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 20px;
          width: 175px;
          height: 50px;
          margin: 10px;
          padding: 10px;
          cursor: pointer;
        }
      `}
    </style>
  </div>
)
