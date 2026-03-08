import React, { use } from 'react';
import { Authcontext } from '../Context/AuthContext';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Loading';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Admin = () => {

    const {user}=use(Authcontext)
    // get added job post by admin
   const {data:jobs, isLoading:loading,refetch}=useQuery({
   
    queryKey:['jobs'],
    queryFn:async()=>{
        const res=await axios.get(`http://localhost:5000/jobs`)
            return res.data
         
        } })


    // form

 const { register, handleSubmit, formState: { errors }, reset, } = useForm();

    const onSubmit =async (data) => {
      const res=  await axios.post ('http://localhost:5000/post-job',data)
      toast('Successfully Added  Job')
      refetch()
        reset();
    };



// job delete by admin


const handledelete=async(id)=>{

    const result = await axios.delete(`http://localhost:5000/job-delete/${id}`)
    refetch()
    toast(' Successfuly Deleted Job')
}


// user role

 const {data:role, isLoading}=useQuery({
   enabled: !!user?.email,
    queryKey:['user-role',user?.email],
    queryFn:async()=>{
        const res=await axios.get(`http://localhost:5000/users/${user?.email}/role`)
            return res.data

        } })

      if (!user||isLoading) {
  return <Loading></Loading>;
}
    
if(role?.role!=='admin'){
    return <h1 className='text-2xl font-semibold text-center'>You are not a Admin</h1>
} 


if (loading) {
  return <Loading></Loading>
}





    return (
        <div className='bg-white  max-w-360 mx-auto px-4 md:px-31 '>

            <h2  className='text-[#25324B] mt-10 text-center title font-semibold text-2xl mb-6'>
                Post a New Job
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className=' p-8 w-full max-w-2xl  space-y-5 border border-[#D6DDEB] mx-auto'>

                {/* Job Title */}
                <div>
                    <label className='text-[#25324B]  text-sm font-semibold block mb-2'>Job Title</label>
                    <input
                        type="text"
                        placeholder="e.g. Social Media Assistant"
                        {...register('title', { required: 'Job title is required' })}
                        className='w-full border border-[#D6DDEB] px-4 py-3 text-sm outline-none focus:border-[#4640DE] transition-colors placeholder:text-[#A8ADB7]'
                    />
                    {errors.title && <p className='text-red-500 text-xs mt-1'>{errors.title.message}</p>}
                </div>

                {/* Company */}
                <div>
                    <label className='text-[#25324B] text-sm font-semibold block mb-2'>Company</label>
                    <input
                        type="text"
                        placeholder="e.g. Nomad"
                        {...register('company', { required: 'Company is required' })}
                        className='w-full border border-[#D6DDEB] px-4 py-3 text-sm outline-none focus:border-[#4640DE] transition-colors placeholder:text-[#A8ADB7]'
                    />
                    {errors.company && <p className='text-red-500 text-xs mt-1'>{errors.company.message}</p>}
                </div>

                {/* Location */}
                <div>
                    <label className='text-[#25324B] text-sm font-semibold block mb-2'>Location</label>
                    <input
                        type="text"
                        placeholder="e.g. Paris, France"
                        {...register('location', { required: 'Location is required' })}
                        className='w-full border border-[#D6DDEB] px-4 py-3 text-sm outline-none focus:border-[#4640DE] transition-colors placeholder:text-[#A8ADB7]'
                    />
                    {errors.location && <p className='text-red-500 text-xs mt-1'>{errors.location.message}</p>}
                </div>

                {/* Logo URL */}
                <div>
                    <label className='text-[#25324B] text-sm font-semibold block mb-2'>Company Logo URL</label>
                    <input
                        type="url"
                        placeholder="e.g. https://example.com/logo.png"
                        {...register('logo', { required: 'Logo URL is required' })}
                        className='w-full border border-[#D6DDEB] px-4 py-3 text-sm outline-none focus:border-[#4640DE] transition-colors placeholder:text-[#A8ADB7]'
                    />
                    {errors.logo && <p className='text-red-500 text-xs mt-1'>{errors.logo.message}</p>}
                </div>

                {/* Tags */}
                <div>
                    <label className='text-[#25324B] text-sm font-semibold block mb-2'>Job Type & Tags</label>
                    <div className='flex flex-wrap gap-4'>
                        {['Full-Time', 'Part-Time', 'Remote', 'Marketing', 'Design', 'Business', 'Technology'].map((tag) => (
                            <label key={tag} className='flex items-center gap-2 cursor-pointer'>
                                <input
                                    type="checkbox"
                                    value={tag}
                                    {...register('tags', { required: 'Select at least one tag' })}
                                    className='accent-[#4640DE] w-4 h-4'
                                />
                                <span className='text-sm text-[#515B6F]'>{tag}</span>
                            </label>
                        ))}
                    </div>
                    {errors.tags && <p className='text-red-500 text-xs mt-1'>{errors.tags.message}</p>}
                </div>

                {/* Buttons */}
                <div className='flex gap-4 pt-2'>
                    <button
                        type="submit"
                        className='flex-1 bg-[#4640DE] text-white py-3 font-semibold hover:bg-[#3730c4] transition-colors'
                    >
                        Post Job
                    </button>
                    <button
                        type="button"
                        onClick={() => reset()}
                        className='flex-1 border border-[#D6DDEB] text-[#515B6F] py-3 font-semibold hover:border-[#4640DE] hover:text-[#4640DE] transition-colors'
                    >
                        Reset
                    </button>
                </div>

            </form>

            {/* Job Table */}

<div className='my-10'>
    <h2  className='text-[#25324B] text-center title font-semibold text-2xl mb-4'>
        Posted Jobs
    </h2>
    <table className='w-full border border-[#D6DDEB] text-sm'>
        <thead className='bg-[#F8F8FD]'>
            <tr>
                <th className='text-left px-4 py-3 text-[#25324B] font-semibold border-b border-[#D6DDEB]'>#</th>
                <th className='text-left px-4 py-3 text-[#25324B] font-semibold border-b border-[#D6DDEB]'>Job Title</th>
                <th className='text-left px-4 py-3 text-[#25324B] font-semibold border-b border-[#D6DDEB]'>Company</th>
                <th className='text-left px-4 py-3 text-[#25324B] font-semibold border-b border-[#D6DDEB]'>Action</th>
            </tr>
        </thead>
        <tbody>
            {jobs?.map((job, index) => (
                <tr key={job._id} className='border-b border-[#D6DDEB] hover:bg-[#F8F8FD] transition-colors'>
                    <td className='px-4 py-3 text-[#515B6F]'>{index + 1}</td>
                    <td className='px-4 py-3 text-[#25324B] font-medium'>{job.title}</td>
                    <td className='px-4 py-3 text-[#515B6F]'>{job.company}</td>
                    <td className='px-4 py-3'>
                        <button
                            onClick={() => handledelete( job._id)}
                            className='text-red-500 border border-red-400 px-3 py-1 text-xs font-semibold hover:bg-red-500 hover:text-white transition-colors'
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
        </div>
    );
};

export default Admin;