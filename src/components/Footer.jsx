import React from 'react'





function Footer() {
  return (
    <div>

         <footer className="font-slab bg-black text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-8 md:grid-cols-3 md:px-6">
            
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wide">About Us</h3>
              <p className="text-justify text-sm leading-relaxed">
                We believe books are more than just pages — they are windows into
                new worlds, teachers of wisdom, and companions for life. Our
                journey began with a passion for storytelling and a mission to make
                reading accessible, enjoyable, and inspiring for everyone.
              </p>
            </div>
    
            
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wide">News Letter</h3>
              <p className="mb-4 text-sm">Stay updated with our latest trends</p>
              <form  className="flex w-full max-w-220px">
                <input
                  type="email"
                  required
                  placeholder="E Mail"
                  aria-label="Email address"
                  className="min-w-0 flex-1 bg-white px-2 py-1.5 text-xs text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex w-8 items-center justify-center bg-yellow-400 text-white hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <FaArrowRight className="text-xs" />
                </button>
              </form>
            </div>
    
            
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wide">Follow Us</h3>
              <p className="mb-4 text-sm">Let us be social</p>
              <div className="flex gap-4">
                  <a  className="text-sm  hover:text-yellow-400">
                   <FaFacebookF/> 
                  </a>
                  <a  className="text-sm  hover:text-yellow-400">
                    <FaInstagram/> 
                  </a>
                  <a  className="text-sm  hover:text-yellow-400">
                    <FaXTwitter/> 
                  </a>
                  <a  className="text-sm  hover:text-yellow-400">
                   <FaEnvelope/>
                  </a>
       
              </div>
            </div>
          </div>
    
          
          <p className="flex flex-wrap items-center justify-center gap-1 px-6 pb-4 text-center text-xs">
          | Copyright © 2026 All rights reserved |
          </p>
        </footer>

    </div>
  )
}

export default Footer