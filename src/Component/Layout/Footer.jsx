import React from 'react';
import logo from '../../assets/Logo.png';
import { FaFacebookF, FaInstagram, FaDribbble, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-[#202430]'>
            <div className='max-w-360 mx-auto px-4 md:px-31 py-16'>

                {/* Top Section */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10'>

                    {/* Logo + Description */}
                    <div>
                        <div className='flex items-center gap-1 mb-8'>
                            <img src={logo} alt="logo" className='w-8 h-8' />
                            <h2 className='text-white title font-bold text-2xl'>QuickHire</h2>
                        </div>
                        <p className='text-[#D6DDEB] text-sm leading-relaxed'>
                            Great platform for the job seeker that passionate about startups. Find your dream job easier.
                        </p>
                    </div>
<div className='flex gap-23'>

                    {/* About */}
                    <div>
                        <h4 className='text-white title font-semibold mb-4'>About</h4>
                        <ul className='space-y-3'>
                            {['Companies', 'Pricing', 'Terms', 'Advice', 'Privacy Policy'].map((item) => (
                                <li key={item}>
                                    <a href="#" className='text-[#D6DDEB] text-sm hover:text-white transition-colors'>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className='text-white title font-semibold mb-4'>Resources</h4>
                        <ul className='space-y-3'>
                            {['Help Docs', 'Guide', 'Updates', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <a href="#" className='text-[#D6DDEB] text-sm hover:text-white transition-colors'>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
</div>

                    {/* Newsletter */}
                    <div>
                        <h4 className='text-white title font-semibold mb-2'>Get job notifications</h4>
                        <p className='text-[#D6DDEB] text-sm mb-4'>The latest job news, articles, sent to your inbox weekly.</p>
                        <div className='flex '>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className='flex-1 px-4 py-2.5 text-sm bg-white text-[#25324B] mr-2 outline-none placeholder:text-[#A8ADB7]'
                            />
                            <button className='bg-[#4640DE] text-white px-4 py-2.5 text-sm font-semibold hover:bg-[#3730c4] transition-colors whitespace-nowrap'>
                                Subscribe
                            </button>
                        </div>
                    </div>

                </div>

                {/* Divider */}
                <div className='border-t border-[#ffffff1a] mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4'>
                    <p className='text-[#D6DDEB] text-sm'>2021 @ QuickHire. All rights reserved.</p>

                    {/* Social Icons */}
                    <div className='flex items-center gap-4'>
                        {[FaFacebookF, FaInstagram, FaDribbble, FaLinkedinIn, FaTwitter].map((Icon, i) => (
                            <a key={i} href="#" className='text-[#D6DDEB] hover:text-white transition-colors'>
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;