import React from 'react';
import line from '../../assets/line.png'
const Banner = () => {
    return (
        <div className='bg-[#f8f8fd]'>
            <div className='max-w-360 mx-auto px-31 flex items-center gap-2'>
                <div className='w-1/2'>
                    <h1 className='font-semibold text-7xl title leading-[110%]'>Discover <br /> more than <br /> <span className='text-[#26A4FF]'>5000+ Jobs</span> </h1>
                    <img src={line} alt="line" className='mt-3' />
                    <p className='text-[20px] text-[#515B6F] my-5.75'>Great platform for the job seeker that searching for new career heights and passionate about startups.</p>
                </div>
                <div className='w-1/2'></div>
            </div>
        </div>
    );
};

export default Banner;