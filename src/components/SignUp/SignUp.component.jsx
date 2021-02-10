import React from 'react'

import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'

import { auth, createUserProfile } from '../../firebase/Firebase.utils'

import './SignUp.styles.scss'

//* use class because we need store data

class SignUp extends React.Component {

    constructor() {
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async e => {
        const { displayName, email, password, confirmPassword } = this.state;

        e.preventDefault()

        //* match password
        if (password !== confirmPassword) {
            alert('tidak sama')
            return
        }

        try {

            //* method from auth library
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfile(user, { displayName })
            console.log(displayName)
            //* clear form
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''

            })
        } catch (err) {
            console.log(err.message)
        }
    }


    handleChange = e => {
        const { name, value } = e.target

        this.setState({ [name]: value })
    }




    render() {

        const { displayName, email, password, confirmPassword } = this.state;

        return (

            <div className="sign-up">
                <h1 className="title">I do not have an account</h1>
                <span>Sign up with your email and password</span>
                <form action="" className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />

                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'> Sign Up</CustomButton>
                </form>
            </div>
        )

    }
}

export default SignUp