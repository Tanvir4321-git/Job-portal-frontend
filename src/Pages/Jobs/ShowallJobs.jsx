import React, { useEffect, useState } from 'react';
import Loading from '../../Loading';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FiArrowRight, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router';


const tagColorMap = {
    'Full-Time': 'bg-[#56CDAD1A] text-[#56CDAD] border border-[#26A4FF]',
    'Part-Time': 'bg-[#56CDAD1A] text-[#56CDAD] border border-[#26A4FF]',
    'Marketing': 'text-[#FFB836] border border-[#FFB836]',
    'Design': 'text-[#4640DE] border border-[#4640DE]',
};
const ShowallJobs = () => {
 const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');
const [debouncedSearch, setDebouncedSearch] = useState('');

useEffect(() => {
    const timer = setTimeout(() => {
        setDebouncedSearch(search);
    }, 1000);
    return () => clearTimeout(timer);
}, [search]);



   const { data: jobs, isLoading } = useQuery({
        queryKey: ['jobs',debouncedSearch, filter],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/jobs?search=${search}&filter=${filter} `)
            return res.data
        }
    });

    if (isLoading) return <Loading/>;


    return (
        <div>
            <div className='max-w-360 mx-auto px-4 md:px-31 my-20'>
            
                            {/* Header */}
                            <div className='flex items-center justify-between mb-10'>
                                <h1 className='font-semibold text-[32px] md:text-5xl title'>
                                    Latest <span className='text-[#26A4FF]'>jobs open</span>
                                </h1>
                              
                            </div>

                            {/* Search & Filter */}
<div className='flex flex-col md:flex-row gap-4 mb-8'>
    {/* Search */}
    <div className='flex items-center gap-2 border border-[#D6DDEB] bg-white px-4 py-3 flex-1'>
        <FiSearch className='text-[#A8ADB7]' size={18} />
        <input
            type="text"
            placeholder="Search by job title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='outline-none text-sm w-full text-[#515B6F] placeholder:text-[#A8ADB7]'
        />
    </div>

    {/* Filter */}
    <div className='flex gap-3'>
        {['Full-Time', 'Part-Time'].map((type) => (
            <button
                key={type}
                onClick={() => setFilter(filter === type ? '' : type)}
                className={`px-5 py-3 text-sm font-semibold border transition-colors ${filter === type ? 'bg-[#4640DE] text-white border-[#4640DE]' : 'bg-white text-[#515B6F] border-[#D6DDEB] hover:border-[#4640DE] hover:text-[#4640DE]'}`}
            >
                {type}
            </button>
        ))}
    </div>
</div>
            
                            {/* Grid */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                {jobs.map((job) => (
                                    <div key={job._id} className='flex md:flex-row flex-col md:items-center gap-4 bg-white border border-[#D6DDEB] px-4 md:px-6 py-5 hover:shadow-md hover:border-[#4640DE] transition-all cursor-pointer group'>
            
                                        {/* Logo */}
                                        <img
                                            src={job.logo}
                                            alt={job.company}
                                            className='w-12 h-12 rounded object-contain border border-[#D6DDEB] p-1 shrink-0'
                                            onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${job.company}&background=4640DE&color=fff&size=48` }}
                                        />
            
                                        {/* Info */}
                                        <div>
                                         

                                            <h3 className='text-[#25324B] title font-semibold text-base group-hover:text-[#4640DE] transition-colors'>
                                                {job.title}
                                            </h3>
                                         
                                            
                                            <p className='text-[#515B6F] text-sm mt-0.5'>
                                                {job.company} <span className='mx-1 text-[#D6DDEB]'>•</span> {job.location}
                                            </p>
                                           
                                                 
                                            <div className='flex gap-2 flex-wrap mt-3'>
                                                {job.tags?.map((tag) => (
                                                    <span key={tag} className={`text-xs font-medium px-3 py-1 rounded-full ${tagColorMap[tag]}`}>
                                                        {tag}
                                                    </span>
                                                ))}
                                            
                                            </div>
                                            <div className='mt-5'>
                                                <Link to={`/job-details/${job?._id}` }className='border border-gray-400 py-2 px-4 mr-3 rounded-sm bg-blue-500 text-white'>Details</Link>
                                                <Link className='border border-gray-400 py-2 px-4 mr-3 rounded-sm '>Apply</Link>
                                            </div>
                                            
                                            
                                        </div>
                                        
            
                                    </div>
                                ))}
                            </div>
            
                       
                        </div>
        </div>
    );
};

export default ShowallJobs;