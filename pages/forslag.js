import React, { Component } from 'react'
import Session from '../components/Session'
import Page from '../components/Page'
import ListForslag from '../components/ListForslag'
const Gun = require('gun/gun')
require('gun/lib/open')
const gunURL = process.env.NOW_URL ? `${process.env.NOW_URL}/gun` : 'http://localhost:3000/gun'
const gun = Gun(gunURL)
const repackMeeting = require('../lib/repack-meeting')

class Forslag extends Component {
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
  }

  render () {
    return (
      <Page username={this.props.user ? this.props.user.userId : null}>
        <ListForslag meeting={this.state.meeting} />
      </Page>
    )
  }
}

export default Session(Forslag)
