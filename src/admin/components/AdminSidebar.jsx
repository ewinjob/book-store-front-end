import React from "react";
import { NavLink } from "react-router-dom";
import { FaChartBar, FaDatabase, FaCog } from "react-icons/fa";

const links = [
  { to: "/admin", label: "Dashboard", icon: <FaChartBar /> },
  { to: "/admin/resource", label: "Collections", icon: <FaDatabase /> },
  { to: "/admin/settings", label: "Settings", icon: <FaCog /> },
];

function AdminSidebar() {
  return (
    <aside className="w-56 shrink-0 bg-blue-100 px-5 py-8 sm:w-64">
      <div className="mb-8 text-center">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="Admin"
          className="mx-auto h-24 w-24 rounded-full border-4 border-white object-cover shadow"
        />
        <h2 className="mt-4 text-base font-bold">Bookstore Admin</h2>
      </div>

      <nav className="flex flex-col gap-2 text-sm">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-3 hover:bg-blue-200 ${
                isActive ? "bg-blue-200 font-semibold" : ""
              }`
            }
          >
            {l.icon}
            {l.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default AdminSidebar;