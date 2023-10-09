import PropTypes from 'prop-types';

const Detail = ({detail}) => {
    const {image_url, title, description, price}= detail || {};
    return (
        <div className='grid md:grid-cols-3 gap-4 max-w-4xl mx-auto my-10'>
            <div className='border md:col-span-2'>
                <img src={image_url} alt="" />
                <p><span className='text-xl font-bold'>description:</span> {description}</p>
            </div>
            <div className='border space-y-2 p-4'>
                <p className='font-bold text-xl'>Service details</p>
                <hr />
                <p>Title: {title}</p>
                <p className=' text-gray-600 font-semibold'>Price: {price}</p>
                <div className='py-4'>
                    <p className='font-bold text-xl'>Contact Information</p>
                    <hr />
                    <div className='my-2'>
                    <p>Phone: 01827-392080</p>
                    <p>Email: rahaman2080@gmail.com</p>
                    <p>Address: Rangunia, Chittagong</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Detail;

Detail.propTypes = {
    detail:PropTypes.object
}