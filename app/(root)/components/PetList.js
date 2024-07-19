'use client'
import { useEffect, useState } from 'react'
import PetListItem from './PetListItem'
import { useUser } from '@clerk/nextjs'
import { useAuthContext } from '@/app/context/AuthWrapper'
import { createSavedPet, getSavedPetByUser } from '../service/PetList'
import Swal from 'sweetalert2'

function PetList ({ filteredPets }) {
  const [petList, setpetList] = useState(filteredPets)
  const [savedPets, setSavedPets] = useState(null)
  const [reload, setreload] = useState(1)
  const { isSignedIn, isLoaded } = useUser()
  const userWrap = useAuthContext()
  useEffect(() => {
    setpetList(filteredPets)
    const fetchData = async () => {
      if (isLoaded && isSignedIn && userWrap) {
        const newSavedPets = await getSavedPetByUser({ userId: userWrap.id })
        setSavedPets(newSavedPets)
      }
    }
    fetchData()
  }, [isSignedIn, userWrap, reload, filteredPets])
  const handleToggleSavedPet = async animalId => {
    if (isLoaded && isSignedIn) {
      const response = await createSavedPet({ userId: userWrap.id, animalId })
      if (response) {
        setreload(reload + 1)
        Swal.fire({
          title: 'Saved Pet',
          text: 'Review it on your dashboard',
          icon: 'success'
        })
      }
    }
  }
  return (
    <div className='mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4'>
      {petList &&
        (savedPets || !isSignedIn) &&
        petList.map(pet => {
          let isBookmark = false
          if (savedPets) {
            isBookmark = savedPets.includes(pet.id)
          }
          return (
            <PetListItem
              item={pet}
              key={pet.id}
              onToggleSavedPet={handleToggleSavedPet}
              isBookmark={isBookmark && isSignedIn}
              isEjecute={!isBookmark && isSignedIn}
            />
          )
        })}
    </div>
  )
}

export default PetList
