import React, { Component } from 'react'
import Fullscreen from 'react-full-screen'
import KeyHandler, { KEYPRESS } from 'react-key-handler'
import Session from '../components/Session'
import Page from '../components/Page'
import AgendaItem from '../components/AgendaItem'
import Button from '../components/Button'
import Gun from 'gun/gun'
import 'gun/lib/open'
import getConfig from 'next/config'

const { publicRuntimeConfig: { COLORS, HOST_URL } } = getConfig()
const gunURL = `${HOST_URL}/gun`
const gun = Gun({
  peers: gunURL
})
const repackMeeting = require('../lib/repack-meeting')

function renderAgenda (meeting, isFull) {
  const agenda = meeting && meeting.agenda ? meeting.agenda.find(item => item.id === meeting.now) : false
  return agenda
    ? <AgendaItem meeting={meeting} item={agenda} hideButtons large={isFull} />
    : null
}

class Live extends Component {
  constructor (props) {
    super(props)
    this.state = {
      meeting: false,
      isFull: false
    }
    this.toggleFullscreen = this.toggleFullscreen.bind(this)
  }

  toggleFullscreen () {
    const isFull = this.state.isFull
    this.setState({ isFull: !isFull })
  }

  async componentDidMount () {
    window.localStorage.clear()
    gun.get('fylkestinget').open(data => {
      this.setState({ meeting: repackMeeting(data) })
    })
  }

  render () {
    return (
      <Page username={this.props.user ? this.props.user.userPrincipalName : null}>
        <Button
          onClick={this.toggleFullscreen}
          backgroundColor={COLORS.secondary}
          color={COLORS.secondaryOpposite}
          value='Full skjerm'
        />
        <Fullscreen enabled={this.state.isFull} onChange={isFull => this.setState({ isFull })}>
          <KeyHandler keyEventName={KEYPRESS} keyValue='f' onKeyHandle={this.toggleFullscreen} />
          {this.state.meeting && this.state.meeting.now
            ? renderAgenda(this.state.meeting, this.state.isFull)
            : 'Det behandles ingen saker for øyeblikket'
          }
          <style jsx global>
            {`
              .fullscreen-enabled {
                overflow: auto;
              }
            `}
          </style>
        </Fullscreen>
      </Page>
    )
  }
}

export default Session(Live)
