'use client';

import config from '@/config'
import { animalList } from '../../mocks/animalsList'
import PetListItem from './PetListItem'

const PetListLatest = ({ numberOfItems }) => {
  const url = 'https://us-central1-pets-api-f1d89.cloudfunctions.net/app/api/v1/animals'
  return (
    <>
      {url}
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