import React from 'react';
import "./Branch.css"
const Branch = () => {
    return (
        <div>
            <h1 className="text-secondary mb-5 mt-5 "  id="branch" >Branches</h1>
            <div>
            <div class="container mb-5 branch p-5">
                <div class="row gy-5 ">
                    <div class="col-lg-4 col-12 align-self-center ">
                        <h3>Dhanmandi</h3>
                        <p>Dhaka, Bangladesh</p>
                        <p><i>Contact: +8801862555331</i></p>
                    </div>
                    <div class="col-lg-4 col-12 align-self-center">
                        <h3>Basundhara</h3>
                        <p>Dhaka, Bangladesh</p>
                        <p><i>Contact: +8801862555331</i></p>
                    </div>
                    <div class="col-lg-4 col-12 align-self-center">
                        <h3>CU Campus</h3>
                        <p>Chittagong, Bangladesh</p>
                        <p><i>Contact: +8801862555331</i></p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Branch;