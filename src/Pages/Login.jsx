import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
    const navigate = useNavigate()
    const {signInUser} = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)
        signInUser(email, password)
        .then(result => {
            console.log(result)
            e.target.reset()
            navigate('/')
        })
        .catch(error => {
            console.log('ERROR', error)
        })
        
    }

    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='font-semiboldbold'>New to this website? <span className='text-blue-800'><Link to="/signUp">Sign Up</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;