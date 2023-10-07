

const Banner = () => {
    return (
        <div className="carousel w-full h-[90vh]">
            <div id="slide1" className="carousel-item relative w-full hero">
                <img src="https://i.ibb.co/5YNYszm/Banner-1.jpg" className="w-full h-[90vh]" />
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md mx-auto">
                        <img src="https://i.ibb.co/0jS9cYz/nicelogo.png" className='w-24 md:w-40 mx-auto' alt="" />
                        <h1 className="mb-0 md:mb-5 text-xl md:text-3xl font-bold"> Wedding Planner</h1>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle btn-sm">❮</a>
                    <a href="#slide2" className="btn btn-circle btn-sm">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full hero">
                <img src="https://i.ibb.co/XjRY1tF/Birth-Fine.jpg" className="w-full h-[90vh]" />
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md mx-auto">
                    <img src="https://i.ibb.co/0jS9cYz/nicelogo.png" className='w-24 md:w-40 mx-auto' alt="" />
                        <h1 className="mb-0 md:mb-5 text-xl md:text-3xl font-bold"> Birthday Party Planner</h1>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle btn-sm">❮</a>
                    <a href="#slide3" className="btn btn-circle btn-sm">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full hero">
                <img src="https://i.ibb.co/3YSpGKS/Anniversary2.jpg" className="w-full h-[90vh]" />
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md mx-auto">
                    <img src="https://i.ibb.co/0jS9cYz/nicelogo.png" className='w-24 md:w-40 mx-auto' alt="" />
                        <h1 className="mb-0 md:mb-5 text-xl md:text-3xl font-bold">Anniversary Planner</h1>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle btn-sm">❮</a>
                    <a href="#slide4" className="btn btn-circle btn-sm">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full hero">
                <img src="https://i.ibb.co/rMz7QFy/Engagement1.jpg" className="w-full h-[90vh]" />
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md mx-auto">
                    <img src="https://i.ibb.co/0jS9cYz/nicelogo.png" className='w-24 md:w-40 mx-auto' alt="" />
                        <h1 className="mb-0 md:mb-5 text-xl md:text-3xl font-bold">Angagement Planner</h1>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle btn-sm">❮</a>
                    <a href="#slide1" className="btn btn-circle btn-sm">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
