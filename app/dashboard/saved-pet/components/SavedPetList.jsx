import { PetButtons, PetImage, PetInfo } from '@/app/components/PetItems'

export default function SavedPetList ({ savedPets, onRemoveSavedPet }) {
  return savedPets ? (
    <>
      {savedPets.length > 0 ? (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 mx-auto'>
          {savedPets.map(item => {
            const segments = ['specie', item.specie.name]
            item.specie._path = {}
            item.specie._path.segments = segments
            return (
              <PetItem
                key={item.savedId}
                item={item}
                handleRemoveSavedPet={onRemoveSavedPet}
              />
            )
          })}
        </div>
      ) : (
        <div className='w-full text-center'>Doesn`t have favorite pets.</div>
      )}
    </>
  ) : (
    <div className='w-full text-center'>Loading...</div>
  )
}

const PetItem = ({ item, handleRemoveSavedPet }) => {
  return (
    <article className='rounded-lg border border-gray-200 bg-white p-2 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-2'>
      <PetImage id={item.id} image={item.photos} className='w-full' />
      <div className='pt-6'>
        <PetInfo
          item={item}
          classInfoName='font-semibold leading-tight text-gray-900 hover:underline'
          classInfoDescription='text-xs line-clamp-2 hover:line-clamp-none'
          onToggleSavedPet={handleRemoveSavedPet}
        />
      </div>
      <PetButtons
        id={item.id}
        className='mt-4 flex items-end gap-4 lg:col-span-2'
      />
    </article>
  )
}
