import React, { useState } from 'react'

import './SignIn.styles.scss'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'

import { auth, signInWithGoogle } from '../../firebase/Firebase.utils'


const SignIn = () => {

    const [userAuth, setAuth] = useState({ email: '', password: '' })

    const { email, password } = userAuth

    const handleSubmit = async (e) => {
        e.preventDefault()
        await auth.signInWithEmailAndPassword(email, password)
        setAuth({ email: "", password: "" })


    }

    const handleChange = e => {
        const { value, name } = e.target

        //* put all name in one array to handle change

        setAuth({ ...userAuth, [name]: value })
    }


    return (
        <div className='sign-in'>
            <h2> I already have an account </h2>
            <span>Sign in with your email</span>

            <form onSubmit={handleSubmit}>
                <FormInput label='email' name='email' type='email' value={email} handleChange={handleChange} required />
                <FormInput label='password' name='password' type='password' value={password} handleChange={handleChange} required />
                <div className='buttons'>

                    <CustomButton type='submit'> Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle} googleSignIn>Google Sign In</CustomButton>
                </div>
            </form>
        </div>
    )

}
export default SignIn