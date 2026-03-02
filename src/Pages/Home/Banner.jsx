import React from 'react';
import line from '../../assets/line.png'
import { FiSearch, FiMapPin, FiChevronDown } from 'react-icons/fi';
import bg from '../../assets/bg.png'
import man from '../../assets/man.png'
import rectangle from '../../assets/Rectangle 2732.png'
const Banner = () => {
    return (
        <div className='bg-[#f8f8fd] '>
            <div className='max-w-360 mx-auto px-31 flex items-center gap-2 pt-20'>
                {/* left div */}
                <div className='w-1/2 mb-36'>
                {/* title+img+subtitle */}
                    <h1 className='font-semibold text-7xl title leading-[110%]'>Discover <br /> more than <br /> <span className='text-[#26A4FF]'>5000+ Jobs</span> </h1>
                    <img src={line} alt="line" className='mt-3' />
                    <p className='text-[20px] text-[#515B6F] my-5.75'>Great platform for the job seeker that searching for new career heights and passionate about startups.</p>
                {/* searchbar */}
                <div className='flex items-center bg-white p-4 rounded-sm'>

                    {/* Job Title Input */}
                    <div className='flex items-center gap-2 px-4 py-3 flex-1'>
                        <FiSearch className='text-[#25324B] ' size={24} />
                        <input
                            type="text"
                            placeholder="Job title or keyword"
                            className='outline-none border-b border-[#D6DDEB] mt-2.5 pb-2.5  text-[#575a5f] text-sm w-full bg-transparent placeholder:text-[#7C8493] '
                        />
                    </div>

                    {/* Divider */}
                    <div className='w-px h-8 bg-[#D6DDEB]'></div>

                    {/* Location Input */}
                    <div className='flex items-center gap-2 px-4 py-3 flex-1'>
                        <FiMapPin className=' shrink-0'color='#25324B' size={24} />
                        <input
                            type="text"
                            placeholder="Florence, Italy"
                            className='border-b border-[#D6DDEB] mt-2.5 pb-2.5 outline-none text-[#515B6F] text-sm w-full bg-transparent placeholder:text-[#A8ADB7]'
                        />
                        <FiChevronDown className='text-[#A8ADB7] text-xl shrink-0' />
                    </div>

                    {/* Search Button */}
                    <button className='bg-[#4640DE]  text-white px-6.75 py-3.5 text-sm font-semibold hover:bg-[#3730c4] transition-colors whitespace-nowrap'>
                        Search my job
                    </button>
                    

                </div>
                
                </div>
                {/* right side */}
            <div style={{ backgroundImage: `url(${bg})` }} className='w-1/2 bg-cover bg-center bg-no-repeat h-150 -mt-80 '>

              
                <img className='h-162 relative mt-30 ml-20 ' src={man} alt="" />
                  <img className=' absolute top-[555px] left-[915px]' src={rectangle} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;