import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Review from '../Review/Review';
import Branch from '../Branch/Branch';
import icon from "../../../../images/logo.png"
import './Home.css';

const Home = () => {
    return (
        <div id="home" className="bg-light">
            <Banner></Banner>
            <div className="m-3 z-care">
                <h2>Welcome To</h2>
                <img alt="" src={icon} width="150" height="150" className="d-inline-block align-top"/>
                <h1>Z&#160;&#160;&#160;&#160;&#160;C&#160;&#160;A&#160;&#160;R&#160;&#160;E</h1>
            </div>
            <Services></Services>
            <Review></Review>
            <Branch></Branch>
        </div>
    );
};

export default Home;