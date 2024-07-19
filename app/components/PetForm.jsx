'use client'
import React, { useState } from 'react'

export default function PetForm () {
  const [lostPet, setLostPet] = useState(true)
  const classNameInput = `block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none ${
    lostPet
      ? 'dark:focus:border-[#df1d42] focus:border-[#df1d42]'
      : 'dark:focus:border-[#e0a900] focus:border-[#e0a900]'
  }  focus:outline-none focus:ring-0  peer`
  const classNameLabel = `peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto ${
    lostPet
      ? 'peer-focus:text-[#df1d42] peer-focus:dark:text-[#df1d42]'
      : 'peer-focus:text-[#e0a900] peer-focus:dark:text-[#e0a900]'
  } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`
  return (
    <>
      <div className=''>
        <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-700 md:text-5xl lg:text-6xl'>
          {lostPet ? (
            <>
              We can help find your{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-l to-red-600 from-red-400'>
                Lost Pet
              </span>{' '}
              in this community.
            </>
          ) : (
            <>
              We help reunite{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-l to-primary-800 from-primary-500'>
                {' '}
                Found Pet
              </span>{' '}
              with their owners.
            </>
          )}
        </h1>
        <p className='text-lg font-normal text-gray-500 lg:text-xl'>
          It`s super simple and takes only minutes. Just add your pet`s info,
          picture, and contact information.
        </p>
      </div>
      <div className='p-5'>
        <div className='flex gap-5 text-xl py-7 font-bold text-gray-500'>
          <button
            onClick={() => setLostPet(true)}
            className={`p-3 ${lostPet ? 'text-red-600' : ''}`}
          >
            Lost Pet
          </button>
          <button
            onClick={() => setLostPet(false)}
            className={`p-3 ${!lostPet ? 'text-primary-600' : ''}`}
          >
            Found Pet
          </button>
        </div>
        <div className=''>
          <form>
            <div className='grid md:grid-cols-2 md:gap-6'>
              <div className='relative z-0 w-full mb-5 group'>
                <input
                  type='text'
                  name='pet_name'
                  id='pet_name'
                  className={classNameInput}
                  placeholder=' '
                  required
                />
                <label htmlFor='pet_name' className={classNameLabel}>
                  Pet Name
                </label>
              </div>
              <div className='relative z-0 w-full mb-5 group'>
                <input
                  type='tel'
                  pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                  name='contact'
                  id='contact'
                  className={classNameInput}
                  placeholder=' '
                  required
                />
                <label htmlFor='contact' className={classNameLabel}>
                  Contact Number (123-456-7890)
                </label>
              </div>
            </div>

            <div className='relative z-0 w-full mb-5 group'>
              <input
                type='text'
                name='search_address'
                id='search_address'
                className={classNameInput}
                placeholder=' '
                required
              />
              <label htmlFor='search_address' className={classNameLabel}>
                Search Address
              </label>
            </div>
            <div className='flex items-start mb-5'>
              <div className='flex items-center h-5'>
                <input
                  id='terms'
                  type='checkbox'
                  value=''
                  className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800'
                  required
                />
              </div>
              <label
                htmlFor='terms'
                className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                I agree with the{' '}
                <a
                  href='#'
                  className='text-blue-600 hover:underline dark:text-blue-500'
                >
                  terms and conditions
                </a>
              </label>
            </div>
            <button
              type='submit'
              className={`w-full ${
                lostPet ? 'bg-[#df1d42]' : 'bg-primary-600'
              } rounded-b-xl py-4 text-white font-bold`}
            >
              Report {lostPet ? 'Lost' : 'Found'} Pet
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
