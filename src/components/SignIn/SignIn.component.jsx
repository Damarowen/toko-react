import React from 'react'

import './SignIn.styles.scss'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'

import { auth, signInWithGoogle } from '../../firebase/Firebase.utils'


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
//* put all name in one array to handle change

        this.setState({ [name]: value })
    }

    handleSubmit = async e => {
        e.preventDefault()

        const { email, password } = this.state
        try {

            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: "", password: "" })

        } catch (err) {
            console.log(err.message)

        }

    }

    render() {
        return (
            <div className='sign-in'>
                <h2> I already have an account </h2>
                <span>Sign in with your email</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput label='email' name='email' type='email' value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput label='password' name='password' type='password' value={this.state.password} handleChange={this.handleChange} required />
                    <div className='buttons'>

                        <CustomButton type='button'> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} googleSignIn>Google Sign In</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn