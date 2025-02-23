import React from 'react'
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
function Authlayout({children}:{children:React.ReactNode}) {
  return (
    <>
    <Navbar/>
    <div className="flex">
      <div className="hidden  md:block min-h-[100vh] w-[300px]">
        <Sidebar/>
      </div>

      <div className="p-5 w-full md:max-w-[1140px]">
      {children}
      </div>

    </div>
    </>
  )
}

export default Authlayout