import React, { useState } from 'react'
import { Navbar, NavbarCollapse, NavbarBrand, NavbarLink, NavbarToggle } from "flowbite-react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Dropdown, DropdownItem } from "flowbite-react";

function Header() {

  

  const userToken = sessionStorage.getItem("userToken")



  return (
    
    <>

<header className='bg-amber-300'>
    <Navbar fluid rounded className='py-3'>
      <div>
        <Link to={'/'}>
   <img src="https://static.vecteezy.com/system/resources/previews/015/030/887/original/library-book-stack-icon-flat-isolated-vector.jpg" width={50}  className="mr-3 h-6 sm:h-9 rounded-4xl" alt="Flowbite React Logo" />
        </Link>
      </div>

      <div className='ms-18'>
        <h3 className='ms-15 text-center font-bold text-white '>
        BOOK STORE
      </h3>
      </div>
      
      <NavbarCollapse className='mx-2'>
        <div className='flex  items-center justify-evenly gap-4'>
          <NavbarLink href="#"> <FaInstagram/> </NavbarLink>
        <NavbarLink href="#"> <FaXTwitter/> </NavbarLink>
        <NavbarLink href="#"> <FaFacebookSquare/> </NavbarLink>

        {
          userToken? (
          <div className='mx-2'>
             <Dropdown label="profile" inline dismissOnClick={false} renderTrigger={() => <span>
             <img src="https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg" className='rounded-3xl' width={25} alt="" />
                 </span>}>
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
      <DropdownItem>Sign out</DropdownItem>
    </Dropdown>
          </div>
          ) :  (
               <div>
        <Link to={'/login'} >
        <button className='border border-black-300 py-1 flex text-white opacity-50  bg-black  items-center gap-2 rounded-xl px-4 hover:rounded-4xl'>
        <FaRegUserCircle/>  Login
        </button>
        </Link>
      </div>
          )
       }
    
        </div>
      </NavbarCollapse>
    </Navbar>
</header>


                  <nav className='bg-black text-white flex justify-center items-center h-15'>
      <div>
          <ul className='list-none flex justify-center items-center gap-4 '>
           <Link to={'/'}>
            <li className='hover:border-t'>Home</li >
            </Link>


            <Link to={'/books'}>
            <li className='hover:border-t'>Books</li >
            </Link>


            <Link to={'/contact'}>
            <li className='hover:border-t'>Contact</li >
            </Link>
          </ul>
      </div>
    </nav>


    </>
  )
}

export default Header