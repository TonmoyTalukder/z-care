import React, { useEffect, useState } from 'react';
import Service from '../../Service/Service';
import "./Services.css"

const Services = () => {
    const [manus,setManus]=useState([]);
    useEffect(()=>{

        fetch("./zcare.json")
        .then(res=>res.json())
        .then(data=>{
            setManus(data);
        })

    },[]);
    return (
        <div className="container-fluid mb-5 mt-5"  id="services" >
            <h1 className="text-secondary mb-5 mt-5">Our Services</h1>
            <div className="services " >
            {
                manus.map(manu=>
                    <Service 
                    key={manu.id}
                    manu={manu}                    
                    >    
                    </Service>
                    )
            }
            </div>
            
        </div>
    );
};

export default Services;