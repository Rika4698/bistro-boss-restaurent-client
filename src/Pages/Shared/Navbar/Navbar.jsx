import {  NavLink } from "react-router-dom";


const Navbar = () => {
  const navOptions=<>
  <li><NavLink to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ?  "text-[#EEFF25] font-bold text-base uppercase" : "font-semibold text-white text-base uppercase"
                }>Home</NavLink></li>
  <li><NavLink to='/menu' className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-[#EEFF25] font-bold text-base uppercase" : "font-semibold text-white text-base uppercase"
                }>Our Menu</NavLink></li>
  <li><NavLink to='/order' className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-[#EEFF25] font-bold text-base uppercase" : "font-semibold text-white text-base uppercase"
                }>Our Shop</NavLink></li>
  </>
    return (
        <>
        <div className="navbar fixed z-10 bg-black bg-opacity-30 max-w-screen-xl text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navOptions}
      </ul>
    </div>
    <div>
        <h1 className="font-cinzel">BISTRO BOSS</h1>
        <h3>Restaurant</h3>
    </div>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="flex gap-8 ">
     {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
            
        </>

    );
};

export default Navbar;