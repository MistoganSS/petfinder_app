'use client'
import { useState } from 'react'
import { TbDog, TbBookmark, TbUsers, TbMenuDeep } from 'react-icons/tb'
import { IoMdClose } from 'react-icons/io'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Menu = () => {
  const [showSide, setShowSide] = useState(false)
  const pathname = usePathname()
  return (
    <>
      <button
        onClick={() => setShowSide(!showSide)}
        data-drawer-target='default-sidebar'
        data-drawer-toggle='default-sidebar'
        aria-controls='default-sidebar'
        type='button'
        className={`${
          !showSide ? 'hidden' : ''
        } inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200`}
      >
        <span className='sr-only'>Open sidebar</span>
        <TbMenuDeep size={30} />
      </button>

      <aside
        // translate-x-0
        //-translate-x-full
        id='default-sidebar'
        className={`${
          showSide ? '-translate-x-full fixed' : 'translate-x-0'
        }  w-64 h-screen transition-transform `}
        aria-label='Sidebar'
      >
        <div className='h-full px-3 py-4 overflow-y-auto bg-gray-50'>
          <div className='w-full flex justify-between items-center mb-4'>
            <h3 className='text-xl ms-3 font-bold'>Dashboard</h3>
            <button
              onClick={() => setShowSide(!showSide)}
              data-drawer-target='default-sidebar'
              data-drawer-toggle='default-sidebar'
              aria-controls='default-sidebar'
              type='button'
              className='items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
            >
              <IoMdClose size={30} />
            </button>
          </div>
          <ul className='space-y-2 font-medium'>
            <li>
              <Link
                href='/dashboard/report-pet'
                className={`${
                  pathname === '/dashboard/report-pet' ? 'text-primary-700' : ''
                } flex items-center p-2 rounded-lg hover:bg-gray-100 group`}
              >
                <TbDog className='w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900' />
                <span className='flex-1 ms-3 whitespace-nowrap '>
                  My Reports
                </span>
                <span className='inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full'>
                  7
                </span>
              </Link>
            </li>
            <li>
              <Link
                href='/dashboard/saved-pet'
                className={`${
                  pathname === '/dashboard/saved-pet' ? 'text-primary-700' : ''
                } flex items-center p-2 rounded-lg hover:bg-gray-100 group`}
              >
                <TbBookmark className='w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900' />
                <span className='ms-3'>Saved</span>
              </Link>
            </li>
            <li>
              <Link
                href='/dashboard/user-account'
                className={`${
                  pathname === '/dashboard/user-account'
                    ? 'text-primary-700'
                    : ''
                } flex items-center p-2 rounded-lg hover:bg-gray-100 group`}
              >
                <TbUsers className='w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900' />
                <span className='flex-1 ms-3 whitespace-nowrap'>
                  Users Account
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}

export default Menu
