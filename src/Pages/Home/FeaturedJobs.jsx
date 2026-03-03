import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import company1 from '../../assets/company6.png'
import company2 from '../../assets/Company 5.png'
import company3 from '../../assets/company4.png'
import company4 from '../../assets/company3.png'
import company5 from '../../assets/Company 7.png'
import company6 from '../../assets/Company 2.png'
import company7 from '../../assets/Company 8.png'
import company8 from '../../assets/company1.png'

const jobs = [
    { id: 1, title: 'Email Marketing',image:company1, company: 'Revolut', location: 'Madrid, Spain', type: 'Full Time', description: 'Revolut is looking for Email Marketing to help team ma...', tags: ['Marketing', 'Design'] },
    { id: 2, title: 'Brand Designer',image:company2, company: 'Dropbox', location: 'San Fransisco, US', type: 'Full Time', description: 'Dropbox is looking for Brand Designer to help the team t...', tags: ['Design', 'Business'] },
    { id: 3, title: 'Email Marketing',image:company3, company: 'Pitch', location: 'Berlin, Germany', type: 'Full Time', description: 'Pitch is looking for Customer Manager to join marketing t...', tags: ['Marketing'] },
    { id: 4, title: 'Visual Designer',image:company4, company: 'Blinklist', location: 'Granada, Spain', type: 'Full Time', description: 'Blinklist is looking for Visual Designer to help team desi...', tags: ['Design'] },
    { id: 5, title: 'Product Designer',image:company5, company: 'ClassPass', location: 'Manchester, UK', type: 'Full Time', description: 'ClassPass is looking for Product Designer to help us...', tags: ['Marketing', 'Design'] },
    { id: 6, title: 'Lead Designer',image:company6, company: 'Canva', location: 'Ontario, Canada', type: 'Full Time', description: 'Canva is looking for Lead Engineer to help develop n...', tags: ['Design', 'Business'] },
    { id: 7, title: 'Brand Strategist',image:company7, company: 'GoDaddy', location: 'Marseille, France', type: 'Full Time', description: 'GoDaddy is looking for Brand Strategist to join the team...', tags: ['Marketing'] },
    { id: 8, title: 'Data Analyst',image:company8, company: 'Twitter', location: 'San Diego, US', type: 'Full Time', description: 'Twitter is looking for Data Analyst to help team desi...', tags: ['Technology'] },
];

const tagColorMap = {
    Marketing: 'bg-[#EB85331A] text-[#FFB836]',
    Design: 'bg-[#4640DE1A] text-[#4640DE]',
    Business: 'bg-[#E8F9F0] text-[#27AE60]',
    Technology: 'bg-[#FF65501A] text-[#FF6550]',
};


const FeaturedJobs = () => {
    return (
        <section className='bg-white py-16'>
            <div className='max-w-360 mx-auto px-4 md:px-31'>
                {/* Header */}
                <div className='flex items-center justify-between mb-10'>
                    <h1 className='font-semibold text-[32px] md:text-5xl title '> Featured <span className='text-[#26A4FF]'> jobs</span> </h1>
                    
                    <button className='md:flex hidden items-center gap-2 text-[#4640DE] font-semibold hover:gap-3 transition-all'>
                        Show all jobs <FiArrowRight />
                    </button>
                </div>

                {/* Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {jobs.map((job,i) => (
                          <div key={i} className='border border-[#D6DDEB] bg-white p-6 rounded-sm hover:shadow-md transition-shadow cursor-pointer group'>
        {/* Logo + Badge */}
        <div className='flex items-start justify-between mb-3'>
            <img src={job.image} alt={job.company} className='w-12 h-12 rounded object-contain  p-1' />
            <span className='border border-[#4640DE] text-[#4640DE] text-xs font-medium px-3 py-1 '>
                {job.type}
            </span>
        </div>

        {/* Title */}
        <h3 className='text-[#25324B] title font-semibold text-lg mb-1 group-hover:text-[#4640DE] transition-colors'>
            {job.title}
        </h3>

        {/* Company + Location */}
        <p className='text-[#515B6F] text-sm mb-3'>
            {job.company} <span className='text-[#D6DDEB]'>•</span> {job.location}
        </p>

        {/* Description */}
        <p className='text-[#7C8493] text-sm mb-4 leading-relaxed'>{job.description}</p>

        {/* Tags */}
        <div className='flex gap-2 flex-wrap'>
            {job.tags.map((tag) => (
                <span key={tag} className={`text-xs font-medium px-3 py-1 rounded-full ${tagColorMap[tag]}`}>
                    {tag}
                </span>
            ))}
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

export default FeaturedJobs;