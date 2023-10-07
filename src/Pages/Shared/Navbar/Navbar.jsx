import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
        <li><NavLink to="/" className="font-bold text-xl text-white">Home</NavLink></li>
        <li><NavLink to="/about" className="font-bold text-xl text-white">About</NavLink></li>
        <li><NavLink to="/login" className="font-bold text-xl text-white">Login</NavLink></li>
        <li><NavLink to="/register" className="font-bold text-xl text-white">Register</NavLink></li>
    </>

    return (
        <div className="navbar bg-purple-700 bg-opacity-30 ">
            <div className="navbar-start">
                <div>
                    <img src="https://i.ibb.co/0jS9cYz/nicelogo.png" className="w-20 md:w-28 h-10" alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" flex gap-5 px-1 menu-horizontal">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-ghost normal-case text-xl md:text-2xl font-bold text-white">Login</a>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-circle btn-sm lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul tabIndex="0" className=" menu-sm dropdown-content  shadow bg-purple-700 mt-2 bg-opacity-50 rounded-lg w-36 -ms-28 me-4">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;