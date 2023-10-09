import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import Swal from 'sweetalert2'

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

   const [loginError, setLoginError] = useState('');
   const [loginSuccess, setLoginSuccess] = useState('');

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        setLoginError('');
        setLoginSuccess('');

        signIn(email, password)
            .then(() => {
                setLoginSuccess(Swal.fire('User login successful'));

                // navigate after loading
                navigate(location?.state ? location.state : '/');
            })
            .catch(() => {
                setLoginError(Swal.fire('Email or Password does not match'));
               
            })
    }
    

    const googleProvider = new GoogleAuthProvider()
    const handleGogleLogin = ()=>{
     signInWithPopup(auth, googleProvider)
     .then(result =>{
        setLoginSuccess(Swal.fire('User login successful'), result.user);
     })
     .catch(error =>{
        setLoginError(Swal.fire(error.message));
     })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="card bg-base-300 relative flex flex-col justify-center items-center rounded-xl border border-box text-purple-700 text-lg font-bold shadow-2xl py-10">
                <div className="card flex-shrink-0 items-center justify-center mt-6 w-full max-w-md shadow-2xl text-center">
                    <h4 className="block font-sans text-3xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Login Now!
                    </h4>
                    <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        Enter your email & password to login.
                    </p>
                    <form onSubmit={handleLogin} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-4 flex flex-col gap-6">
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    type="email"
                                    name="email"
                                    className="peer h-full w-full rounded-md border border-gray-400 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Email
                                </label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    type="password"
                                    name="password"
                                    className="peer h-full w-full rounded-md border border-gray-400 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Password
                                </label>
                            </div>
                        </div>
                        <button
                            className="mt-6 block w-full select-none rounded-lg bg-purple-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        >Login</button>
                        <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            Do not have account?
                            <Link to="/register"
                                className="font-bold ml-2 text-pink-500 transition-colors hover:text-blue-700"
                            >
                                Register
                            </Link>
                        </p>
                    </form>
                    <p className="font-bold pt-2">OR</p>
                        <button onClick={handleGogleLogin} className='p-3 mb-4 flex gap-2 btn btn-outline btn-info normal-case w-full font-bold text-xl'><img src="https://i.ibb.co/hL8843b/google-Logo.png" className='w-6' alt="" />Login with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;