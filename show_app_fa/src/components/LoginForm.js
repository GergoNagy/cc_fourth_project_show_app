import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

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
                            onClick={(event) => this.handleClick(event)} />
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }

    handleClick(event) {
        let apiUrl = 'http://localhost:5000/api/users/';
        let name = this.state.name

        if (this.state.name === '') return


        fetch(apiUrl + name)
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                if (res.name === this.state.name &&
                    res.password === this.state.password) {
                    console.log('Login succesfull')
                } else {
                    console.log('oo')
                }
            })
            .catch(function (error) {
                console.log('Fetch error: ' + error.message);
                return error;
            });
    }
}



export default Loginform