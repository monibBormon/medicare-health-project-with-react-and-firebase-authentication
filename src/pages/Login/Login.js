import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { googleSignIn, getEmail, getPassword, handleLogin, setError, error, setIsLoading, facebookSignIn } = useAuth()

    //for redirect
    const location = useLocation()
    const redirect_url = location.state?.from || '/'
    const history = useHistory()

    const handleGoogleSignIn = () => {
        setIsLoading(true)
        googleSignIn()
            .then(result => {
                history.push(redirect_url)
            })
            .finally(() => setIsLoading(false))
    }
    const handleFacebookSignIn = () => {
        setIsLoading(true)
        facebookSignIn()
            .then(result => {
                history.push(redirect_url)
            })
            .finally(() => setIsLoading(false))
    }

    const handleFormLogin = (e) => {
        e.preventDefault()
        handleLogin()
            .then(result => {
                history.push(redirect_url)
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <div className='md:container md:mx-auto px-5 md:px-0 py-5'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div className="login">
                    <h2 className='text-4xl font-semibold mb-5 text-gray-600'>Please Login</h2>
                    <div className="login-form">
                        <form onSubmit={handleFormLogin}>
                            <input onChange={getEmail} required className='border-2 w-2/3 h-10 pl-3 mb-4 border-blue-500 rounded' type="email" placeholder='Your Email' /> <br />
                            <input onChange={getPassword} required className='border-2 w-2/3 h-10 pl-3 mb-4 border-blue-500 rounded' type="password" placeholder='Your Password' /> <br />
                            <p className='text-red-500 font-medium mb-1'>{error}</p>
                            <input type='submit' style={{ transition: '.3s all' }} className='font-semibold mr-4 bg-blue-500 text-white py-2 border-2 border-transparent hover:border-blue-500 px-8 hover:text-blue-500 hover:bg-white rounded cursor-pointer' value='Login' />
                        </form>
                    </div>
                    <div className="login-option mt-8">
                        <h3 className='font-semibold text-gray-600'>Don't have an account?</h3>
                        <Link to='/signup'>
                            <p className='font-semibold text-blue-500 text-xl hover:underline'>Create a free account here.</p>
                        </Link>
                        <h3 className='text-3xl font-semibold text-gray-600 my-2'>Or</h3>
                        <div className="social-login">
                            <button onClick={handleGoogleSignIn}><img className='w-8 inline-block mr-3' src="https://image.flaticon.com/icons/png/512/281/281764.png" alt="" /></button>
                            <button onClick={handleFacebookSignIn}><img className='w-8 inline-block mr-3' src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png" alt="" /></button>
                        </div>
                    </div>
                </div>
                <div className="login-bg">
                    <img className=' mx-auto' src="https://image.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg" alt="login" />
                </div>
            </div>
        </div>
    );
};

export default Login;