import React, { useState } from 'react'

import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'

import { auth, createUserProfile } from '../../firebase/Firebase.utils'

import './SignUp.styles.scss'

//* use class because we need store data

const SignUp = () => {

    const [userAuth, setAuth] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword } = userAuth;

    const handleSubmit = async e => {

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
            setAuth({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''

            })
        } catch (err) {
            console.log(err.message)
        }
    }


    const handleChange = e => {
        const { name, value } = e.target
        //* put all name in one array to handle change
        setAuth({ ...userAuth, [name]: value });
    }

    return (

        <div className="sign-up">
            <h1 className="title">I do not have an account</h1>
            <span>Sign up with your email and password</span>
            <form action="" className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />

                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'> Sign Up</CustomButton>
            </form>
        </div>
    )

}

export default SignUp