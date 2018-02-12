import React, { Component } from 'react'
import Session from '../components/Session'
import Page from '../components/Page'
import AdminDashboard from '../components/AdminDashboard'
import ListMeetings from '../components/ListMeetings'
import Gun from 'gun/gun'
import 'gun/lib/open'
import { v4 as uuid } from 'uuid'
const axios = require('axios')
const gunURL = process.env.NOW_URL ? `${process.env.NOW_URL}/gun` : 'http://localhost:3000/gun'
const gun = Gun(gunURL)
const repackMeeting = require('../lib/repack-meeting')

class Admin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      meeting: false,
      updating: false,
      doAddMeeting: false,
      doAddForslag: false,
      adminView: true,
      activeAgendaId: false
    }
    this.addMeeting = this.addMeeting.bind(this)
    this.cleanUpMeeting = this.cleanUpMeeting.bind(this)
    this.addForslag = this.addMeeting.bind(this)
    this.setNowPlaying = this.setNowPlaying.bind(this)
    this.toggleImport = this.toggleImport.bind(this)
    this.toggleForslag = this.toggleForslag.bind(this)
  }

  async componentDidMount () {
    gun.get('fylkestinget').open(data => {
      this.setState({meeting: repackMeeting(data)})
    })
  }

  cleanUpMeeting () {
    const meeting = {
      board: null,
      status: null,
      date: null,
      documents: null,
      agenda: null,
      forslag: null,
      now: null
    }
    gun.get('fylkestinget').put(meeting)
  }

  toggleImport () {
    const newState = !this.state.doAddMeeting
    this.setState({doAddMeeting: newState})
  }

  toggleForslag (e) {
    e.preventDefault()
    const newState = !this.state.doAddForslag
    const agendaId = e.target.dataset ? e.target.dataset.agendaItem : false
    this.setState({doAddForslag: newState, activeAgendaId: agendaId})
  }

  async addMeeting (e) {
    e.preventDefault()
    this.setState({updating: true})
    // Removes data
    this.cleanUpMeeting()
    // Retrieves new data
    const meetingUrlField = document.getElementById('meetingUrl')
    const urlSplit = meetingUrlField.value.split('/')
    const meetingId = urlSplit[urlSplit.length - 1]
    const url = `/api/agenda/${meetingId}`
    const { data } = await axios(url)
    // Adds new data
    gun.get('fylkestinget').put(data)
    meetingUrlField.value = ''
    this.setState({updating: false, doAddMeeting: false})
  }

  async setNowPlaying (e) {
    e.preventDefault()
    const agendaId = e.target.dataset.agendaItem
    gun.get('fylkestinget').put({now: agendaId})
  }

  async addForslag (e) {
    e.preventDefault()
    this.setState({updating: true})
    // Retrieves new data
    const fromField = document.getElementById('from')
    const proposalField = document.getElementById('proposal')
    const agendaId = this.state.activeAgendaId
    const id = uuid()
    const data = {
      agendaId: agendaId,
      from: fromField.value,
      proposal: proposalField.value,
      show: false,
      id: id
    }
    // Adds new data
    console.log(data)
    gun.get('fylkestinget').get('forslag').set(data)
    fromField.value = ''
    proposalField.value = ''
    this.setState({updating: false, activeAgendaId: false, doAddForslag: false})
  }

  render () {
    return (
      <Page username={this.props.user ? this.props.user.userId : null}>
        <AdminDashboard
          doAddForslag={this.state.doAddForslag}
          doAddMeeting={this.state.doAddMeeting}
          toggleImport={this.toggleImport}
          toggleForslag={this.toggleForslag}
          addMeeting={this.addMeeting}
          addForslag={this.addForslag}
          updating={this.state.updating}
          meeting={this.state.meeting}
          activeAgendaId={this.state.activeAgendaId} />
        {this.state.doAddForslag !== true
          ? <ListMeetings
            meeting={this.state.meeting}
            adminView={this.state.adminView}
            toggleForslag={this.toggleForslag}
            setNowPlaying={this.setNowPlaying} /> : null}
      </Page>
    )
  }
}

export default Session(Admin)
