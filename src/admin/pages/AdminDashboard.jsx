import React from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer,
  PieChart, Pie, Cell,
} from 'recharts'
import { FaBook, FaUsers, FaUserTie, FaPowerOff, FaCog, FaDatabase, FaChartBar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const barData = [
  { name: 'Page A', pv: 2400, uv: 4000 },
  { name: 'Page B', pv: 1398, uv: 3000 },
  { name: 'Page C', pv: 9800, uv: 2000 },
  { name: 'Page D', pv: 3908, uv: 2780 },
  { name: 'Page E', pv: 4800, uv: 1890 },
  { name: 'Page F', pv: 3800, uv: 2390 },
  { name: 'Page G', pv: 4300, uv: 3490 },
]

const inner = [
  { name: 'A', value: 100 },
  { name: 'B', value: 120 },
  { name: 'C', value: 90 },
]
const outer = Array.from({ length: 12 }, (_, i) => ({ name: `M${i + 1}`, value: 10 }))

const stats = [
  { label: 'Books', icon: <FaBook />, bg: 'bg-orange-100' },
  { label: 'Users', icon: <FaUsers />, bg: 'bg-red-100' },
  { label: 'Employees', icon: <FaUserTie />, bg: 'bg-yellow-100' },
]

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-white font-serif">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-3">
        <h1 className="text-xl font-bold tracking-wide">BOOKSTORE</h1>
        <button className="flex items-center gap-2 rounded bg-black px-4 py-2 text-sm text-white">
          Logout <FaPowerOff />
        </button>
      </header>

      {/* Marquee */}
      <div className="overflow-hidden bg-black py-3 text-sm text-white">
        <marquee>Welcome Admin, Your all set to manage the bookstore.</marquee>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="flex w-56 shrink-0 flex-col items-center bg-blue-100 pt-8" style={{ minHeight: 'calc(100vh - 110px)' }}>
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Admin"
            className="h-24 w-24 rounded-full object-cover"
          />
          <h2 className="mt-4 text-base font-bold">Bookstore Admin</h2>
          <nav className="mt-8 flex flex-col gap-3 text-sm">
            <Link to="/admin" className="flex items-center gap-2"><FaChartBar /> Dashboard</Link>
            <Link to="/admin/collections" className="flex items-center gap-2"><FaDatabase /> Collections</Link>
            <Link to="/admin/settings" className="flex items-center gap-2"><FaCog /> Settings</Link>
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 p-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className={`${s.bg} flex items-center justify-center gap-4 rounded p-8`}>
                <span className="text-4xl">{s.icon}</span>
                <div>
                  <p className="text-sm">{s.label}</p>
                  <p className="text-xl">100+</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <section>
              <h3 className="mb-2 text-sm font-bold">Book Purchase Ratio</h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" fontSize={11} />
                    <YAxis fontSize={11} />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </section>

            <section>
              <h3 className="mb-2 text-sm font-bold">Growth Ratio - (Yearly)</h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={inner} dataKey="value" outerRadius={70} stroke="#fff">
                      {inner.map((_, i) => <Cell key={i} fill="#8884d8" />)}
                    </Pie>
                    <Pie data={outer} dataKey="value" innerRadius={80} outerRadius={105} stroke="#fff">
                      {outer.map((_, i) => <Cell key={i} fill="#82ca9d" />)}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

export default AdminDashboard