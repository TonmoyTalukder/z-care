import React from 'react';
import img1 from "../../../../images/reviewers/img-1.jfif"
import img2 from "../../../../images/reviewers/Img-2.jpg"
import img3 from "../../../../images/reviewers/Img-3.jpg"

const Review = () => {
    return (
        <div id="review">
            <div className="container-fluid mt-5 mb-5 p-5">
        <div className=" mx-auto mb-5">
        <h1 className="text-secondary mb-5 mt-5" >Reviews</h1>
        <div className="row ">
        <div class="col-lg-4 col-12">
        <img src={img1} class="bd-placeholder-img rounded-circle" width="140" height="140" alt="" />
        <br />
        <h2>Sam Smith</h2>
        <p>"Dr. Castañeda is a confident, caring, informative provider that I have complete faith and trust in. My care has been top-notch, and I recommend her any chance I can".</p>
      </div>
        <div class="col-lg-4 col-12">
        <img src={img2} class="bd-placeholder-img rounded-circle" width="140" height="140" alt="" />
        <br />
        <h2>Jayden william</h2>
        <p>"I had double knee replacements and am thoroughly happy with Dr. Kwak"</p>
      </div>
        <div class="col-lg-4 col-12">
        <img src={img3} class="bd-placeholder-img rounded-circle" width="140" height="140" alt="" />
        <br />
        <h2>Monique Witting</h2>
        <p>“Dr. Merriman is very nice and explained everything to me.”</p>
      </div>
        </div>
       
        </div>
        
      </div>
        </div>
    );
};

export default Review;