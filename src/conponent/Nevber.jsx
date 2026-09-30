import React from 'react';
import Link from 'next/link'

const Navbar = () => {
  const itemslist = <>
    <li><Link href="/book">Home</Link></li>
    <li><Link href="/listedBook">Listed books</Link></li>
    <li><Link href="/read-book">Page to Read</Link></li>
  
  </>
  return (
    <nav className="bg-base-100 shadow-sm">
       <div className="navbar container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {itemslist}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {itemslist}
    </ul>
  </div>
  <div className="navbar-end gap-5">
    <button className="btn btn-success">Sign in</button>
    <button className="btn btn-error">Sign up</button>
  </div>
</div>
    </nav>
  
  );
};

export default Navbar;