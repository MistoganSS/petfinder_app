'use client'
import { PetButtons, PetImage, PetInfo } from '@/app/components/PetItems'

const PetListItem = ({ item }) => {
  const handleToggleSavedPet = savedId => {
    console.log(savedId)
  }
  return (
    <article className='rounded-lg border border-gray-200 bg-white p-4 shadow-sm'>
      <PetImage id={item.id} image={item.photos} className='h-56 w-full' />
      <div className='pt-3'>
        <PetInfo
          item={item}
          classInfoName='text-lg font-semibold leading-tight text-gray-900'
          classInfoDescription='text-sm line-clamp-2 hover:line-clamp-none'
          onToggleSavedPet={handleToggleSavedPet}
        />
        <PetButtons
          id={item.id}
          className='mt-4 flex items-center justify-between gap-2'
        />
      </div>
    </article>
  )
}

export default PetListItem
