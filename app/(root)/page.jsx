import PetForm from '../components/PetForm'
import { animalList } from '../mocks/animalsList'
import TimeAgoFrom from './components/TimeAgoFrom'
import {
  TbShare,
  TbCirclePlus,
  TbBookmark,
  TbMapSearch,
  TbReportMoney,
  TbFilter,
  TbSortAscendingShapes,
  TbChevronDown
} from 'react-icons/tb'
import { FaListCheck, FaPaperPlane, FaPeopleGroup } from 'react-icons/fa6'
import { IoCreateSharp } from 'react-icons/io5'
import SearchPet from './components/SearchPet'
import HowItWorksComponent from './components/HowItWorksComponent'
import PetBackHome from './components/PetBackHome'

export default function Home () {
  return (
    <div className='lg:p-10 p-5 pt-15 flex flex-col gap-20'>
      <section className='flex flex-col lg:flex-row justify-between items-center gap-5 p-5'>
        <div className='flex-1'>
          <PetForm />
        </div>
        <div className='flex-1 p-10'>
          <img src='/img/lost-pets-banner.webp' alt='Lost pets banner' />
        </div>
      </section>
      <section className='grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2'>
        <div className='relative lg:translate-x-20 w-full h-[280px] md:[480px] lg:h-[580px] flex justify-center items-center'>
          <img
            src='/cell_pet.svg'
            alt='Cell Info PetFinder'
            className='absolute h-full'
          />
          <div className='absolute bg-white h-[250px] w-[250px] lg:h-[520px] lg:w-[520px] rounded-full -z-20 flex justify-center items-center'>
            <div className='bg-red-400 h-[200px] w-[200px] lg:h-[420px] lg:w-[420px] rounded-full -z-10'></div>
          </div>
        </div>
        <div className='relative flex justify-start items-center'>
          <div className='bg-primary-100 absolute w-full h-[420px] md:[300px] lg:[420px] rounded-3xl -translate-y-10 lg:-translate-y-0 lg:-translate-x-44 -z-30'></div>
          <div className=' absolute text-xl md:text-2xl flex flex-col gap-5 font-bold text-gray-700 p-5'>
            <p className='flex gap-2 items-center justify-start'>
              <FaListCheck className='fill-primary-800' /> Create Free Listing
            </p>
            <p className='flex gap-2 items-center justify-start'>
              <FaPaperPlane className='fill-primary-800' /> Free Alert Instantly
            </p>
            <p className='flex gap-2 items-center justify-start'>
              <IoCreateSharp className='fill-primary-800' /> Create Free
              Lost/Found Flyer
            </p>
            <p className='flex gap-2 items-center justify-start'>
              <FaPeopleGroup className='fill-primary-800' /> Reach More People
              In Your Local Area
            </p>
          </div>
        </div>
      </section>

      <section className='bg-gray-50 py-8 antialiased md:py-12'>
        <div className='max-w-screen-lg mx-auto text-center'>
          <h2 className='text-2xl md:text-5xl mb-5 font-bold'>
            When you report a lost/found pet, your post will appear here as
            featured post
          </h2>
          <p className='md:text-2xl text-slate-500'>
            Have lost or found pets in your area? We have featured posts
            available on our website to get more attention from visitors. Over{' '}
            <span className='underline underline-offset-3 decoration-4 decoration-green-400'>
              85% success
            </span>{' '}
            rate finding your lost pets by reaching 1000s of neighbors.
          </p>
        </div>
        <div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
          <div className='mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8'>
            <div>
              <h2 className='mt-3 text-xl font-semibold text-gray-900 sm:text-2xl'>
                {/* <h3 class='mt-3 text-xl font-semibold text-gray-900 sm:text-2xl'> */}
                Pet List
              </h2>
            </div>
            <div className='flex items-center space-x-4'>
              <button
                data-modal-toggle='filterModal'
                data-modal-target='filterModal'
                type='button'
                className='flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:w-auto'
              >
                <TbFilter className='-ms-0.5 me-2 h-4 w-4' />
                Filters
                <TbChevronDown className='-me-0.5 ms-2 h-4 w-4' />
              </button>
              <button
                id='sortDropdownButton1'
                data-dropdown-toggle='dropdownSort1'
                type='button'
                className='flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:w-auto'
              >
                <TbSortAscendingShapes className='-ms-0.5 me-2 h-4 w-4' />
                Sort
                <TbChevronDown className='-me-0.5 ms-2 h-4 w-4' />
              </button>
              <div
                id='dropdownSort1'
                className='z-50 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow'
                data-popper-placement='bottom'
              >
                <ul
                  className='p-2 text-left text-sm font-medium text-gray-500'
                  aria-labelledby='sortDropdownButton'
                >
                  <li>
                    <a
                      href='#'
                      className='group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                    >
                      {' '}
                      The most recent{' '}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4'>
            {animalList.map(item => {
              return (
                <article
                  key={item.id}
                  className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm'
                >
                  <div className='h-56 w-full'>
                    <a href='#'>
                      <img
                        className='mx-auto h-full'
                        src={item.photos}
                        alt=''
                      />
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
                              <span class='uppercase me-2 rounded bg-lime-200 px-2.5 py-0.5 text-xs font-bold text-lime-800'>
                                {item.status}
                              </span>
                              <span class='relative flex h-3 w-3'>
                                <span class='animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75'></span>
                                <span class='relative inline-flex rounded-full h-3 w-3 bg-lime-500'></span>
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
                        <span className='text-gray-500' title='Reward'>
                          {item.reward}
                        </span>
                        <button
                          type='button'
                          data-tooltip-target='tooltip-add-to-favorites'
                          className='rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                          title='Add to Bookmark'
                        >
                          <span className='sr-only'> Add to Bookmark </span>
                          <TbBookmark className='h-5 w-5' />
                        </button>
                      </div>
                    </div>
                    <a
                      href='#'
                      className='text-lg font-semibold leading-tight text-gray-900 hover:underline'
                    >
                      <h4>
                        {item.name} ({item.specie._path.segments[1]})
                      </h4>
                    </a>
                    <p>{item.description}</p>
                    <div className='mt-2 flex items-center gap-2'>
                      <p className='text-sm font-medium text-gray-900'>
                        Seen on {item.dateLastSeen}
                      </p>
                      <p className='text-sm font-medium text-gray-500'>
                        (<TimeAgoFrom date={item.dateLastSeen} /> ago)
                      </p>
                    </div>
                    <ul className='mt-2 flex items-center gap-2'>
                      <li>
                        <p className='text-sm font-small text-gray-500'>
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
                    <div className='mt-4 flex items-center justify-between gap-4'>
                      <p className='text-2xl font-extrabold leading-tight text-gray-900 hidden'>
                        $1,699
                      </p>
                      <button
                        type='button'
                        className='w-full inline-flex justify-center items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300'
                      >
                        <TbCirclePlus className='-ms-2 me-2 h-5 w-5' />
                        Details
                      </button>
                      <button
                        type='button'
                        className='w-full inline-flex justify-center items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100'
                      >
                        <TbShare className='-ms-2 me-2 h-5 w-5' />
                        Share
                      </button>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
          <div className='w-full text-center'>
            <button
              type='button'
              className='rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100'
            >
              Show more
            </button>
          </div>
        </div>
      </section>
      <section className='lg:px-20 flex flex-col items-center gap-10'>
        <h3 className='text-5xl font-bold max-w-screen-md text-center'>
          Search for <span className='text-red-600'> Lost</span>/
          <span className='text-primary-600'>Found</span> Pets in your local
          area
        </h3>
        <SearchPet />
      </section>
      <HowItWorksComponent />
      <PetBackHome />
    </div>
  )
}
