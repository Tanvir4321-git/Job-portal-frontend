
import React, { use } from 'react';
import { useForm } from 'react-hook-form';

import logo from '../../assets/Logo.png';
import { Authcontext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router';
import axios from 'axios';


const SignUp = () => {
    const { registerUser } = use(Authcontext)
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const { email, password } = data
        const res = await registerUser(email, password)
        if (res?.user) {
            const { data } = await axios.post('https://job-portal-server-mu-flax.vercel.app/users', data)

            navigate('/')
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
                <h1 style={{ fontFamily: "'Clash Display', sans-serif" }} className='text-[#25324B] font-semibold text-3xl mb-2'>Create Account</h1>
                {/* <p className='text-[#515B6F] text-sm mb-8'>Already have an account? <Link to="/login" className='text-[#4640DE] font-semibold'>Log In</Link></p> */}

                <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>

                    {/* Name */}
                    <div>
                        <label className='text-[#25324B] text-sm font-semibold block mb-2'>Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            {...register('name', { required: 'Name is required' })}
                            className='w-full border border-[#D6DDEB] px-4 py-3 text-sm outline-none focus:border-[#4640DE] transition-colors placeholder:text-[#A8ADB7]'
                        />
                        {errors.name && <p className='text-red-500 text-xs mt-1'>{errors.name.message}</p>}
                    </div>

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
                        Create Account
                    </button>

                </form>
            </div>
        </div>
    );
};

export default SignUp;