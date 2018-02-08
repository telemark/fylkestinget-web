import React, { Component } from 'react'
import Session from '../components/Session'
import Page from '../components/Page'
import ListMeetings from '../components/ListMeetings'
const Gun = require('gun/gun')
require('gun/lib/open')
const gunURL = process.env.NOW_URL ? `${process.env.NOW_URL}/gun` : 'http://localhost:3000/gun'
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
