import Navbar from "../../Pages/Shared/Navbar/Navbar";


const About = () => {
    return (
        <div className="bg-[#DDDBFE]">
            <Navbar></Navbar>
            <div style={{ fontFamily: "Time new Romans" }} className="max-w-5xl mx-auto text-center py-10">
                <h1 className="text-4xl font-bold">Hello! We are an Event Planning Agency</h1>
                <p className="py-8 text-purple-700 font-semibold text-xl">As the premier event planning company in Chittagong, we know that it’s not “one size fits all”. Each event and client is unique and we believe our services should be as well. We know that it should be “Can I hire a planner?” not “Can I afford one?”.</p>
                <div>
                    <h1 className="text-4xl font-bold text-center">Our Staff</h1>
                </div>
                <div className="carousel w-full my-8">
                <div id="item1" className="carousel-item w-full">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                        <div className="flex flex-col items-center justify-center text-center rounded-2xl w-60 bg-base-100 shadow-xl">
                            <div className="p-4">
                                <p>Perfect decoration and perfect buffet for my littile sister birthday party</p>
                            </div>
                            <figure className="avater"><img className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" src="https://i.ibb.co/5Gvs1LQ/Rahman.jpg" alt="image" /></figure>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center rounded-2xl w-60 bg-base-100 shadow-xl">
                            <div className="p-4">
                                <p>Perfect decoration and perfect buffet for my littile sister birthday party</p>
                            </div>
                            <figure className="avater"><img className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" src="https://i.ibb.co/5Gvs1LQ/Rahman.jpg" alt="image" /></figure>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center rounded-2xl w-60 bg-base-100 shadow-xl">
                            <div className="p-4">
                                <p>Perfect decoration and perfect buffet for my littile sister birthday party</p>
                            </div>
                            <figure className="avater"><img className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" src="https://i.ibb.co/5Gvs1LQ/Rahman.jpg" alt="image" /></figure>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center rounded-2xl w-60 bg-base-100 shadow-xl">
                            <div className="p-4">
                                <p>Perfect decoration and perfect buffet for my littile sister birthday party</p>
                            </div>
                            <figure className="avater"><img className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" src="https://i.ibb.co/5Gvs1LQ/Rahman.jpg" alt="image" /></figure>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                        <div className="flex flex-col items-center justify-center text-center rounded-2xl w-60 bg-base-100 shadow-xl">
                            <div className="p-4">
                                <p>Perfect decoration and perfect buffet for my littile sister birthday party</p>
                            </div>
                            <figure className="avater"><img className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" src="https://i.ibb.co/5Gvs1LQ/Rahman.jpg" alt="image" /></figure>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center rounded-2xl w-60 bg-base-100 shadow-xl">
                            <div className="p-4">
                                <p>Perfect decoration and perfect buffet for my littile sister birthday party</p>
                            </div>
                            <figure className="avater"><img className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" src="https://i.ibb.co/5Gvs1LQ/Rahman.jpg" alt="image" /></figure>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center rounded-2xl w-60 bg-base-100 shadow-xl">
                            <div className="p-4">
                                <p>Perfect decoration and perfect buffet for my littile sister birthday party</p>
                            </div>
                            <figure className="avater"><img className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" src="https://i.ibb.co/5Gvs1LQ/Rahman.jpg" alt="image" /></figure>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center rounded-2xl w-60 bg-base-100 shadow-xl">
                            <div className="p-4">
                                <p>Perfect decoration and perfect buffet for my littile sister birthday party</p>
                            </div>
                            <figure className="avater"><img className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" src="https://i.ibb.co/5Gvs1LQ/Rahman.jpg" alt="image" /></figure>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
            </div>
            </div>

        </div>
    );
};

export default About;