'use client'

import { animalList } from '../../mocks/animalsList'
import PetListItem from './PetListItem'

const PetListLatest = ({ numberOfItems }) => {
  return (
    <>
      {animalList
        .sort((a, b) => new Date(b.dateLastSeen) - new Date(a.dateLastSeen))
        .slice(0, numberOfItems)
        .map(pet => {
          return <PetListItem item={pet} key={pet.id} />
        })}
    </>
  )
}

export default PetListLatest
