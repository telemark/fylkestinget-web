import Session from '../components/Session'
import Page from '../components/Page'

const Index = ({ user }) => (
  <Page username={user.userId}>
    Hello {user.userName}
  </Page>
)

export default Session(Index)
