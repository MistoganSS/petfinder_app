'use client'
import React, { useEffect, useState } from 'react'
import { FaGitter } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md'
import { getSpecies } from '../service/Species'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

export default function SearchPet () {
  const { isSignedIn, isLoaded } = useUser()
  const router = useRouter()
  const [species, setSpecies] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const speciesData = await getSpecies()
      setSpecies(speciesData)
    }
    fetchData()
  }, [])

  const handleClick = () => {
    if (isSignedIn && isLoaded) {
      router.push('/pet-catalog')
    } else {
      router.push('/sign-in')
    }
  }
  return (
    <form
      onClick={handleClick}
      className='w-full p-5 grid grid-cols-1 md:grid-cols-4 gap-5 place-items-center justify-items-center lg:text-center bg-primary-400/30 rounded-xl lg:rounded-full'
    >
      <div className='w-full'>
        <label
          htmlFor='name'
          className='block mb-2 text-lg font-bold text-gray-900'
        >
          Name
        </label>
        <div className='relative w-full'>
          <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
            <MdOutlineDriveFileRenameOutline size='20' />
          </div>
          <input
            type='text'
            id='name'
            name='name'
            className='ps-8 bg-transparent border border-transparent text-green-900 placeholder-slate-500 text-sm rounded-lg focus:outline-none block w-full p-2.5'
            placeholder='Type Pet Name'
            required
          />
        </div>
      </div>
      <div className='w-full'>
        <label
          htmlFor=''
          className='block mb-2 text-lg font-bold text-gray-900'
        >
          Select an option
        </label>
        <div className='relative w-full'>
          <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
            <FaGitter size='20' />
          </div>
          <select
            defaultValue='0'
            className='ps-8 bg-transparent border border-none text-gray-900 text-sm appearance-none rounded-lg block w-full p-2.5 focus:outline-none'
          >
            <option disabled value='0' className='text-slate-500'>
              Choose a Specie
            </option>
            {species &&
              species.map(({ id, name }) => {
                return (
                  <option key={id} value={name}>
                    {name}
                  </option>
                )
              })}
          </select>
        </div>
      </div>
      <div className='w-full'>
        <label
          htmlFor='location'
          className='block mb-2 text-lg font-bold text-gray-900'
        >
          Location
        </label>
        <div className='relative w-full'>
          <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
            <IoLocationSharp size='20' />
          </div>
          <input
            type='text'
            id='location'
            name='location'
            className='ps-8 bg-transparent placeholder-slate-500 border-none text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5'
            placeholder='Type Location'
            required
          />
        </div>
      </div>
      <button
        type='submit'
        className='w-20 bg-primary-700 border-none font-bold text-white rounded-md py-4'
      >
        Find Pet
      </button>
    </form>
  )
}
