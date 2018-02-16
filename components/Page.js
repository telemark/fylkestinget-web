import Layout from './Layout'
import Navbar from './Navbar'
import Main from './Main'

export default ({ username, children }) => (
  <Layout>
    <Navbar username={username} />
    <Main>
      { children }
    </Main>
  </Layout>
)
