'use client'
import React, { useEffect, useState } from 'react'
import SavedPetList from './components/SavedPetList'
import { useAuthContext } from '@/app/context/AuthWrapper'
import { deleteSavedPetByUser, getSavedPetByUser } from './services/SavedPet'
import Swal from 'sweetalert2'

export default function SavedPetPage () {
  const [savedPets, setsavedPets] = useState(null)
  const user = useAuthContext()
  useEffect(() => {
    const initialFetch = async () => {
      if (user) {
        const savedPetsFetch = await getSavedPetByUser({ userId: user.id })
        setsavedPets(savedPetsFetch)
      }
    }
    initialFetch()
  }, [user])

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
            Swal.fire({
              title: 'Deleted!',
              text: 'Your bookmark Pet has been deleted.',
              icon: 'success'
            })
            const updateSavedPets = savedPets.filter(
              item => item.savedId !== savedId
            )
            setsavedPets(updateSavedPets)
          }
        })
      }
    })
  }
  return (
    <div className='w-full'>
      <h2 className='mb-5 text-xl font-bold'>Saved Pet</h2>
      <SavedPetList savedPets={savedPets} onRemoveSavedPet={removeSavedPet} />
    </div>
  )
}
