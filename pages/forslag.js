import React, { Component } from 'react'
import Session from '../components/Session'
import Page from '../components/Page'
import ListForslag from '../components/ListForslag'
import Gun from 'gun/gun'
import 'gun/lib/open'
import getConfig from 'next/config'

const { publicRuntimeConfig: { HOST_URL } } = getConfig()
const gunURL = `${HOST_URL}/gun`
const gun = Gun({
  peers: gunURL,
  localStorage: false
})
const repackMeeting = require('../lib/repack-meeting')

class Forslag extends Component {
  constructor (props) {
    super(props)
    this.state = {
      meeting: false
    }
  }

  async componentDidMount () {
    gun.get('fylkestinget').open(data => {
      this.setState({meeting: repackMeeting(data)})
    })
  }

  render () {
    return (
      <Page username={this.props.user ? this.props.user.userPrincipalName : null}>
        <ListForslag meeting={this.state.meeting} />
      </Page>
    )
  }
}

export default Session(Forslag)
