import React from 'react'
import SavedPetList from './components/SavedPetList'

export default async function page () {
  return (
    <div className='w-full'>
      <h2 className='mb-5 text-xl font-bold'>Saved Pet</h2>
      <SavedPetList />
    </div>
  )
}
