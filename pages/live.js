import React, { Component } from 'react'
import Session from '../components/Session'
import Page from '../components/Page'
import AgendaItem from '../components/AgendaItem'
import Gun from 'gun/gun'
import 'gun/lib/open'

const { HOST_URL } = require('../config')
const gunURL = `${HOST_URL}/gun`
const gun = Gun(gunURL)
const repackMeeting = require('../lib/repack-meeting')

function renderAgenda (meeting) {
  let agenda = false
  if (meeting && meeting.agenda) {
    const filteredAgenda = meeting.agenda.filter(item => item.id === meeting.now)
    agenda = filteredAgenda[0]
  }
  return agenda !== false
  ? <AgendaItem meeting={meeting} item={agenda} />
  : null
}

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
        {this.state.meeting !== false && this.state.meeting.now
          ? renderAgenda(this.state.meeting)
          : 'Det behandles ingen saker for øyeblikket'
        }
      </Page>
    )
  }
}

export default Session(Live)
