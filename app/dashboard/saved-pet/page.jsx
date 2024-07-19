'use client'
import React, { useEffect, useState } from 'react'
import SavedPetList from './components/SavedPetList'
import { useAuthContext } from '@/app/context/AuthWrapper'
import { deleteSavedPetByUser, getSavedPetByUser } from './services/SavedPet'
import Swal from 'sweetalert2'

export default function SavedPetPage () {
  const [limit, setlimit] = useState(6)
  const [savedPets, setsavedPets] = useState(null)
  const user = useAuthContext()
  useEffect(() => {
    if (user) {
      reloadSavedPets()
    }
  }, [user, limit])
  const reloadSavedPets = async () => {
    const savedPetsFetch = await getSavedPetByUser({
      userId: user.id,
      limit
    })
    setsavedPets(savedPetsFetch)
  }

  const removeSavedPet = async savedId => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d97706',
      cancelButtonColor: '#df1d42',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.isConfirmed) {
        deleteSavedPetByUser(savedId).then(res => {
          if (res) {
            reloadSavedPets()
            Swal.fire({
              title: 'Deleted!',
              text: 'Your bookmark Pet has been deleted.',
              icon: 'success'
            })
          }
        })
      }
    })
  }
  const handleChange = event => {
    const newLimit = parseInt(event.target.value)
    setlimit(newLimit)
  }
  return (
    <div className='w-full'>
      <div className='flex flex-col lg:flex-row gap-3 justify-between items-center mb-5'>
        <h2 className='text-xl font-bold'>Saved Pets</h2>
        <div>
          <select
            onChange={handleChange}
            value={limit}
            id='countries'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          >
            <option value='3'>3 items per view</option>
            <option value='6'>6 items per view</option>
            <option value='10'>10 items per view</option>
            <option value='25'>25 items per view</option>
            <option value='50'>50 items per view</option>
          </select>
        </div>
      </div>
      <SavedPetList savedPets={savedPets} onRemoveSavedPet={removeSavedPet} />
    </div>
  )
}
