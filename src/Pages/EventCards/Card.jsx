import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({service}) => {
    const {image_url, title, price, description, service_id} = service;
    return (
        <div>
            <div className="card w-80 glass shadow-lg">
                <figure><img src={image_url} alt="image" className="h-52 w-full" /></figure>
                <div className="space-y-2 p-4">
                    <h2 className="font-bold text-lg">{title}</h2>
                    <p className="h-24">{description}</p>
                    <p className="pt-3 font-semibold">Price: {price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/services/${service_id}`}>
                        <button className="btn btn-primary btn-outline btn-sm normal-case">See details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
Card.propTypes = {
    service: PropTypes.object
}