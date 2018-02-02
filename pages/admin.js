import React, { Component } from 'react'
import Session from '../components/Session'
import Page from '../components/Page'
import AddMeeting from '../components/AddMeeting'
import ListMeetings from '../components/ListMeetings'
const Gun = require('gun/gun')
const gunURL = process.env.NOW_URL ? `${process.env.NOW_URL}/gun` : 'http://localhost:3000/gun'
const gun = Gun(gunURL)

class Admin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      meetings: false
    }
    this.addMeeting = this.addMeeting.bind(this)
  }

  async componentDidMount () {
    console.log('mounted')
    gun.get('fylkestinget').get('meetings').on(state => {
      if (state !== undefined) {
        console.log(state)
        this.setState({meetings: state})
      }
    })
  }

  addMeeting (e) {
    e.preventDefault()
    const meetingUrlField = document.getElementById('meetingUrl')
    gun.get('fylkestinget').get('meetings').set(meetingUrlField.value)
    meetingUrlField.value = ''
  }

  render () {
    return (
      <Page username={this.props.user ? this.props.user.userId : null}>
        <AddMeeting addMeeting={this.addMeeting} />
        <ListMeetings meetings={this.state.meetings} />
      </Page>
    )
  }
}

export default Session(Admin)
