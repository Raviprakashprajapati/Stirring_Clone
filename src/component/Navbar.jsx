import React from 'react'
import "../css/Navbar.css"
import line from "../images/line.png"

function Navbar() {
  return (
    <div className='w-[100%] lg:flex justify-between items-center bg-slate-200 p-2 '>
      <div className='flex justify-between lg:block' >
        <div>

        </div>
        <h2 className='text-center text-lg font-extrabold lg:text-left' >CareerGuide.com</h2>
            <img   className=' w-7 float-right lg:hidden ' src={line} alt="" />
    
      </div>

        <div className='hidden lg:flex' >
            <ul className='flex justify-evenly items-center text-gray-600' >
                <li>class 10</li>
                <li>class 11 to 12</li>
                <li>counsellors</li>
                <li>Professionals</li>
                <li>Study Abroad</li>
                <li>Psychometric Test</li>
                <li>Price </li>
                <li>Course</li>
            </ul>
        </div>
        <div className=' hidden lg:flex   '  >
            <p className='mr-1' >Sign-up</p>
            <p>Profile</p>
        </div>
       

    </div>
  )
}

export default Navbar
