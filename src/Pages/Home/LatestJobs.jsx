import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../../Loading';


const tagColorMap = {
    'Full-Time': 'bg-[#56CDAD1A] text-[#56CDAD] border border-[#26A4FF]',
    'Marketing': 'text-[#FFB836] border border-[#FFB836]',
    'Design': 'text-[#4640DE] border border-[#4640DE]',
};

const LatestJobs = () => {
    const { data: jobs, isLoading } = useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/jobs`)
            return res.data
        }
    });

    if (isLoading) return <Loading/>;

    return (
        <section id='jobs' className='bg-[#F8F8FD] py-16'>
            <div className='max-w-360 mx-auto px-4 md:px-31'>

                {/* Header */}
                <div className='flex items-center justify-between mb-10'>
                    <h1 className='font-semibold text-[32px] md:text-5xl title'>
                        Latest <span className='text-[#26A4FF]'>jobs open</span>
                    </h1>
                    <button className='md:flex hidden items-center gap-2 text-[#4640DE] font-semibold hover:gap-3 transition-all'>
                        Show all jobs <FiArrowRight />
                    </button>
                </div>

                {/* Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {jobs?.slice(0, 6).map((job) => (
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
                            </div>

                        </div>
                    ))}
                </div>

                <button className='mt-3 flex md:hidden items-center gap-2 text-[#4640DE] font-semibold hover:gap-3 transition-all'>
                    Show all jobs <FiArrowRight />
                </button>
            </div>
        </section>
    );
};

export default LatestJobs;