import Session from '../components/Session'
import Page from '../components/Page'

const Index = ({ user }) => (
  <Page username={user ? user.userId : null}>
    Hello {user ? user.userName : 'unknown user'}
  </Page>
)

export default Session(Index)
