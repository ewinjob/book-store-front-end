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
        <main className="min-w-0 flex justify-between items-center px-5 gap-4 py-8 sm:px-8">
          <section className='text-justify'>
            <h1 className='text-2xl my-4'>Welcome, Admin 👋🏻</h1>
           
              <p  className='text-sm font-sans'>This is your personal administration space where you can manage your account details, system preferences, and platform roles with ease. From here, you can update essential information such as your username, password, contact details, ensuring your access remains secure and and notification preferences personalized.</p>
               <div className='my-5'>
                <p>🔧 What You Can Manage in This Section:</p>
            </div>
            <div className='flex flex-col gap-4'>
              <p>📝 Update personal details (name, email, role, profile picture)</p>

            <p>🔐 Change or reset your password</p>

            <p>📢 Configure notification and alert preferences</p>

            <p>👥 Customize dashboard visibility and layout</p>

            <p>🧩 Manage permissions based on assigned access level</p>
            </div>
            <p className='mt-8 text-sm font-sans'>Your profile settings help ensure your administrative tools work the way you need them to securely, efficiently, and with complete control. Thank you for keeping the platform organized and running smoothly. Continue managing, updating, and improving the system one step at a time.</p>
          </section>


          <section>
            <div className='border-2 w-120 h-100'>
             <center className='flex justify-center items-center'>
               <img src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="user" width={100}  className='rounded-full' />
             </center>
            </div>
          </section>
        </main>
      </div>
    </div>
    
    </>
  )
}

export default AdminSettings