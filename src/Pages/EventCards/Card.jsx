import PropTypes from "prop-types";

const Card = ({service}) => {
    const {image_url, title, price, description} = service;
    return (
        <div>
            <div className="card w-80 glass shadow-lg">
                <figure><img src={image_url} alt="image" className="h-52 w-full" /></figure>
                <div className="space-y-2 p-4">
                    <h2 className="font-bold text-lg">{title}</h2>
                    <p className="h-24">{description}</p>
                    <p className="pt-3 font-semibold">Price: {price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary btn-outline btn-sm normal-case">See details</button>
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