import React, { useState } from 'react'
import { TabItem, Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import Header from '../components/Header';
import Footer from '../../components/Footer';



function Profile() {

  const tabs = ['Upload Book', 'Upload Books Status', 'Purchase History']

 
  const userData = JSON.parse(sessionStorage.getItem('userData'))

  const handleEdit = () => {
   
  }

  return (
    
<>
<Header/>



    <section className="w-full bg-red-text-red-300 font-serif text-black">
      
      <div className="h-36 w-full bg-black sm:h-44" />

      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        
        <div className="-mt-16 h-32 w-32 overflow-hidden rounded-full border-4 border-red-text-red-300 bg-gray-200 sm:-mt-20 sm:h-40 sm:w-40">
          <img src='' alt='' className="h-full w-full object-cover" />
        </div>

        
        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold sm:text-2xl">{userData.username}</h2>
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-sky-500"
              fill="currentColor"
              aria-label="Verified"
            >
              <path d="M12 1.5l2.6 1.9 3.2-.2 1 3.1 2.6 1.9-1 3.1 1 3.1-2.6 1.9-1 3.1-3.2-.2L12 22.5l-2.6-1.9-3.2.2-1-3.1L2.6 15.8l1-3.1-1-3.1 2.6-1.9 1-3.1 3.2.2L12 1.5z" />
              <path
                d="M8 12.2l2.8 2.8L16.2 9.6"
                fill="white"
                stroke="red-text-red-300"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <button
            onClick={handleEdit}
            className="flex items-center gap-2 rounded bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
            </svg>
            Edit
          </button>
        </div>

        <p className="mt-3 text-lg text-amber-400">✨</p>

        <p className="mt-2 max-w-4xl text-xs leading-relaxed sm:text-sm">
          This is your personal space where you can manage your account, explore
          your reading activity, track your orders, and save books you love.
          Whether you're building a wishlist, discovering new arrivals, or
          reviewing your recent purchases, this page keeps everything organized
          and easy to access. Your reading journey continues here — enjoy
          exploring, discovering, and collecting stories that inspire you.
        </p>

    
          <section className="my-5 mx-10">
  <Tabs
    aria-label="Tabs with underline"
    variant="underline"
    className="w-full max-w-3xl"
    theme={{
      tablist: {
        base: "flex justify-center text-center",
      },
    }}
  >
    <TabItem active title="Profile" icon={HiUserCircle}>
      ...
    </TabItem>
    <TabItem title="Dashboard" icon={MdDashboard}>
      ...
    </TabItem>
    <TabItem title="Settings" icon={HiAdjustments}>
      ...
    </TabItem>
  </Tabs>
</section>

      </div>
    </section>

    <Footer/>

</>
  )
}

export default Profile
