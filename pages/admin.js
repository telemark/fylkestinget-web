import React, { Component } from 'react'
import Session from '../components/Session'
import Page from '../components/Page'
import AddMeeting from '../components/AddMeeting'

class Admin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      number: 0,
      loggedIn: false
    }
  }

  async componentDidMount () {
    console.log('mounted')
  }

  render () {
    return (
      <Page username={this.props.user ? this.props.user.userId : null}>
        <AddMeeting />
      </Page>
    )
  }
}

export default Session(Admin)
