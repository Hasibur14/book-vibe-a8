import { NavLink } from "react-router-dom";


const Navbar = () => {

    const links = <>
        <li>
            <NavLink to='/' className={({ isActive }) => isActive ? 'text-green-400 font-bold border-2 border-green-400' : 'font-normal'}>Home</NavLink>
        </li>
        <li>
            <NavLink to='/listedbooks' className={({ isActive }) => isActive ? 'text-green-400 font-bold border-2 border-green-400' : 'font-normal'}>Listed Books</NavLink>
        </li>
        <li>
            <NavLink to='/readpage' className={({ isActive }) => isActive ? 'text-green-400 font-bold border-2 border-green-400' : 'font-normal'}>Pages to Read</NavLink>
        </li>
        <li>
            <NavLink to='/blog' className={({ isActive }) => isActive ? 'text-green-400 font-bold border-2 border-green-400' : 'font-normal'}>Blog</NavLink>
        </li>
        <li>
            <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-green-400 font-bold border-2 border-green-400' : 'font-normal'}>Contact</NavLink>
        </li>
    </>



    return (
        <div className="lg:px-24">
              <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl gap-0  font-bold">Book<span className="text-sky-400">Vibe</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold">
                    {
                        links
                    }
                </ul>             
            </div>
            <div className="navbar-end hidden lg:flex space-x-4">
                <button className="btn bg-green-500 text-white ">Sign In</button>
                <button className="btn bg-sky-400 text-white">Sign Up</button>

            </div>
        </div>

        </div>
    );
};

export default Navbar;