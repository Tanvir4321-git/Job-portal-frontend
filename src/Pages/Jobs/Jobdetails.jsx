import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Loading from '../../Loading';
import { Link, useParams } from 'react-router';
import { FiMapPin, FiClock } from 'react-icons/fi';

const tagColorMap = {
    'Full-Time': 'bg-[#56CDAD1A] text-[#56CDAD] border border-[#56CDAD]',
    'Part-Time': 'bg-[#FFF0E6] text-[#FF6550] border border-[#FF6550]',
    'Remote': 'bg-[#EBF5FB] text-[#26A4FF] border border-[#26A4FF]',
    'Marketing': 'text-[#FFB836] border border-[#FFB836]',
    'Design': 'text-[#4640DE] border border-[#4640DE]',
    'Business': 'text-[#27AE60] border border-[#27AE60]',
    'Technology': 'text-[#FFB836] border border-[#FFB836]',
};

const Jobdetails = () => {
    const { id } = useParams();

    const { data: job, isLoading } = useQuery({
        queryKey: ['job-details', id],
        queryFn: async () => {
            const res = await axios.get(`https://job-portal-server-mu-flax.vercel.app/job-details/${id}`)
            return res.data
        }
    });

    if (isLoading) return <Loading />;

    return (
        <div className='bg-[#F8F8FD] min-h-screen py-12'>
            <div className='max-w-360 mx-auto px-4 md:px-31'>
                <div className='flex flex-col lg:flex-row gap-8'>

                    {/* Left - Job Details */}
                    <div className='flex-1'>

                        {/* Header */}
                        <div className='bg-white border border-[#D6DDEB] p-8 mb-6'>
                            <div className='flex items-start gap-4 mb-6'>
                                <img
                                    src={job?.logo}
                                    alt={job?.company}
                                    className='w-16 h-16 object-contain border border-[#D6DDEB] p-2 rounded shrink-0'
                                    onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${job?.company}&background=4640DE&color=fff&size=64` }}
                                />
                                <div>
                                    <h1 style={{ fontFamily: "'Clash Display', sans-serif" }} className='text-[#25324B] font-semibold text-2xl md:text-3xl mb-1'>
                                        {job?.title}
                                    </h1>
                                    <div className='flex flex-wrap items-center gap-3 text-sm text-[#515B6F]'>
                                        <span className='font-medium text-[#25324B]'>{job?.company}</span>
                                        <span className='flex items-center gap-1'>
                                            <FiMapPin size={14} /> {job?.location}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Tags */}
                            <div className='flex gap-2 flex-wrap'>
                                {job?.tags?.map((tag) => (
                                    <span key={tag} className={`text-xs font-medium px-3 py-1 rounded-full ${tagColorMap[tag] || 'border border-gray-300 text-gray-500'}`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Description */}
                        <div className='bg-white border border-[#D6DDEB] p-8'>
                            <h2 style={{ fontFamily: "'Clash Display', sans-serif" }} className='text-[#25324B] font-semibold text-xl mb-4'>
                                Job Description
                            </h2>
                            <div className='text-[#515B6F] text-sm leading-7 whitespace-pre-line'>
                                {job?.details}
                            </div>
                        </div>

                    </div>

                    {/* Right - Apply Card */}
                    <div className='lg:w-80 shrink-0'>
                        <div className='bg-white border border-[#D6DDEB] p-6 sticky top-6'>
                            <h3 style={{ fontFamily: "'Clash Display', sans-serif" }} className='text-[#25324B] font-semibold text-lg mb-4'>
                                Job Overview
                            </h3>

                            <div className='space-y-4 mb-6'>
                                <div className='flex items-center gap-3'>
                                    <FiMapPin className='text-[#4640DE]' size={18} />
                                    <div>
                                        <p className='text-xs text-[#7C8493]'>Location</p>
                                        <p className='text-sm text-[#25324B] font-medium'>{job?.location}</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <FiClock className='text-[#4640DE]' size={18} />
                                    <div>
                                        <p className='text-xs text-[#7C8493]'>Job Type</p>
                                        <p className='text-sm text-[#25324B] font-medium'>{job?.tags?.[0]}</p>
                                    </div>
                                </div>
                            </div>

                            <Link to='/apply-form' state={{ job }} className='border border-gray-400 py-2 px-4 mr-3 rounded-sm '>Apply Now</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Jobdetails;