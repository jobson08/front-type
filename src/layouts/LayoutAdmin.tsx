import Navbar from "components/Navbar"
import Sidebar from "components/Sidebar"
import { Outlet } from "react-router-dom"

function LayoutAdmin() {
  return (

    <div className="min-h-screen grid grid-cols-6">
      <Sidebar />
      <div className="xl:col-span-5 bg-slate-800">
        <Navbar />
        <div className="h-[90] ">
          <Outlet />
        </div>
      </div>

    </div>
  )
}

export default LayoutAdmin