import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../../Detail/Detail';


const Details = () => {
    let {serviceId } = useParams();
    const [details,setdetails]=useState([]);
    const [info,setInfo]=useState([]);
    useEffect(()=>{

        fetch("/detailszcare.json")
        .then(res=>res.json())
        .then(data=>{
            setdetails(data);
            console.log(data)
        })

    },[]);

    useEffect(() => {
        const found = details.find(
          (detail) =>detail.id === serviceId
        );
        setInfo(found);
        console.log(found);
      }, [details]);

    return (
        <div>
         <h6>Service ID : {serviceId}</h6>
         <h4 className="text-primary mb-5">Title :{info?.title}</h4>
         <img src={info?.img} alt="" />
         <h3 className="text-danger mt-5" >Cost : {info?.charge}</h3>
         <p>Rating : {info?.rating}</p>
         <p> <span  className="text-info" >Details :</span>  {info?.description}</p>

        </div>
    );
};

export default Details;