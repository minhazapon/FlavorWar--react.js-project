import { Link, NavLink } from "react-router-dom";
import logo from './img/l2.jpg'

const Nav = () => {

    const NV = <>
    
       <li className="transition duration-300 ease-in-out hover:scale-110 text-white font-mono"><NavLink to="/" >Home</NavLink></li>
       <li className="transition duration-300 ease-in-out hover:scale-110 text-white font-mono"><NavLink to="/lan" >LANDING</NavLink></li>
       <li className="transition duration-300 ease-in-out hover:scale-110 text-white font-mono"><NavLink to="/about" >ABOUT</NavLink></li>
       <li className="transition duration-300 ease-in-out hover:scale-110 text-white font-mono"><NavLink to="/gallery" >Gallery</NavLink></li>
       <li className="transition duration-300 ease-in-out hover:scale-110 text-white font-mono"><NavLink to="/team" >TEAM</NavLink></li>
       <li className="transition duration-300 ease-in-out hover:scale-110 text-white font-mono"><NavLink to="/contact" >CONTACT</NavLink></li>
    
    
    
    
    
    </>

    

    return (
        <div>
    
<div className="navbar bg-black  p-3">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 text-white w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {NV}
      </ul>
    </div>

    <div className=" flex items-center gap-2">
    <img className="  rounded-full h-[80px] w-[80px]  " src={logo} alt="" />
    <a className=" font-mono  text-[#e25822] text-4xl">Flavor<span className=" text-5xl text-yellow-500">War</span></a>

    </div>

   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {NV}
    </ul>
  </div>
  
  
  
  <div className="navbar-end">
  <Link to="/login">
    <a className="btn font-mono text-white bg-gradient-to-r from-[#e25822] to-yellow-500 ">In</a>
  </Link>
  </div>
</div>
            
        </div>
    );
};

export default Nav;