import React from 'react';
import dashboardImg from '../../assets/dashboard.png';

const StartJobPosting = () => {
    return (
        <div className='max-w-360 px-4 md:px-31  mx-auto  my-18'>
            <div className=' bg-[rgb(70,64,222)] rounded-2xl  flex md:flex-row flex-col items-center justify-between'>

                {/* Left Side */}
                <div className='md:py-23 py-10 px-4 md:px-17 w-full md:w-1/2'>
                    <h2 className='text-white title font-semibold text-[32px] md:text-5xl leading-[110%] mb-6 text-center md:text-left'>
                        Start posting  jobs today
                    </h2>
                    <p className='font-medium  text-center md:text-left text-base mb-6 text-white'>
                        Start posting jobs for only $10.
                    </p>
                    <button className='md:w-[179px] w-full rounded-lg  border-2 border-white text-[#4640DE] bg-white   py-3 font-semibold hover:bg-[#4640DE] hover:text-white transition-colors'>
                        Sign Up For Free
                    </button>
                </div>

                {/* Right Side - Dashboard Image */}
                <div className='w-full md:w-1/2 flex items-end justify-end'>
                    <img
                        src={dashboardImg}
                        alt="dashboard"
                        className='md:w-[564px] h-[346px]  px-4 md:pr-16 object-contain translate-y-4'
                    />
                </div>

            </div>
        </div>
    );
};

export default StartJobPosting;