import React from "react";
import './Userinfo.css'

class Userinfo extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        mobileNumber: '',
        errorMsg: ''
    }

    componentDidMount(){
        if(this.props.userInfo){
            this.setState({
                firstName:this.props.userInfo.firstName,
                lastName:this.props.userInfo.lastName,
                mobileNumber:this.props.userInfo.mobileNumber
            })
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitUserDetails = () =>{
        this.props.fetchUserData( this.state.firstName, this.state.lastName, this.state.mobileNumber, this.props.activeSlot)
    }

    render() {
        return (
            <div >
                <div className="userInfo">
                    <label>First Name</label>
                    <input
                        name="firstName"
                        value={this.state.firstName}
                        placeholder="Enter First Name"
                        width="100%"
                        onChange={this.handleInputChange} />
                </div>
                <div className="userInfo">
                    <label>Last Name</label>
                    <input
                        name="lastName"
                        value={this.state.lastName}
                        placeholder="Enter Last Name"
                        width="100%"
                        onChange={this.handleInputChange} />
                </div>
                <div className="userInfo">
                    <label>Mobile Number</label>
                    <input
                        name="mobileNumber"
                        value={this.state.mobileNumber}
                        placeholder="Enter Mobile Number"
                        width="100%"
                        onChange={this.handleInputChange} />
                </div>

                <button className="cancelBtn" onClick={this.props.cancel}>
                    Cancel
                </button>
                <button className="saveBtn" onClick={this.submitUserDetails}>
                    Save
                </button>

                <p style={{ color: 'red', textAlign: 'center' }}>{this.state.errorMsg}</p>
            </div>
        );
    }
}

export default Userinfo