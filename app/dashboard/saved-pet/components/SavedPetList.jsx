import TimeAgoFrom from '@/app/(root)/components/TimeAgoFrom'
import {
  TbBookmark,
  TbCirclePlus,
  TbMapSearch,
  TbReportMoney,
  TbShare
} from 'react-icons/tb'
import Link from 'next/link'

export default function SavedPetList ({ savedPets, onRemoveSavedPet }) {
  return savedPets ? (
    <>
      {savedPets.length > 0 ? (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 mx-auto'>
          {savedPets.map(item => {
            return (
              <article
                key={item.savedId}
                className='rounded-lg border border-gray-200 bg-white p-2 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-2'
              >
                <div className='h-full w-full'>
                  <a href='#'>
                    <img className='mx-auto h-full' src={item.photos} alt='' />
                  </a>
                </div>
                <div className='pt-6'>
                  <div className='mb-4 flex items-center justify-between gap-4'>
                    {(() => {
                      if (item.status === 'Lost') {
                        return (
                          <span className='uppercase me-2 rounded bg-red-200 px-2.5 py-0.5 text-xs font-bold text-red-800'>
                            {item.status}
                          </span>
                        )
                      } else if (item.status === 'Found') {
                        return (
                          <div className='flex items-center gap-1'>
                            <span className='uppercase me-2 rounded bg-lime-200 px-2.5 py-0.5 text-xs font-bold text-lime-800'>
                              {item.status}
                            </span>
                            <span className='relative flex h-3 w-3'>
                              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75'></span>
                              <span className='relative inline-flex rounded-full h-3 w-3 bg-lime-500'></span>
                            </span>
                          </div>
                        )
                      } else {
                        return (
                          <span className='uppercase me-2 rounded bg-primary-200 px-2.5 py-0.5 text-xs font-bold text-primary-800'>
                            {item.status}
                          </span>
                        )
                      }
                    })()}
                    <div className='flex items-center justify-end gap-1'>
                      <span className='text-gray-500'>
                        <TbReportMoney />
                      </span>
                      <span className='text-gray-500 text-xs' title='Reward'>
                        {item.reward}
                      </span>
                      <button
                        onClick={() => onRemoveSavedPet(item.savedId)}
                        type='button'
                        data-tooltip-target='tooltip-add-to-favorites'
                        className='rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                        title='Remove to Bookmark'
                      >
                        <span className='sr-only'> Remove to Bookmark </span>
                        <TbBookmark className='h-5 w-5 fill-primary-700 text-primary-700 hover:text-primary-800 hover:fill-primary-800' />
                      </button>
                    </div>
                  </div>
                  <a
                    href='#'
                    className='font-semibold leading-tight text-gray-900 hover:underline'
                  >
                    <h4>
                      {item.name} ({item.specie.name})
                    </h4>
                  </a>
                  <p className='text-xs'>{item.description}</p>
                  <div className='mt-2 flex items-center gap-2'>
                    <p className='text-sm font-medium text-gray-900'>
                      Seen on {item.dateLastSeen}
                    </p>
                    <p className='text-xs font-medium text-gray-500'>
                      (<TimeAgoFrom date={item.dateLastSeen} /> ago)
                    </p>
                  </div>
                  <ul className='mt-2 flex items-center gap-2'>
                    <li>
                      <p className='text-xs font-small text-gray-500'>
                        <b>{item.areaLastSeen}</b> · {item.nearestLandmark},{' '}
                        {item.crossStreet}
                      </p>
                    </li>
                    <li className='rounded-lg hover:bg-gray-100 p-2'>
                      <a
                        href={`https://www.google.com/maps/search/${item.ddLat}+${item.ddLon}`}
                        className='text-gray-500 hover:text-gray-900'
                        title='Show un maps'
                        target='_blank'
                      >
                        <span className='sr-only'> Localizar </span>
                        <TbMapSearch className='h-4 w-4' />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='mt-4 flex items-end gap-4 lg:col-span-2'>
                  <Link
                    href={`/pet-catalog/${item.id}`}
                    className='w-full inline-flex justify-center items-center rounded-lg bg-primary-700 px-5 py-2.5 text-xs font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300'
                  >
                    <TbCirclePlus className='-ms-2 me-2 h-5 w-5' />
                    View Details
                  </Link>
                  <button
                    type='button'
                    className='w-full inline-flex justify-center items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100'
                  >
                    <TbShare className='-ms-2 me-2 h-5 w-5' />
                    Share Pet
                  </button>
                </div>
              </article>
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
