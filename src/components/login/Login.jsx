import React from 'react'
import './login.css'
import Footer from '../footer/Footer'
import { useForm } from 'react-hook-form'
import {Navigator, useNavigate} from 'react-router-dom'

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigatoHome = useNavigate()
    function onsubmit(param) {
        console.log(param)
        navigatoHome('/home')
    }
    return (
        <div className="login">
            <div className="login_img_container">
                <img className='login_bf_img' src="https://assets.nflxext.com/ffe/siteui/vlv3/2e884ce2-da1c-4501-ab9a-10c534d30975/6973a9ea-02b2-4de9-9006-d7d224c9b75d/IN-en-20230327-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
            </div>
            <div className="header">
                <img className='logo' src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="netflix_logo" />
            </div>
            <div className="login_form_container">
                <form onSubmit={handleSubmit(onsubmit)}>
                    <h1>Sign In</h1>
                    <label htmlFor="" >
                        <input className={errors.email && `error_input`} type="email" autoFocus placeholder='Email or phone number' {...register('email', { required: "Email is required.", pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: 'Please enter a valid email address or phone number.' } })} />
                        {errors.email && <p>{errors.email.message}</p>}
                    </label>
                    <label htmlFor="">
                        <input className={errors.password && `error_input`} type="password" placeholder='Password' {...register('password', { required: "Password is required.", pattern: { value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/, message: 'Password should contain at least one uppercase letter, lowercaseletter, digit, and special symbol.' }, minLength: { value: 4, message: 'Your password must contain between 4 and 60 characters.' } })} />
                        {errors.password && <p>{errors.password.message}</p>}
                    </label>

                    <button className='sign_in_btn' type='submit'>Sign In</button>

                    <div className="login_form_help">
                        <label htmlFor="" className='check_label'>
                            <input type="checkbox" className='check_box' defaultChecked /> Remember me
                        </label>
                        <a href="#">Need help?</a>
                    </div>
                    <div className="login_form_others">
                        <div className="login_sign_up">New to Netflix? <a className='a_sign_up' href="#">Sign up now</a>.</div>
                        <div className="login_para">
                            <p>
                                <span>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
                                <button className='learn_more' type='button'>Learn more.</button>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div >
    )
}

export default Login