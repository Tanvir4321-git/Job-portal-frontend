import React from 'react';
import Banner from './Banner';
import CompaniesWeHelped from './CompaniesWeHelped';
import Category from './Category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CompaniesWeHelped></CompaniesWeHelped>
            <Category></Category>
        </div>
    );
};

export default Home;