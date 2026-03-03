import React from 'react';
import Banner from './Banner';
import CompaniesWeHelped from './CompaniesWeHelped';
import Category from './Category';
import StartJobPosting from './StartJobPosting';
import FeaturedJobs from './FeaturedJobs';
import LatestJobs from './LatestJobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CompaniesWeHelped></CompaniesWeHelped>
            <Category></Category>
            <StartJobPosting></StartJobPosting>
            <FeaturedJobs></FeaturedJobs>
            <LatestJobs></LatestJobs>
        </div>
    );
};

export default Home;