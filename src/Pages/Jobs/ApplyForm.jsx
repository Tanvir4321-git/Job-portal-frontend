import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const ApplyForm = () => {

 const location = useLocation();
  const job = location.state?.job;
const navigate=useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const res = await axios.post('https://job-portal-server-mu-flax.vercel.app/apply-job', {
            ...data,
        
        });
        toast('Application submited')
        navigate('/showall-jobs')
        
    };

    return (
        <div className='bg-white border border-[#D6DDEB] p-8'>
            <h2  className='text-[#25324B] title text-center font-semibold text-2xl mb-6'>
                Apply for this Job
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className='p-8 w-full max-w-2xl  space-y-5 border border-[#D6DDEB] mx-auto'>
                {/* Job Title */}
                <div>
                    <label className='text-[#25324B] text-sm font-semibold block mb-2'>Job Title</label>
                    <input
                        type="text"
                        defaultValue={job?.title}
                        {...register('job_title', { required: 'Job title is required' })}
                        className='w-full border border-[#D6DDEB] px-4 py-3 text-sm outline-none focus:border-[#4640DE] transition-colors placeholder:text-[#A8ADB7]'
                    />
                    {errors.job_title && <p className='text-red-500 text-xs mt-1'>{errors.job_title.message}</p>}
                </div>


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

                {/* Resume Link */}
                <div>
                    <label className='text-[#25324B] text-sm font-semibold block mb-2'>Resume Link</label>
                    <input
                        type="url"
                        placeholder="https://your-resume-link.com"
                        {...register('resume_link', {
                            required: 'Resume link is required',
                            pattern: { value: /^https?:\/\/.+/, message: 'Must be a valid URL' }
                        })}
                        className='w-full border border-[#D6DDEB] px-4 py-3 text-sm outline-none focus:border-[#4640DE] transition-colors placeholder:text-[#A8ADB7]'
                    />
                    {errors.resume_link && <p className='text-red-500 text-xs mt-1'>{errors.resume_link.message}</p>}
                </div>

                {/* Cover Note */}
                <div>
                    <label className='text-[#25324B] text-sm font-semibold block mb-2'>Cover Note</label>
                    <textarea
                        rows={5}
                        placeholder="Write a short cover note..."
                        {...register('cover_note', { required: 'Cover note is required' })}
                        className='w-full border border-[#D6DDEB] px-4 py-3 text-sm outline-none focus:border-[#4640DE] transition-colors placeholder:text-[#A8ADB7] resize-none'
                    />
                    {errors.cover_note && <p className='text-red-500 text-xs mt-1'>{errors.cover_note.message}</p>}
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className='w-full bg-[#4640DE] text-white py-3 font-semibold hover:bg-[#3730c4] transition-colors'
                >
                    Submit Application
                </button>

            </form>
        </div>
    );
};

export default ApplyForm;