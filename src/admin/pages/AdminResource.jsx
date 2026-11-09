import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllBooksAdminAPI, getAllUsersAdminAPI } from "../../services/apiService";
import { useEffect } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";




function AdminResource() {
  const [activeTab, setActiveTab] = useState("Books");

  const [book,setBook]=useState([])

  const [user,setUser]=useState({})

       const token = sessionStorage.getItem('userToken')
       
      const reqHeader={
        Authorization:`Bearer ${token}`
      }

  const getAllBooksAdmin=async()=>{
    try{

      const res = await getAllBooksAdminAPI(reqHeader)
      console.log(res);
      if (res.status === 200) {
  setBook(res.data.getBooks)
}
    }catch(err){
      console.log(err);
      
    }
  }

  const  getAllUsersAdmin=async()=>{
    try{

      const res = await getAllUsersAdminAPI(reqHeader)
      console.log(res);
      if(res.status==200){
        setUser(res.data.getUsers)
      }
      

    }catch(err){
      console.log(err);
      
    }
  }
 
  

  const navigate = useNavigate();



  useEffect(()=>{
    getAllBooksAdmin(),getAllUsersAdmin()
  },[token])

  return (
    <div className="flex min-h-screen flex-col bg-white font-serif">
      <AdminHeader />

      <div className="flex flex-1">
        <AdminSidebar />

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
  {book?.length > 0 ? (
    book.map((item) => (
      <div
        key={item._id}
        className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
      >
        <img
          src={item.imageUrl}
          alt={item.title}
          className="h-64 w-full object-center"
        />

        <div className="flex flex-1 flex-col gap-1 p-4 text-center">
          <p className="text-xs uppercase tracking-wide text-blue-600">
            {item.author}
          </p>
          <h3 className="line-clamp-2 text-base font-bold text-gray-900">
            {item.title}
          </h3>
          <p className="mt-auto pt-2 font-semibold text-red-600">
            ₹ {item.price}
          </p>
        </div>
      </div>
    ))
  ) : (
    <p className="col-span-full text-center text-gray-500">No books found</p>
  )}
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
  {user?.length > 0 ? (
    user.map((u, index) => (
      <tr key={u._id} className="border-t border-gray-200 hover:bg-gray-50">
        <td className="px-6 py-4">{index + 1}</td>
        <td className="px-6 py-4">{u.username}</td>
        <td className="px-6 py-4">{u.email}</td>
        <td className="px-6 py-4">{u.role}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan={4} className="px-6 py-6 text-center text-gray-500">
        No users found
      </td>
    </tr>
  )}
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