import React, {Component} from 'react'
import './login.css'

export default class Login extends Component {
    constructor(){
        super();
        this.state={
            username: '',
            password: ''

        }
    }


    render() {
        return (
            <div className="login-bar-container">
                <input placeholder='Username' onChange={(e)=>this.setState({username: e.target.value})}></input>
                <input placeholder='Password' onChange={(e)=>this.setState({password: e.target.value})}></input>
                <button onClick={()=>alert(`Username: ${this.state.username} Password: ${this.state.password}`)}>Login</button>
            </div>
        )
    }
}
