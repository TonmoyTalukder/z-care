import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Review from '../Review/Review';
import Branch from '../Branch/Branch';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Review></Review>
            <Branch></Branch>
        </div>
    );
};

export default Home;