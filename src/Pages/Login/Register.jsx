import React, { useState } from 'react';
import banner from './../../../assets/others/authentication.png';
import img1 from './../../../assets/others/authentication1.png';
import { Form, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { useContext } from 'react';


const Register = () => {
    const {user,createUserwithEmail,updateUserProfile}= useContext(AuthContext);
    const navigate = useNavigate();
    const [err,seterr]= useState('');
    const handleRegister = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        seterr('')
        const email= form.email.value;
        const password = form.password.value;
        if(password.length<8){
            seterr('Password must be at least 8 characters')
            return
        }
        createUserwithEmail(email,password)
        .then(result=> {
            console.log(result.user)
            seterr('')
            updateUserProfile(result.user,name)
            navigate('/')
        })
        .catch(err=> {
            seterr(err.message)
        })
        
    }


    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: `url(${banner})`}}>
            <div className="w-3/4 h-[600px]"  style={{backgroundImage: `url(${banner})`,boxShadow:'2px 1px 30px 0px'}}>
            <div className="text-center">
                <div className="flex gap-10 items-center justify-center h-[600px]">
                <div className='w-72'>
                    <img src={img1}/>
                </div>
                <div>
                    <p className='text-2xl font-serif font-bold'>Register</p>
                    
                <Form onSubmit={handleRegister} className="card-body">
                    <p className='text-lg text-left text-red-600 font-serif font-semibold'>{err}</p>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Enter your Name" className="input input-bordered w-96" />
                    </div>
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
                    <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn font-serif bg-[#D1A054] hover:bg-[#D1A054]">Register</button>
                    </div>
                </Form>
                <p className='text-[#D1A054]'>Already Have an Account? <Link to='/login' className='text-yellow-900'>Log in</Link> </p>
                </div>
                </div>
            </div>
            </div>
            </div>
            </div>
    );
};

export default Register;