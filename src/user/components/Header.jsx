import React from 'react'
import {
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
} from "flowbite-react";
import { FaInstagram, FaFacebookSquare, FaRegUserCircle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { HiViewGrid, HiCog, HiCurrencyDollar, HiLogout } from "react-icons/hi";
import  { useEffect, useRef, useState } from 'react'




function Header() {
  const navigate = useNavigate()

  const userToken = sessionStorage.getItem("userToken")
  let userData = null
  try {
    userData = JSON.parse(sessionStorage.getItem("userData"))
  } catch {
    userData = null
  }

  const [menuOpen, setMenuOpen] = useState(false)
const menuRef = useRef(null)

useEffect(() => {
  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false)
  }
  const handleEsc = (e) => {
    if (e.key === 'Escape') setMenuOpen(false)
  }
  document.addEventListener('mousedown', handleClickOutside)
  document.addEventListener('keydown', handleEsc)
  return () => {
    document.removeEventListener('mousedown', handleClickOutside)
    document.removeEventListener('keydown', handleEsc)
  }
}, [])

  const handleLogOut = () => {
    sessionStorage.clear()
    navigate("/login", { replace: true })
  }

  const profilePath = `/profile/${userData?._id ?? userData?.id ?? ''}`

  return (
    <>
      <header className='bg-amber-300'>
        <Navbar fluid rounded className='py-3 bg-transparent'>
          {/* Logo + title (always visible) */}
          <Link to={'/'} className='flex items-center gap-2 sm:gap-3'>
            <img
              src="https://static.vecteezy.com/system/resources/previews/015/030/887/original/library-book-stack-icon-flat-isolated-vector.jpg"
              className="h-8 w-8 sm:h-9 sm:w-9 rounded-full object-cover"
              alt="Book Store Logo"
            />
            <h3 className='font-bold text-white text-base sm:text-lg md:text-xl tracking-wide'>
              BOOK STORE
            </h3>
          </Link>

          {/* Hamburger – shown only below md */}
          <NavbarToggle />

          <NavbarCollapse>
            <div className='flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 py-2 md:py-0'>
              <div className='flex items-center gap-4'>
                <NavbarLink href="#" aria-label="Instagram"><FaInstagram /></NavbarLink>
                <NavbarLink href="#" aria-label="X"><FaXTwitter /></NavbarLink>
                <NavbarLink href="#" aria-label="Facebook"><FaFacebookSquare /></NavbarLink>
              </div>

              {userToken ? (
                <div className="relative md:mx-2" ref={menuRef}>
  {/* Trigger */}
  <button
    type="button"
    onClick={() => setMenuOpen((prev) => !prev)}
    aria-haspopup="menu"
    aria-expanded={menuOpen}
    className="flex items-center rounded-full focus:outline-none"
  >
    <img
      src="https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"
      alt="User menu"
      className="h-9 w-9 rounded-full object-cover ring-2 ring-gray-200 transition hover:ring-blue-500"
    />
  </button>

  {/* Menu */}
  {menuOpen && (
    <div
      role="menu"
      className="absolute left-0 z-50 mt-2 w-56 origin-top-left rounded-lg bg-white shadow-lg ring-1 ring-black/5 md:left-auto md:right-0 md:origin-top-right"
    >
      <div className="border-b border-gray-100 px-4 py-3">
        <span className="block text-sm font-semibold text-gray-900">{userData?.username}</span>
        <span className="block truncate text-xs text-gray-500">{userData?.email}</span>
      </div>

      <div className="py-1">
        <Link
          to={profilePath}
          onClick={() => setMenuOpen(false)}
          role="menuitem"
          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          <HiViewGrid className="h-4 w-4" /> Profile
        </Link>
        <Link
          to={profilePath}
          onClick={() => setMenuOpen(false)}
          role="menuitem"
          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          <HiCog className="h-4 w-4" /> Settings
        </Link>
        <Link
          to={profilePath}
          onClick={() => setMenuOpen(false)}
          role="menuitem"
          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          <HiCurrencyDollar className="h-4 w-4" /> Earnings
        </Link>
      </div>

      <div className="border-t border-gray-100 py-1">
        <button
          type="button"
          onClick={handleLogOut}
          role="menuitem"
          className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
        >
          <HiLogout className="h-4 w-4" /> Sign out
        </button>
      </div>
    </div>
  )}
</div>
              ) : (
                <Link to={'/login'}>
                  <button className='flex items-center gap-2 rounded-xl bg-black px-4 py-1 text-sm text-white opacity-70 transition-all hover:rounded-4xl hover:opacity-100'>
                    <FaRegUserCircle /> Login
                  </button>
                </Link>
              )}
            </div>
          </NavbarCollapse>
        </Navbar>
      </header>

      <nav className='bg-black text-white h-12 sm:h-14 flex items-center justify-center'>
        <ul className='list-none flex items-center justify-center gap-5 sm:gap-8 text-sm sm:text-base'>
          <li><Link to={'/'} className='py-1 hover:border-t'>Home</Link></li>
          <li><Link to={'/books'} className='py-1 hover:border-t'>Books</Link></li>
          <li><Link to={'/contact'} className='py-1 hover:border-t'>Contact</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Header