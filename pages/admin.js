import React, { Component } from 'react'
import Session from '../components/Session'
import Page from '../components/Page'
import AddMeeting from '../components/AddMeeting'
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
      updating: false
    }
    this.addMeeting = this.addMeeting.bind(this)
    this.cleanUpMeeting = this.cleanUpMeeting.bind(this)
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
      agenda: null
    }
    gun.get('fylkestinget').put(meeting)
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

  render () {
    return (
      <Page username={this.props.user ? this.props.user.userId : null}>
        <AddMeeting addMeeting={this.addMeeting} updating={this.state.updating} />
        <ListMeetings meeting={this.state.meeting} />
      </Page>
    )
  }
}

export default Session(Admin)
