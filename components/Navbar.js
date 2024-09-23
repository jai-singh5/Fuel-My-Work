/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Github from "next-auth/providers/github";

const Navbar = () => {
  const { data: session } = useSession();
  const [showdropdown, setShowdropdown] = useState(false);
  // if(session) {
  //   return <>
  //     Signed in as {session.user.email} <br/>
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }

  return (
    <nav className="bg-gray-900 text-white flex justify-between items-center px-5 md:h-16 flex-col md:flex-row">
      <Link href={"/"}>
        <div className="logo font-bold text-lg flex justify-between items-center gap-1">
          <img src="fueling.gif" width={44} alt="" />
          <span className="text-4xl md:text-base my-5 md:my-0">Fuel My Work!</span>
        </div>
      </Link>

      <div className='relative'>
        {session && (
          <>
            <button
              onClick={() => setShowdropdown(!showdropdown)}
              onBlur={() => { setTimeout(() => { setShowdropdown(false) }, 100) }}
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="relative inline-flex items-center justify-center p-0.5 mb-1 me-1 overflow-hidden text-sm font-bold text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 
        focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              type="button"
            >
              <span className="relative px-4 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-[5px] group-hover:bg-opacity-0">

                Welcome {session.user.name}
              </span>
              <svg
                className="w-2.5 h-2.5 ms-0.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              id="dropdown"
              className={`z-10 ${showdropdown ? "" : "hidden"} absolute left-[4px] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${session.user.name}`}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Your Page
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => signOut()}
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}

        {/* {session && (
          <button
            className="relative inline-flex items-center justify-center p-0.5 mb-1 me-1 overflow-hidden text-sm font-bold text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 
        focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            onClick={() => {
              signOut();
            }}
          >
            <span className="relative px-4 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              LogOut
            </span>
          </button>
        )} */}
        {!session && (
          <Link href={"/login"}>
            <button
              className="relative inline-flex items-center justify-center p-0.5 mb-1 me-1 overflow-hidden text-sm font-bold text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 
        focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="relative px-4 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Login
              </span>
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
