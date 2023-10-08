import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Detail from "./Detail";

const ServiceDetails = () => {
const [serviceDetail, setServiceDetail] = useState({})

const { id } = useParams();
const details = useLoaderData();

useEffect(()=>{
    const findDetails = details?.find( detail => detail.service_id == id);
    setServiceDetail(findDetails)
},[id, details])

    return (
        <div>
            <Navbar></Navbar>
            <div className="py-12 bg-[#F5F5F6]">
                <h1 className="text-4xl font-bold text-center">Service Details of id: {id}</h1>
                <Detail detail={serviceDetail}></Detail>
            </div>
        </div>
    );
};

export default ServiceDetails;