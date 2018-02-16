import AgendaItemListForslag from './AgendaItemListForslag'
import { COLORS } from '../config'
import Button from './Button'

export default ({ meeting, item, adminView, toggleForslag, setNowPlaying, toggleShowForslag, deleteForslag, hideButtons = false }) => (
  <div className={'wrapper'}>
    <h2>{item.agendanumber} - {item.title}</h2>
    <div className='item'>
      { !hideButtons && <a href={`http://opengov.cloudapp.net/Meetings/tfk/AgendaItems/Details/${item.id}`} target='_blank'><div className='button'>Se dokumenter</div></a> }
      {adminView === undefined && !hideButtons && <a href={`mailto:forslag@t-fk.no?subject=Forslag sak ${item.agendanumber}`} target='_blank' className='button'>Lever forslag</a> }
      {adminView !== undefined && !hideButtons && <Button dataAgendaItem={item.id} onClick={toggleForslag} value='Registrer forslag' />}
      {adminView !== undefined && !hideButtons && <Button backgroundColor={meeting.now === item.id ? COLORS.color3 : null} dataAgendaItem={item.id} dataAgendaNow={meeting.now} onClick={setNowPlaying} value={meeting.now === item.id ? 'Behandles nå' : 'Sett til behandling'} />}
    </div>
    <AgendaItemListForslag
      meeting={meeting}
      item={item}
      adminView={adminView}
      toggleShowForslag={toggleShowForslag}
      deleteForslag={deleteForslag} />
    <style jsx>
      {`
        a {
          padding: 0px;
          margin: 0px;
          font-size: 12px;
        }
        .item {
          display: flex;
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
          color: #353535;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          padding: 10 px;
          font-size: 14px;
          width: 175px;
          height: 40px;
          line-height: 40px
          margin: 10px;
          cursor: pointer;
          text-transform: uppercase;
          border-radius: 2px;
          transition: all 0.3s ease 0s;
        }

        .button:hover {
          background-color: #d8d8d8;
        }

        @media screen and (max-width: 800px) {
          .item {
            display: grid;
          }
        }
      `}
    </style>
  </div>
)
