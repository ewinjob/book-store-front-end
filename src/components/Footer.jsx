import React, { useState } from "react";
import { FaArrowRight, FaFacebookF, FaInstagram, FaXTwitter, FaEnvelope } from "react-icons/fa6";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault(); // stops the page from reloading
    console.log("Subscribed:", email); // replace with your API call
    setEmail("");
  };

  const socials = [
    { icon: <FaFacebookF />, href: "https://facebook.com", label: "Facebook" },
    { icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram" },
    { icon: <FaXTwitter />, href: "https://x.com", label: "X" },
    { icon: <FaEnvelope />, href: "mailto:hello@example.com", label: "Email" },
  ];

  return (
    <footer className="font-slab bg-black text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-8 md:grid-cols-3">
        {/* About */}
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide">About Us</h3>
          <p className="text-justify text-sm leading-relaxed">
            We believe books are more than just pages — they are windows into
            new worlds, teachers of wisdom, and companions for life. Our
            journey began with a passion for storytelling and a mission to make
            reading accessible, enjoyable, and inspiring for everyone.
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide">Newsletter</h3>
          <p className="mb-4 text-sm">Stay updated with our latest trends</p>
          <form onSubmit={handleSubscribe} className="flex w-full max-w-[220px]">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
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

        {/* Social */}
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide">Follow Us</h3>
          <p className="mb-4 text-sm">Let us be social</p>
          <div className="flex gap-4">
            {socials.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-base transition hover:text-yellow-400"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="px-6 pb-4 text-center text-xs">
        © {new Date().getFullYear()} All rights reserved
      </p>
    </footer>
  );
}

export default Footer;