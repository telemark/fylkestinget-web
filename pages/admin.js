import React, { Component } from 'react'
import Session from '../components/Session'
import Page from '../components/Page'
import AddMeeting from '../components/AddMeeting'
const Gun = require('gun/gun')
const gun = Gun('http://localhost:3000/gun')

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
    gun.get('fylkestinget').on(state => {
      if (state !== undefined) {
        console.log(state)
        Object.keys(state).filter(key => key !== '_').forEach(key => {
          const updatedState = {[key]: state[key]}
          this.setState(updatedState)
        })
      }
    }, true)
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
      </Page>
    )
  }
}

export default Session(Admin)
