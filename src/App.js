import React from 'react'
import './App.css';
import Timeslot from './components/Timeslot/Timeslot';
import Userinfo from './components/Userinfo/Userinfo';

class App extends React.Component {


  state = {
    timeSlot: [
      {
        id: 0,
        timing: '9AM - 10AM',
        available: true
      },
      {
        id: 1,
        timing: '10AM - 11AM',
        available: true
      },
      {
        id: 2,
        timing: '11AM - 12PM',
        available: true
      },
      {
        id: 3,
        timing: '12AM - 1PM',
        available: true
      },
      {
        id: 4,
        timing: '1PM - 2PM',
        available: true
      },
      {
        id: 5,
        timing: '2PM - 3PM',
        available: true
      },
      {
        id: 6,
        timing: '3PM - 4PM',
        available: true
      },
      {
        id: 7,
        timing: '4PM - 5PM',
        available: true
      },
    ],
    showUser: false,
    activeSlot: ''

  }

  componentDidMount(){
    if(localStorage.getItem("timeSlot")){
      this.setState({
        timeSlot:JSON.parse(localStorage.getItem("timeSlot"))
      })
    }

  }

  toggleShowUser = (id) => {
    this.setState({
      showUser: !this.state.showUser,
      activeSlot: id
    })
  }

  fetchUserData = (firstName, lastName, mobileNumber, id) => {
    let timeSlot = [...this.state.timeSlot]
    let item = { ...timeSlot[id] }
    item.available = false
    item.userInfo = {
      firstName,
      lastName,
      mobileNumber
    }
    timeSlot[id] = item
    localStorage.setItem("timeSlot",JSON.stringify(timeSlot))
    
    this.setState({
      timeSlot,
      activeSlot: id,
      showUser: !this.state.showUser,
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Book User Slots</h2>
        {this.state.showUser ?
          <Userinfo
            cancel={() => { this.setState({ showUser: false }) }}
            fetchUserData={this.fetchUserData}
            activeSlot={this.state.activeSlot}
            userInfo={this.state.timeSlot[this.state.activeSlot].available==false ? this.state.timeSlot[this.state.activeSlot].userInfo : null}
          />

          :
          this.state.timeSlot.map((item) => {
            return <Timeslot
              clicked={this.toggleShowUser}
              id={item.id}
              timing={item.timing}
              available={item.available}
            />
          })}
      </div>
    );
  }
}


export default App
