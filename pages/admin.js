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
      meeting: false
    }
    this.addMeeting = this.addMeeting.bind(this)
  }

  async componentDidMount () {
    console.log('mounted')
    gun.get('fylkestinget').open(data => {
      console.log(data)
      this.setState({meeting: repackMeeting(data)})
    })
  }

  async addMeeting (e) {
    e.preventDefault()
    const meetingUrlField = document.getElementById('meetingUrl')
    const urlSplit = meetingUrlField.value.split('/')
    const meetingId = urlSplit[urlSplit.length - 1]
    const url = `/api/agenda/${meetingId}`
    const { data } = await axios(url)
    // Adds new data
    gun.get('fylkestinget').put(data)
    meetingUrlField.value = ''
  }

  render () {
    return (
      <Page username={this.props.user ? this.props.user.userId : null}>
        <AddMeeting addMeeting={this.addMeeting} />
        <ListMeetings meeting={this.state.meeting} />
      </Page>
    )
  }
}

export default Session(Admin)
