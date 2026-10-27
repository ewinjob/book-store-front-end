
import { Routes,Route } from 'react-router-dom'

import './App.css'

import Home from './user/pages/Home'
import Contact from './user/pages/Contact'
import Books from './user/pages/Books'
import Auth from './pages/Auth'
import Profile from './user/pages/Profile'
import View from './user/pages/View'
import PaymentSuccess from './user/pages/PaymentSuccess'
import PaymentFail from './user/pages/PaymentFail'
import AdminDashboard from './admin/pages/AdminDashboard'
import AdminResource from './admin/pages/AdminResource'
import AdminSettings from './admin/pages/AdminSettings'
import Pnf from './pages/Pnf'


function App() {
 

  return (
      <>
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/books' element={<Books/>}/>
          <Route path='/login' element={<Auth/>}/>
          <Route path='/register' element={<Auth insideRegister/>}/>

          {/* role =='user' */}

          <Route path='/profile/:id' element={<Profile/>}/>
          <Route path='/books/:id' element={<View/>}/>
          <Route path='/success' element={<PaymentSuccess/>}/>
          <Route path='/cancel' element={<PaymentFail/>}/>

          {/* role=='admin' */}

          <Route path='/admin' element={<AdminDashboard/>}/>
          <Route path='/admin/resource' element={<AdminResource/>}/>
          <Route path='/admin/settings' element={<AdminSettings/>}/>

            <Route path='/*' element={<Pnf/>}/>

        </Routes>

      </>
  )
}

export default App
