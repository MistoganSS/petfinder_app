'use client'
import PetListItem from './PetListItem'
import usePetsState from '../hooks/usePetsState'

const PetListLatest = ({ limit }) => {
  const { petsList, savedPets, handleToggleSavedPet, isSignedIn } =
    usePetsState({ limit })

  return (
    <>
      {petsList &&
        (savedPets || !isSignedIn) &&
        petsList.map(pet => {
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
    </>
  )
}

export default PetListLatest
