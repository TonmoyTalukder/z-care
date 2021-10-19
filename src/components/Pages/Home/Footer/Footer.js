import React from 'react';
import icon from "../../../../images/logo.png";

const Footer = () => {
    return (
        <div className="bg-dark text-light font-monospace m-0 p-5">
            <div>
                <h2>
                    <img alt="" src={icon} width="80" height="80" className="d-inline-block align-top"/>
                </h2>
                <h2>Z-CARE</h2> <br />
                <h6> | &#169; 2021, All copyrights reserved by Z Care | </h6>
            </div>
        </div>
    );
};

export default Footer;