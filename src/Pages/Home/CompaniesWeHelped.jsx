import React from 'react';
import brand1 from '../../assets/vodafone-2017-logo.png'
import brand2 from '../../assets/intel-3.png'
import brand3 from '../../assets/tesla-9 1.png'
import brand4 from '../../assets/talkit 1.png'
import brand5 from '../../assets/amd-logo-1.png'

const CompaniesWeHelped = () => {
    return (
        
            <section className='max-w-360 mx-auto px-4 md:px-31 my-12'>
              <p className='text-lg mb-8 text-[#515B6F]'>Companies we helped grow</p>
              <div className='grid md:grid-cols-5 grid-cols-2 gap-10 md:gap-34.25'>
                <img src={brand1} alt="" />
                <img src={brand2} alt="" />
                <img src={brand3} alt="" />
                <img src={brand4} alt="" />
                <img src={brand5} alt="" />
              </div>
            </section>
        
    );
};

export default CompaniesWeHelped;