'use client'
import { useAuthContext } from '@/app/context/AuthWrapper'
import { useEffect, useState } from 'react'
import { createSavedPet, getSavedPetByUser } from '../service/PetList'
import Swal from 'sweetalert2'
import { useUser } from '@clerk/nextjs'
const fetchPets = async (limit = 0) => {
  const query = new URLSearchParams()

  if (limit) query.append('limit', limit)

  const url = `https://us-central1-pets-api-f1d89.cloudfunctions.net/app/api/v1/animals?${query.toString()}`

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`)
  }

  return await response.json()
}
export default function usePetsState ({ limit = 6, petList, isFetch = true }) {
  const [petsList, setPetsList] = useState(petList || null)
  const [savedPets, setSavedPets] = useState(null)
  const [reload, setreload] = useState(1)
  const { isSignedIn, isLoaded } = useUser()
  const userWrap = useAuthContext()
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
  //   const reloadPetList=(newPetList)=>{
  //     setPetsList(newPetList)
  //   }
  useEffect(() => {
    const fetchData = async () => {
      if (isFetch) {
        const pets = await fetchPets(limit)
        setPetsList(pets)
      }

      loadSavedPets()
    }
    fetchData()
  }, [limit, isSignedIn, userWrap, reload])
  const loadSavedPets = async () => {
    if (isLoaded && isSignedIn && userWrap) {
      const newSavedPets = await getSavedPetByUser({ userId: userWrap.id })
      setSavedPets(newSavedPets)
    }
  }
  return { petsList, savedPets, handleToggleSavedPet, isSignedIn }
}
