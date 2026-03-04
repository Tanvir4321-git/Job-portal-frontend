import React, { use } from 'react';
import { useForm } from 'react-hook-form';

import logo from '../../assets/Logo.png';
import { Authcontext } from '../../Context/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router';

const Login = () => {
    const {login}=use(Authcontext)
    const { register, handleSubmit, formState: { errors } } = useForm();
      const navigate=useNavigate()
      const location=useLocation()
    const onSubmit =async (data) => {

        const res=await login(data?.email, data?.password)
         if(res?.user){

             if (location.state) {
                    navigate(location.state)
                } else {
                    navigate('/')
                }
         }
    };

    return (
        <div className='min-h-screen bg-[#F8F8FD] flex items-center justify-center px-4'>
            <div className='bg-white border border-[#D6DDEB] p-10 w-full max-w-md'>

                {/* Logo */}
                <div className='flex items-center gap-1 mb-6'>
                    <img src={logo} alt="logo" className='w-8 h-8' />
                    <h2 style={{ fontFamily: "'Clash Display', sans-serif" }} className='text-[#25324B] font-bold text-xl'>QuickHire</h2>
                </div>

                {/* Title */}
                <h1 style={{ fontFamily: "'Clash Display', sans-serif" }} className='text-[#25324B] font-semibold text-3xl mb-2'>Welcome Back</h1>
             

                <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>

                    {/* Email */}
                    <div>
                        <label className='text-[#25324B] text-sm font-semibold block mb-2'>Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                            })}
                            className='w-full border border-[#D6DDEB] px-4 py-3 text-sm outline-none focus:border-[#4640DE] transition-colors placeholder:text-[#A8ADB7]'
                        />
                        {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email.message}</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <label className='text-[#25324B] text-sm font-semibold block mb-2'>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            {...register('password', { required: 'Password is required' })}
                            className='w-full border border-[#D6DDEB] px-4 py-3 text-sm outline-none focus:border-[#4640DE] transition-colors placeholder:text-[#A8ADB7]'
                        />
                        {errors.password && <p className='text-red-500 text-xs mt-1'>{errors.password.message}</p>}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className='w-full bg-[#4640DE] text-white py-3 font-semibold hover:bg-[#3730c4] transition-colors'
                    >
                        Login
                    </button>
<p className='text-[#515B6F] text-sm mb-8'>Don't have an account? <Link to="/signup" className='text-[#4640DE] font-semibold'>Sign Up</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;