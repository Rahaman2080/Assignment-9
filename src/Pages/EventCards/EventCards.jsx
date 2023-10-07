import { useEffect, useState } from 'react';
import Card from './Card';

const EventCards = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
 
    return (
        <div className='pb-12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-14 md:mx-auto'>
            {
                services.map(service => <Card key={service.service_id} service={service}></Card>)
            }
        </div>
    );
};

export default EventCards;