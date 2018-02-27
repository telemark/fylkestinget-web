import React, { Component } from 'react'
import Session from '../components/Session'
import Page from '../components/Page'
import AddForslag from '../components/AddForslag'
import ListMeetings from '../components/ListMeetings'
import Gun from 'gun/gun'
import 'gun/lib/open'

const { HOST_URL } = require('../config')
const gunURL = `${HOST_URL}/gun`
const gun = Gun(gunURL)
const repackMeeting = require('../lib/repack-meeting')

class Admin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      meeting: false,
      updating: false,
      doAddForslag: false,
      adminView: true,
      activeAgendaId: false
    }
    this.addForslag = this.addForslag.bind(this)
    this.setNowPlaying = this.setNowPlaying.bind(this)
    this.toggleForslag = this.toggleForslag.bind(this)
    this.toggleShowForslag = this.toggleShowForslag.bind(this)
    this.deleteForslag = this.deleteForslag.bind(this)
  }

  async componentDidMount () {
    gun.get('fylkestinget').open(data => {
      this.setState({meeting: repackMeeting(data)})
    })
  }

  toggleForslag (e) {
    e.preventDefault()
    const newState = !this.state.doAddForslag
    const agendaId = e.target.dataset ? e.target.dataset.agendaItem : false
    this.setState({doAddForslag: newState, activeAgendaId: agendaId})
  }

  async toggleShowForslag (e) {
    e.preventDefault()
    const refId = e.target.dataset.refId
    const nowState = e.target.dataset.showState
    const showState = nowState === 'false'
    gun.get('fylkestinget').get('forslag').get(refId).get('show').put(showState)
  }

  async deleteForslag (e) {
    e.preventDefault()
    const refId = e.target.dataset.refId
    gun.get('fylkestinget').get('forslag').get(refId).put(null)
  }

  async setNowPlaying (e) {
    e.preventDefault()
    let nowPlayingId = e.target.dataset.agendaItem
    const agendaNow = e.target.dataset.agendaNow
    if (nowPlayingId === agendaNow) {
      nowPlayingId = false
    }
    gun.get('fylkestinget').put({now: nowPlayingId})
  }

  async addForslag (e) {
    e.preventDefault()
    this.setState({updating: true})
    console.log('Adding forslag')
    // Retrieves new data
    const fromField = document.getElementById('from')
    const proposalField = document.getElementById('proposal')
    const agendaId = this.state.activeAgendaId
    const data = {
      agendaId: agendaId,
      from: fromField.value,
      proposal: proposalField.value,
      timeStamp: new Date().getTime(),
      show: false
    }
    // Adds new data
    gun.get('fylkestinget').get('forslag').set(data)
    fromField.value = ''
    proposalField.value = ''
    this.setState({updating: false, activeAgendaId: false, doAddForslag: false})
  }

  render () {
    return (
      <Page username={this.props.user ? this.props.user.userPrincipalName : null}>
        {this.state.doAddForslag &&
        <AddForslag
          addForslag={this.addForslag}
          meeting={this.state.meeting}
          updating={this.state.updating}
          toggleForslag={this.toggleForslag}
          activeAgendaId={this.state.activeAgendaId}
        />
        }
        {!this.state.doAddForslag &&
          <ListMeetings
            meeting={this.state.meeting}
            adminView={this.props.user}
            toggleForslag={this.toggleForslag}
            setNowPlaying={this.setNowPlaying}
            toggleShowForslag={this.toggleShowForslag}
            deleteForslag={this.deleteForslag}
          />
        }
      </Page>
    )
  }
}

export default Session(Admin)
