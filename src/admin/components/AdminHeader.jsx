import React from "react";
import { FaPowerOff } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function AdminHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <header className="flex items-center justify-between px-6 py-3">
        <h1 className="text-xl font-bold tracking-wide">BOOKSTORE</h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded bg-black px-4 py-2 text-sm text-white hover:rounded-xl  duration-200"
        >
          Logout <FaPowerOff />
        </button>
      </header>

      <div className="overflow-hidden bg-black py-3 text-sm text-white">
        <marquee>Welcome Admin, You're all set to manage the bookstore.</marquee>
      </div>
    </>
  );
}

export default AdminHeader;