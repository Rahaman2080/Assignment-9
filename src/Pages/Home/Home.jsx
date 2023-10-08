import EventCards from "../EventCards/EventCards";
import Banner from "../Shared/Banner/Banner";
import Navbar from "../Shared/Navbar/Navbar";
import card_bg from "../../assets/cardbg2.jpg"
import Gallery from "../EventCards/Gallery/Gallery";
import Feedback from "../EventCards/Feedback/Feedback";


const Home = () => {
    const divStyle = {
        backgroundImage: `url(${card_bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
    };

    return (
        <div>
            <div className=" relative">
                <Banner></Banner>
            </div>
            <div className="fixed top-0 z-10  w-full">
                <Navbar></Navbar>
            </div>
            <div style={divStyle}>
                <div className="text-center pt-5" style={{ fontFamily: "Time New Romans" }}>
                    <h1 className="text-3xl font-semibold">It's simple. You have an event to plan and <br />
                        We have <span className="text-orange-600 font-bold">the solutions</span></h1>
                    <p>Here is how we can help you</p>
                    <h2 className=" mt-4 text-purple-700 text-3xl font-bold">Our Services</h2>
                </div>
                <div className="max-w-5xl mx-auto py-10">
                    <EventCards></EventCards>
                </div>
            </div>
            <div className="bg-[#CBBFF9]">
                <div style={{ fontFamily: "Time New Romans" }} className="text-center">
                    <h1 className="text-purple-600 text-5xl font-bold" >Gallery</h1>
                    <p>Oure Recent Projects</p>
                </div>
                <div className="max-w-5xl mx-auto py-10">
                    <Gallery></Gallery>
                </div>
            </div>
            <div className="bg-[#F5F5F6]">
                <div style={{ fontFamily: "Time New Romans" }} className="text-center">
                    <h1 className="text-purple-600 text-5xl font-bold" >Testimonial</h1>
                    <p>Happy clients Feedback about us</p>
                </div>
                <div className="max-w-5xl mx-auto py-10">
                    <Feedback></Feedback>
                </div>
            </div>
        </div>
    );
};

export default Home;