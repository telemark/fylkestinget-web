import React, { Component } from 'react'
import Session from '../components/Session'
import Page from '../components/Page'
import AdminDashboard from '../components/AdminDashboard'
import ListMeetings from '../components/ListMeetings'
const axios = require('axios')
const Gun = require('gun/gun')
require('gun/lib/open')
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
      doAddForslag: false
    }
    this.addMeeting = this.addMeeting.bind(this)
    this.cleanUpMeeting = this.cleanUpMeeting.bind(this)
    this.addForslag = this.addMeeting.bind(this)
    this.toggleImport = this.toggleImport.bind(this)
    this.toggleForslag = this.toggleForslag.bind(this)
  }

  async componentDidMount () {
    console.log('mounted')
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

  toggleForslag () {
    const newState = !this.state.doAddForslag
    this.setState({doAddForslag: newState})
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
    this.setState({updating: false})
  }

  async addForslag (e) {
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
    this.setState({updating: false})
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
          meeting={this.state.meeting} />
        <ListMeetings meeting={this.state.meeting} />
      </Page>
    )
  }
}

export default Session(Admin)
