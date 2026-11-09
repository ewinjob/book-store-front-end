import React, { useState } from "react";
import { Button } from "flowbite-react";
import {
  FaBook,
  FaTachometerAlt,
  FaCog,
  FaUsers,
  FaCheck,
  FaSignOutAlt,
  FaStar,
  FaBookOpen,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { getAllBooksAdminAPI } from "../../services/apiService";
import { useEffect } from "react";



function AdminResource() {
  const [activeTab, setActiveTab] = useState("Books");


       const token = sessionStorage.getItem('userToken')
       
      const reqHeader={
        Authorization:`Bearer ${token}`
      }

  const getAllBooksAdmin=async()=>{
    try{

      const res = await getAllBooksAdminAPI(reqHeader)
      console.log(res);
      

    }catch(err){
      console.log(err);
      
    }
  }
 
  

  const navigate = useNavigate();


  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };


  useEffect(()=>{
    getAllBooksAdmin()
  },[token])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      

      <div className="flex min-h-[calc(100vh-112px)]">
        {/* Sidebar */}
        <aside className="w-56 shrink-0 bg-blue-100 px-5 py-8 sm:w-64">
          <div className="mb-10 text-center">
            <img
              src="https://i.pravatar.cc/120?img=12"
              alt="Admin profile"
              className="mx-auto mb-4 h-20 w-20 rounded-full border-4 border-white object-cover shadow"
            />

            <h2 className="text-lg font-bold text-gray-900">
              Bookstore Admin
            </h2>
          </div>

          <nav className="space-y-2">
            <Link
              to="/admin/dashboard"
              className="flex items-center gap-3 rounded-lg px-3 py-3 hover:bg-blue-200"
            >
              <FaTachometerAlt />
              Dashboard
            </Link>

            <Link
              to="/admin/resources"
              className="flex items-center gap-3 rounded-lg bg-blue-200 px-3 py-3 font-semibold"
            >
              <FaBook />
              Collections
            </Link>

            <Link
              to="/admin/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-3 hover:bg-blue-200"
            >
              <FaCog />
              Settings
            </Link>
          </nav>
        </aside>

        {/* Main content */}
        <main className="min-w-0 flex-1 px-5 py-8 sm:px-8">
          <h2 className="mb-6 text-3xl font-bold text-slate-800">
            All Resources
          </h2>

          {/* Tabs */}
          <div className="mb-6 flex gap-3">
            <button
              onClick={() => setActiveTab("Books")}
              className={`rounded-lg px-7 py-3 font-semibold transition ${
                activeTab === "Books"
                  ? "bg-blue-600 text-white shadow"
                  : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Books
            </button>

            <button
              onClick={() => setActiveTab("Users")}
              className={`rounded-lg px-7 py-3 font-semibold transition ${
                activeTab === "Users"
                  ? "bg-blue-600 text-white shadow"
                  : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Users
            </button>
          </div>

          {/* Books tab */}
          {activeTab === "Books" && (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
             
            </div>
          )}

          {/* Users tab */}
          {activeTab === "Users" && (
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-left text-sm text-gray-700">
                <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                  <tr>
                    <th className="px-6 py-4">ID</th>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Email</th>
                    <th className="px-6 py-4">Role</th>
                  </tr>
                </thead>

                <tbody>
                
                </tbody>
              </table>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default AdminResource;