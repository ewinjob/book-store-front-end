import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'


function AdminSettings() {
  return (
    <>  

      <div className="flex min-h-screen flex-col bg-white font-serif">
      <AdminHeader />

      <div className="flex flex-1">
        <AdminSidebar />

        {/* Main content */}
        <main className="min-w-0 flex-1 px-5 py-8 sm:px-8">
  
        </main>
      </div>
    </div>
    
    </>
  )
}

export default AdminSettings