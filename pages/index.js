import React, { Component } from 'react'
import Session from '../components/Session'
import Page from '../components/Page'
import ListMeetings from '../components/ListMeetings'
import Gun from 'gun/gun'
import 'gun/lib/open'

const { HOST_URL } = require('../config')
const gunURL = `${HOST_URL}/gun`
const gun = Gun(gunURL)
const repackMeeting = require('../lib/repack-meeting')

class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      meeting: false
    }
  }

  async componentDidMount () {
    console.log('mounted')
    gun.get('fylkestinget').open(data => {
      this.setState({meeting: repackMeeting(data)})
    })
    console.log(this.state.meeting)
  }

  render () {
    return (
      <Page username={this.props.user ? this.props.user.userId : null}>
        {this.state.meeting !== false ? <ListMeetings meeting={this.state.meeting} /> : 'Ingen møter registrert'}
      </Page>
    )
  }
}

export default Session(Index)
