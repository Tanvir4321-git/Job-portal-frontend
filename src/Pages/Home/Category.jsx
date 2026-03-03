import React from 'react';
import {
    FaPaintBrush,
    FaChartLine,
    FaBullhorn,
    FaWallet,
    FaDesktop,
    FaCode,
    FaBriefcase,
    FaUsers,
} from "react-icons/fa";

const categories = [
    { name: "Design", jobs: 235, icon: FaPaintBrush },
    { name: "Sales", jobs: 756, icon: FaChartLine },
    { name: "Marketing", jobs: 140, icon: FaBullhorn, active: true },
    { name: "Finance", jobs: 325, icon: FaWallet },
    { name: "Technology", jobs: 436, icon: FaDesktop },
    { name: "Engineering", jobs: 542, icon: FaCode },
    { name: "Business", jobs: 211, icon: FaBriefcase },
    { name: "Human Resource", jobs: 346, icon: FaUsers },
]
const Category = () => {
    return (
        <section className='max-w-360 mx-auto px-4 md:px-31 my-18'>

            {/* titile */}

            <div className='flex justify-between items-center'>

                <h1 className='font-semibold text-[32px] md:text-5xl title '>Explore by <span className='text-[#26A4FF]'>category</span> </h1>
                <div className='md:flex items-center hidden'>

                    <p className='text-[16px]  text-[#4640DE]'>Show all jobs</p>
                    <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.75 11.7261L4.75 11.7261" stroke="#4640DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.7002 5.70149L19.7502 11.7255L13.7002 17.7505" stroke="#4640DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </span>
                </div>
            </div>

            {/* desktop responsive */}

            <div className="md:grid grid-cols-4 gap-6 hidden ">



                {categories.map((category, index) => {
                    const Icon = category.icon;

                    return (
                        <div
                            key={index}
                            className={`group p-8 rounded-2xl border border-[#D6DDEB] mt-12 transition-all duration-300 cursor-pointer
                ${category.active
                                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl"
                                    : "bg-white hover:shadow-xl hover:-translate-y-2"
                                }`}
                        >
                            <div
                                className={`w-12 h-12 flex items-center justify-center rounded-xl mb-8 text-xl
                  ${category.active
                                        ? "bg-white/20"
                                        : "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white"
                                    } transition`}
                            >
                                <Icon />
                            </div>

                            <h3 className={`text-2xl font-semibold title mb-3 ${category.active ? "text-white" : "text-[#25324B] "
                                }`}>
                                {category.name}
                            </h3>

                            <p
                                className={`text-lg ${category.active ? "text-white" : "text-[#7C8493]"
                                    }`}
                            >
                                {category.jobs} Jobs Available →
                            </p>


                        </div>
                    );
                })}
            </div>

            {/* mobile responsive */}

            <div className="grid grid-cols-1 md:hidden gap-2">



                {categories.map((category, index) => {
                    const Icon = category.icon;

                    return (
                        <div
                            key={index}
                            className={`group p-4  rounded-2xl border border-[#D6DDEB] mt-12 transition-all duration-300 cursor-pointer  flex items-center gap-8
                 bg-white hover:shadow-xl hover:-translate-y-2
                `}
                        >
                            <div
                                className={`w-12 h-12 flex items-center justify-center rounded-xl  text-xl
                   bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white
                                     transition`}
                            >
                                <Icon />
                            </div>
                            <div>

                                <h3 className={`md:text-2xl text-[20px] font-semibold title`}>
                                    {category.name}
                                </h3>

                                <p
                                    className={`md:text-lg  text-[16px] text-[#7C8493]
                                        `}
                                >
                                    {category.jobs} Jobs Available →
                                </p>
                            </div>


                        </div>
                    );
                })}
            </div>


        </section>
    );
};

export default Category;