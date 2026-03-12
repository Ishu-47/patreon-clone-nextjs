"use client"
import React from 'react'
import { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false)
  // if (session) {
  //   return <>  Signed in as {session.user.email}
  //     <br />
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }
  return (
    <nav className='bg-gray-900 text-white flex justify-between px-4 items-center h-16'>
      <Link className="logo font-bold text-lg flex justify-center items-center" href={"/"}>

        <img src="/tea.webp" width={65} alt="" />
        <span className='ml-1'>Get Me a Chai!</span>
      </Link>

      <div className='relative'>
        {session && <> <button onClick={() => setShowdropdown(!showdropdown)} onBlur={() => setTimeout(() => setShowdropdown(false), 300)}
 id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 mx-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.email} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
        </button>

          <div id="dropdown" className={`z-10 ${showdropdown ? "" : "hidden"} absolute left-[125px] bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
              </li>

              <li>
                <Link href="#" onClick={(e) => {
                    e.preventDefault(); // prevent jumping to "#"
                    signOut();
                  }} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                > Sign out </Link>
              </li>
            </ul>
          </div>
        </>
        }



        {session && <button className='p-3 cursor-pointer text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Logout</button>
        }
        {!session && <Link href={"/login"}>
          <button className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-all duration-300" aria-label="Login" >
            Login
          </button>
        </Link>}
      </div>
    </nav>
  )
}
export default Navbar