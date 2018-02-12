function isActive (meeting, item) {
  let state = 'button'
  if (meeting && item) {
    if (meeting.nowPlaying === item.id) {
      state = 'button nowPlaying'
    }
  }
  return state
}

export default ({ meeting, item, adminView, toggleForslag, setNowPlaying }) => (
  <div className={'wrapper'}>
    <h2>{item.agendanumber} - {item.title}</h2>
    <div>
      <a href={`http://opengov.cloudapp.net/Meetings/tfk/AgendaItems/Details/${item.id}`} target='_blank' className={'button'}>Se dokumenter</a>
      {adminView !== true ? <a href={`mailto:forslag@t-fk.no?subject=Forslag sak ${item.agendanumber}`} target='_blank' className={'button'}>Lever forslag</a> : null}
      {adminView === true ? <button className={isActive(meeting, item)} data-agenda-item={item.id} onClick={toggleForslag} >Registrer forslag</button> : null}
      {adminView === true ? <button className={'button'} data-agenda-item={item.id} onClick={setNowPlaying} >Behandles nå</button> : null}
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

        .nowPlaying {
          background-color: yellow;
        }
      `}
    </style>
  </div>
)
