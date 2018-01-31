import { Component } from 'react'

export default Page => class Session extends Component {
  static getInitialProps (ctx) {
    const { req } = ctx
    const user = req && req.session ? req.session.decodedToken : null
    console.log(user)
    return { user }
  }

  render () {
    return (
      <Page {...this.props} />
    )
  }
}
