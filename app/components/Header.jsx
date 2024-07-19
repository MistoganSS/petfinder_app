'use client'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { TbMenu2 } from 'react-icons/tb'

export default function Header (props) {
  const [showHeader, setShowHeader] = useState(false)
  const pathname = usePathname()
  const activeMenuClass = 'text-white bg-primary-700 md:text-primary-600'
  return (
    <nav className='bg-white bg-opacity-75 backdrop-blur-md sticky w-full z-20 top-0 start-0 border-b border-gray-200'>
      <div
        className={`${
          !props.dashboard ? 'max-w-screen-2xl p-4' : 'px-2 py-4'
        } flex flex-wrap items-center justify-between mx-auto`}
      >
        <a href='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <div className='block lg:hidden'>
            <img src='/petfinder-icon.svg' className='h-12' alt='Logo a' />
          </div>
          <div className='hidden lg:block'>
            <img src='/petfinder.svg' className='h-12' alt='Logo b' />
          </div>
        </a>
        <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
          <div className='flex items-center gap-3'>
            <button
              type='button'
              className='text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center'
            >
              Report Pet
            </button>
            <SignedIn>
              {pathname.startsWith('/dashboard/') ? (
                <UserButton />
              ) : (
                <Link
                  href='/dashboard/report-pet'
                  className='font-bold border border-primary-700 hover:text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-sm px-4 py-2 text-center'
                >
                  Dashboard
                </Link>
              )}
            </SignedIn>
          </div>
          <button
            onClick={() => setShowHeader(!showHeader)}
            data-collapse-toggle='navbar-sticky'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
            aria-controls='navbar-sticky'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <TbMenu2 className='w-5 h-5' />
          </button>
        </div>
        <div
          className={`${
            showHeader ? '' : 'hidden'
          } items-center justify-between  w-full md:flex md:w-auto md:order-1`}
          id='navbar-sticky'
        >
          <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0'>
            <li>
              <Link
                href='/'
                className={`${
                  pathname === '/' ? activeMenuClass : ''
                } block text-black py-2 px-3  rounded md:bg-transparent md:p-0`}
                aria-current='page'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/pet-catalog'
                className={`${
                  pathname === '/pet-catalog' ? activeMenuClass : ''
                } block text-black py-2 px-3  rounded md:bg-transparent md:p-0`}
                aria-current='page'
              >
                Lost/Found
              </Link>
            </li>
            <li>
              <Link
                href='/how-it-works'
                className={`${
                  pathname === '/how-it-works' ? activeMenuClass : ''
                } block text-black py-2 px-3  rounded md:bg-transparent md:p-0`}
              >
                How it Works
              </Link>
            </li>
            <SignedOut>
              <li>
                <Link
                  href='/sign-in'
                  className={`${
                    pathname === '/sign-in'
                      ? 'text-white bg-primary-700 md:text-primary-600'
                      : ''
                  } block text-black py-2 px-3  rounded md:bg-transparent md:p-0`}
                >
                  Login
                </Link>
              </li>
            </SignedOut>
          </ul>
        </div>
      </div>
    </nav>
  )
}
