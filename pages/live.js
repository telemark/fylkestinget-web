import React, { Component } from 'react'
import Session from '../components/Session'
import Page from '../components/Page'
import NowPlaying from '../components/NowPlaying'
import Gun from 'gun/gun'
import 'gun/lib/open'
const gunURL = process.env.NOW_URL ? `${process.env.NOW_URL}/gun` : 'http://localhost:3000/gun'
const gun = Gun(gunURL)
const repackMeeting = require('../lib/repack-meeting')

class Live extends Component {
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
        <NowPlaying meeting={this.state.meeting} />
      </Page>
    )
  }
}

export default Session(Live)
