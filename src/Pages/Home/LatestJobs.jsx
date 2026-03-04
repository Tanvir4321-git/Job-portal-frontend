import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import logo3 from '../../assets/logo3.png'
import logo4 from '../../assets/logo4.png'
import logo5 from '../../assets/logo5.png'
import logo6 from '../../assets/logo6.png'
import logo7 from '../../assets/logo7.png'
import logo8 from '../../assets/logo8.png'


const jobs = [
    { id: 1, logo: logo1, title: 'Social Media Assistant', company: 'Nomad', location: 'Paris, France', tags: ['Full-Time', 'Marketing', 'Design'] },
    { id: 2, logo: logo2, title: 'Social Media Assistant', company: 'Netlify', location: 'Paris, France', tags: ['Full-Time', 'Marketing', 'Design'] },
    { id: 3, logo: logo3, title: 'Brand Designer', company: 'Dropbox', location: 'San Fransisco, USA', tags: ['Full-Time', 'Marketing', 'Design'] },
    { id: 4, logo: logo4, title: 'Brand Designer', company: 'Maze', location: 'San Fransisco, USA', tags: ['Full-Time', 'Marketing', 'Design'] },
    { id: 5, logo: logo5, title: 'Interactive Developer', company: 'Terraform', location: 'Hamburg, Germany', tags: ['Full-Time', 'Marketing', 'Design'] },
    { id: 6, logo: logo6, title: 'Interactive Developer', company: 'Udacity', location: 'Hamburg, Germany', tags: ['Full-Time', 'Marketing', 'Design'] },
    { id: 7, logo: logo7, title: 'HR Manager', company: 'Packer', location: 'Lucern, Switzerland', tags: ['Full-Time', 'Marketing', 'Design'] },
    { id: 8, logo: logo8, title: 'HR Manager', company: 'Webflow', location: 'Lucern, Switzerland', tags: ['Full-Time', 'Marketing', 'Design'] },
];

const tagColorMap = {
    'Full-Time': 'bg-[#56CDAD1A] text-[#56CDAD] border border-[#26A4FF]',
    'Marketing': ' text-[#FFB836] border border-[#FFB836]',
    'Design': 'text-[#4640DE] border border-[#4640DE]',
};

const LatestJobs = () => {
    return (
        <section className='bg-[#F8F8FD] py-16'>
            <div className='max-w-360 mx-auto px-4 md:px-31'>

               
                  {/* Header */}
                                <div className='flex items-center justify-between mb-10'>
                                    <h1 className='font-semibold text-[32px] md:text-5xl title '> Latest <span className='text-[#26A4FF]'> jobs open</span> </h1>
                                    
                                    <button className='md:flex hidden items-center gap-2 text-[#4640DE] font-semibold hover:gap-3 transition-all'>
                                        Show all jobs <FiArrowRight />
                                    </button>
                                </div>
         

                {/* Grid */}
                <div  className='grid grid-cols-1 md:grid-cols-2 gap-4  '>
                    {jobs.map((job) => (
                        <div  key={job.id} className='flex md:flex-row flex-col  md:items-center gap-4 bg-white border border-[#D6DDEB] px-4 md:px-6 py-5 hover:shadow-md hover:border-[#4640DE] transition-all cursor-pointer group'>
                            
                            {/* Logo */}
                            <img src={job.logo} alt={job.company} className='w-12 h-12 rounded object-contain border border-[#D6DDEB] p-1 shrink-0' />

                            {/* Info */}
                            <div className=''>
                                <h3  className='text-[#25324B] title font-semibold text-base group-hover:text-[#4640DE] transition-colors'>
                                    {job.title}
                                </h3>
                                <p className='text-[#515B6F] text-sm mt-0.5'>
                                    {job.company} <span className='mx-1 text-[#D6DDEB]'>•</span> {job.location}
                                </p>
                                <div className='flex gap-2 flex-wrap mt-3'>
                                    {job.tags.map((tag) => (
                                        <span key={tag} className={`text-xs font-medium px-3 py-1 rounded-full ${tagColorMap[tag]}`}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
   <button className='mt-3  flex md:hidden items-center gap-2 text-[#4640DE] font-semibold hover:gap-3 transition-all'>
                        Show all jobs <FiArrowRight />
                    </button>
            </div>
        </section>
    );
};

export default LatestJobs;