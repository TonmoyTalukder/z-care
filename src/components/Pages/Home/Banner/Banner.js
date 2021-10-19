import React from 'react';
import img1 from "../../../../images/Banner/Banner/banner-1.jpg"
import img2 from "../../../../images/Banner/Banner/banner-2.jpg"
import img3 from "../../../../images/Banner/Banner/banner-3.jpeg"
import img4 from "../../../../images/Banner/Banner/banner-4.jpeg"

const Banner = () => {
    return (
        <div>
          <div id="carouselExampleCaptions" className="carousel slide h-75" data-bs-ride="carousel">
            <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block text-dark">
                <h2>Professionalism</h2>
                <p>We provide cares with maintaining professionalism.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block text-dark">
                <h2>Intensive Care</h2>
                <p>We take care of our patients intensivly </p>
              </div>
              </div>
              <div className="carousel-item">
                <img src={img3} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block text-dark">
                  <h2>24X7 Services</h2>
                  <p>We are open always to serve you.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={img4} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block text-dark">
                  <h2>Always Consultancy</h2>
                  <p>We always care patients with immediate consultancy.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
    );
};

export default Banner;