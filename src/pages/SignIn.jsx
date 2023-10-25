import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const { signInUser, googleSignIn } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();



    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        setRegisterError(' ');

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters')
            return
        }

        signInUser(email, password)
            .then(res => {
                toast.success('Login successful');
                console.log(res.user);


                // navigate after login
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                toast.error('Login failed. Please try again.');
                console.error(error)
                setRegisterError(error.message)
            })
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)

                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <div className="hero mt-7 rounded-xl bg-base-200">
                <div className="hero-content flex-col">
                    <h2 className="text-4xl font-bold">Please Login</h2>
                    <div className="card flex-shrink-0 md:w-[330px] max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>Do not have an account? <Link className="text-xl text-violet-700 hover:link" to="/signup"> Register</Link></p>
                            <p className="font-semibold mt-2 justify-center flex items-center gap-4">Sign In with <span onClick={handleGoogleSignIn} className="text-xl flex items-center font-semibold text-violet-700 hover:link"> <FcGoogle></FcGoogle>oogle</span></p>

                            {
                                registerError && <p className="text-red-600 mt-3">{registerError}</p>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;