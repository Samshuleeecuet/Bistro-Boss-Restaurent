import React, { useEffect, useRef, useState } from 'react';
import banner from './../../../assets/others/authentication.png';
import img1 from './../../../assets/others/authentication1.png';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebookF,FaGoogle,FaGithub } from 'react-icons/fa';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
const Login = () => {
    const {signInwithEmail,loginwithGoogle}= useContext(AuthContext)
    const [err,seterr]= useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    useEffect(()=>{
        loadCaptchaEnginge(6);  
    },[])


    const handleLogin = (e)=>{
        e.preventDefault();
        const form = e.target;
        seterr('')
        const email = form.email.value;
        const password = form.password.value;
        const captcha = form.captcha.value;
        if (validateCaptcha(captcha)==true) {
            signInwithEmail(email,password)
            .then(result=>{
                console.log(result.user)
                navigate(from,{replace:true});
                seterr('')
            })
            .catch(err=>{
                seterr(err.message)
            })
        }
   
        else {
            seterr('Captcha Not Validate! Try Again')
        }
        

    }

    return (
        <div>
            <div className="hero pb-10" style={{backgroundImage: `url(${banner})`}}>
            <div className="w-3/4 h-[650px] mt-10"  style={{backgroundImage: `url(${banner})`,boxShadow:'2px 1px 30px 0px'}}>
            <div className="text-center">
                <div className="flex gap-10 items-center justify-center h-[600px]">
                <div className='w-72'>
                    <img src={img1}/>
                </div>
                <div className='mt-20'>
                    <p className='text-2xl font-serif font-bold'>Login</p>
                    
                    
                <Form onSubmit={handleLogin} className="card-body">
                <p className='text-lg text-left text-red-600 font-serif font-semibold'>{err}</p>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="Enter your email" className="input input-bordered w-96" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Password</span>
                    </label>
                    <input type="password" name='password'  placeholder="Enter your password" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <LoadCanvasTemplate />
                    </label>
                    <input  type="text" name='captcha' placeholder="Enter your captcha" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn font-serif bg-[#D1A054] hover:bg-[#D1A054]">Login</button>
                    </div>
                </Form>
                <p className='text-[#D1A054]'>New here? <Link to='/register' className='text-yellow-900'>Create a New Account</Link></p>
                <p>Or Sign In With</p>
                <p className='flex justify-center gap-4 items-center h-12 mt-4'>
                    <FaFacebookF className='border-2 border-gray-400 rounded-full p-2 text-5xl cursor-pointer'/> 
                    <FaGoogle onClick={loginwithGoogle} className='border-2 border-gray-400 rounded-full p-2 text-5xl cursor-pointer'/>
                    <FaGithub className='border-2 border-gray-400 rounded-full p-2 text-5xl cursor-pointer'/>
                </p>

                </div>
                </div>
            </div>
            </div>
            </div>
            </div>
    );
};

export default Login;