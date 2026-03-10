import React, { useState } from 'react';
import line from '../../assets/line.png'
import { FiSearch, FiMapPin, FiChevronDown } from 'react-icons/fi';
import bg from '../../assets/bg.png'
import man from '../../assets/man.png'
import rectangle from '../../assets/Rectangle 2732.png'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../../Loading';
import { Link } from 'react-router';

const tagColorMap = {
    'Full-Time': 'bg-[#56CDAD1A] text-[#56CDAD] border border-[#26A4FF]',
    'Part-Time': 'bg-[#56CDAD1A] text-[#56CDAD] border border-[#26A4FF]',
    'Marketing': 'text-[#FFB836] border border-[#FFB836]',
    'Design': 'text-[#4640DE] border border-[#4640DE]',
};

const Banner = () => {

    const [inputValue, setInputValue] = useState('');
    const [search, setSearch] = useState('');

    const { data: jobs = [], isLoading } = useQuery({
        queryKey: ['jobs', search],
        queryFn: async () => {
            const res = await axios.get(`https://job-portal-server-mu-flax.vercel.app/jobs?search=${search}`);
            return res.data;
        }
    });

    const handleSearch = () => {
        setSearch(inputValue);
    };

    return (
        <section className='bg-[#f8f8fd]'>
            <div className='max-w-360 mx-auto px-4 md:px-31 flex items-center gap-2 pt-6 md:pt-20'>

                {/* left div */}
                <div className='md:w-1/2 w-full mb-25 md:mb-36'>

                    <h1 className='font-semibold text-5xl md:text-7xl title leading-[110%]'>
                        Discover <br /> more than <br />
                        <span className='text-[#26A4FF]'>5000+ Jobs</span>
                    </h1>

                    <img src={line} alt="line" className='mt-3' />

                    <p className='text-[18px] md:text-[20px] text-[#515B6F] my-5.75'>
                        Great platform for the job seeker that searching for new career heights and passionate about startups.
                    </p>

                    {/* searchbar */}
                    <div className='flex md:flex-row flex-col items-center bg-white p-4 rounded-sm w-[343px] md:w-[852px] relative z-50'>

                        {/* Job Title Input */}
                        <div className='flex w-full md:w-1/3 items-center gap-2 px-4 py-3 flex-1'>
                            <FiSearch className='text-[#25324B]' size={24} />
                            <input
                                type="text"
                                placeholder="Job title or keyword"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                className='outline-none border-b border-[#D6DDEB] mt-2.5 pb-2.5 text-[#575a5f] text-sm w-full bg-transparent placeholder:text-[#7C8493]'
                            />
                        </div>

                        {/* Divider */}
                        <div className='w-px h-8 bg-[#D6DDEB] hidden md:flex'></div>

                        {/* Location Input */}
                        <div className='flex w-full md:w-1/3 items-center gap-2 px-4 py-3 flex-1'>
                            <FiMapPin className='shrink-0' color='#25324B' size={24} />
                            <input
                                type="text"
                                placeholder="Florence, Italy"
                                className='md:border-b border-[#D6DDEB] mt-2.5 pb-2.5 outline-none text-[#515B6F] text-sm w-full bg-transparent placeholder:text-[#A8ADB7]'
                            />
                            <FiChevronDown className='text-[#A8ADB7] text-xl shrink-0' />
                        </div>

                        {/* Search Button */}
                        <button
                            onClick={handleSearch}
                            className='bg-[#4640DE] w-full md:w-1/3 text-white px-6.75 py-3.5 text-sm font-semibold hover:bg-[#3730c4] transition-colors whitespace-nowrap'
                        >
                            Search my job
                        </button>

                    </div>

                </div>

                {/* right side */}
                <div className='w-1/2 hidden md:block relative'>

                    
                    <div
                        style={{ backgroundImage: `url(${bg})` }}
                        className='bg-cover bg-center bg-no-repeat h-150 -mt-80 flex'
                    >
                        <img className='h-162 relative mt-30 ml-25' src={man} alt="" />
                        <img className='absolute top-[555px] left-[915px]' src={rectangle} alt="" />
                    </div>

                    {/* Search Results Overlay */}
                    {search && (
                        <div className='absolute top-0 w-full -ml-100 mt-80 max-h-[500px] overflow-y-auto pr-2'>
                            {isLoading ? (
                                <Loading />
                            ) : jobs.length === 0 ? (
                                <p className='text-[#515B6F] text-sm text-center py-10'>No jobs found.</p>
                            ) : (
                                <div className='grid grid-cols-1 gap-4'>
                                    {jobs.map((job) => (
                                        <div key={job._id} className='flex md:flex-row flex-col md:items-center gap-4 bg-gray-200 border border-[#D6DDEB] px-4 md:px-6 py-5 hover:shadow-md hover:border-[#4640DE] transition-all cursor-pointer group'>

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
                                                    {job.company}
                                                    <span className='mx-1 text-[#D6DDEB]'>•</span>
                                                    {job.location}
                                                </p>

                                                <div className='flex gap-2 flex-wrap mt-3'>
                                                    {job.tags?.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className={`text-xs font-medium px-3 py-1 rounded-full ${tagColorMap[tag.trim()]}`}
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className='mt-5'>
                                                    <Link
                                                        to={`/job-details/${job?._id}`}
                                                        className='border border-gray-400 py-2 px-4 mr-3 rounded-sm bg-blue-500 text-white'
                                                    >
                                                        Details
                                                    </Link>

                                                    <Link
                                                        to='/apply-form'
                                                        state={{ job }}
                                                        className='border border-gray-400 py-2 px-4 mr-3 rounded-sm'
                                                    >
                                                        Apply
                                                    </Link>
                                                </div>

                                            </div>

                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                </div>

            </div>
        </section>
    );
};

export default Banner;