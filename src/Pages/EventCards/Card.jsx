import PropTypes from "prop-types";

const Card = ({service}) => {
    const {image_url, title, price, description} = service;
    return (
        <div>
            <div className="card w-80 glass shadow-lg flex-col">
                <figure><img src={image_url} alt="image" className="h-52 w-full" /></figure>
                <div className="card-body flex-grow">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p className="pt-3 font-semibold">Price: {price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary btn-sm normal-case">See details</button>
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