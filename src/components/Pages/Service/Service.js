import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css"

const Service = ({manu}) => {
    const {id,title,img,description}=manu;
    return (
        <div className="service">
         <div className="card h-100">
      <img src={img} className="card-img-top img-fluid h-80" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer">
        <Link to={`/details/${id}`}>
            <button className="btn btn-secondary" >More about {title.toLowerCase()}</button>
        </Link>
      </div>
    </div>

        </div>
    
    );
};

export default Service;