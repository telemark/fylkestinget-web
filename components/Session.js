import { Component } from 'react'
import { AUTH_URL } from '../config'

export default Page => class Session extends Component {
  static getInitialProps (ctx) {
    const { req, res } = ctx
    const user = req && req.session ? req.session.decodedToken : null
    if (!user && res) {
      res.writeHead(302, { Location: AUTH_URL })
      res.end()
      return
    }
    console.log(user)
    return { user }
  }

  render () {
    return (
      <Page {...this.props} />
    )
  }
}
