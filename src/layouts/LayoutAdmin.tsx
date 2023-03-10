import Header from "components/Header"
import Sidebar from "components/Sidebar"
import { Outlet } from "react-router-dom"

function LayoutAdmin() {
  return (

    <div className="min-h-screen grid grid-col-1 xl:grid-cols-6 ">
      <Sidebar />
      <div className="xl:col-span-5">
        <Header />
        <div className="h-[90vh] overflow-y-scroll  p-4 bg-body-bg">
          <Outlet  />
        </div>
      </div>
    </div>
  )
}

export default LayoutAdmin