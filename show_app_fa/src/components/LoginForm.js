import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

class Loginform extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            password: ''
        }
    }


    render() {
        return (
            <div className="LoginForm">
                <MuiThemeProvider>
                    <div>
                        <TextField
                            hintText='Enter your Username'
                            floatingLabelText='Username'
                            onChange={(event, newValue) => this.setState({ name: newValue })}
                        />
                        <br />
                        <TextField
                            type='password'
                            hintText='Enter your Password'
                            floatingLabelText='Password'
                            onChange={(event, newValue) => this.setState({ password: newValue })}
                        />
                        <br />
                        <RaisedButton label='Submit' primary={true}
                            id='button'
                            onClick={(event) => this.handleClick(event)}/>
                    </div>
                </MuiThemeProvider>
            </div>
                )
    }

    handleClick(event){
        let apiUrl = 'http://localhost:5000/api/users/';

        fetch(apiUrl + this.state.userName)
            .then((res) => res.json())
            .then((res) =>{
                if (res.name === this.state.name && 
                    res.password === this.state.password){
                    console.log('Login succesfull')
                } else {
                    console.log('oo')
                }
            })
    }

    // handleClick(event) {
    //     var apiBaseUrl = "http://localhost:5000/api/";
    //     var self = this;
    //     var payload = {
    //         "email": this.state.username,
    //         "password": this.state.password
    //     }
    //     axios.post(apiBaseUrl + 'login', payload)
    //         .then(function (response) {
    //             console.log(response);
    //             if (response.data.code === 200) {
    //                 console.log("Login successfull");
    //                 var uploadScreen = [];
    //                 // uploadScreen.push(<UploadScreen appContext={self.props.appContext} />)
    //                 self.props.appContext.setState({ loginPage: [], uploadScreen: uploadScreen })
    //             }
    //             else if (response.data.code === 204) {
    //                 console.log("Username password do not match");
    //                 alert("username password do not match")
    //             }
    //             else {
    //                 console.log("Username does not exists");
    //                 alert("Username does not exist");
    //             }
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }

}



export default Loginform