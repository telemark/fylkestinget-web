import Session from '../components/Session'
import Page from '../components/Page'

const Index = ({ user }) => (
  <Page username={user ? user.userId : null}>
    <div>
      <div className='userPhoto'>
        <img src='/static/placeholder.png' />
      </div>
      <div className='userInfo'>
        <div>
          Navn: {user && user.userName}
        </div>
        <div>
          Brukernavn: {user && user.userId}
        </div>
        <div>
          E-post: {user && user.email}
        </div>
        <div>
          Avdeling: {user && user.team}
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .userPhoto {
          float: left;
          margin-right: 5px;
        }
        .userInfo {
          text-align: left;
        }
      `}
    </style>
  </Page>
)

export default Session(Index)
