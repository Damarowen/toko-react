import React from 'react'

import './SignIn.styles.scss'
import FormInput from '../FormInput/FormInput'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }

    }

    handleChange = e => {
        const { value, name } = e.target
        console.log('this is value ' + value)
        console.log('this is name ' + name)

        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()

        this.setState({ email: "", password: "" })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2> I already have an account </h2>
                <span>Sign in with your email</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput label='email' name='email' type='email' value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput label='password' name='password' type='password' value={this.state.email} handleChange={this.handleChange} required />

                    <input type="submit" value="Submit Form" />
                </form>
            </div>
        )
    }
}

export default SignIn