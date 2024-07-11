import Image from 'next/image'
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
import { FaArrowRight } from 'react-icons/fa'
import SearchPet from './components/SearchPet'

export default function Home() {
  return (
    <main className='lg:p-10 p-5 pt-15 flex flex-col gap-20'>
      <section className='flex flex-col lg:flex-row justify-between items-center gap-5 p-5'>
        <div className='flex-1'>
          <PetForm />
        </div>
        <div className='flex-1 p-10'>
          <img src="/img/home_banner_image_mobile.jpg" alt="Lost pets banner" />
        </div>
      </section>
      <section className='flex flex-col gap-5 lg:flex-row justify-evenly items-center'>
        {/* <div className='flex justify-center items-center w-96 h-96 rounded-full bg-red-700 absolute -start-10 top-14'>
          <div className='w-80 h-80 rounded-full bg-blue-600'></div>
        </div> */}
        <div className='relative border-gray-800 bg-gray-800 border-[14px] rounded-xl h-[475px] w-[257px] shadow-xl'>
          <div className='w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute'></div>
          <div className='h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg'></div>
          <div className='h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg'></div>
          <div className='h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg'></div>
          <div className='h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg'></div>
          <div className='rounded-xl overflow-hidden w-[230px] h-[450px] bg-white'>
            <img src='/img/mockup-1-light.png' className='w-[230px] h-[450px]' alt=''/>
          </div>
        </div>
        <div className='text-xl flex flex-col gap-3 font-bold p-5'>
          <p>Create Free Listing</p>
          <p>Free Alert Instantly</p>
          <p>Create Free Lost/Found Flyer</p>
          <p>Reach More People In Your Local Area</p>
        </div>
      </section>

      <section class='bg-gray-50 py-8 antialiased md:py-12'>
        <div className='max-w-screen-lg mx-auto text-center'>
          <h2 className=' text-5xl mb-5 font-bold'>
            When you report a lost/found pet, your post will appear here as
            featured post
          </h2>
          <p className='text-2xl text-slate-500'>
            Have lost or found pets in your area? We have featured posts
            available on our website to get more attention from visitors. Over
            85% success rate finding your lost pets by reaching 1000s of
            neighbors.
          </p>
        </div>
        <div class='mx-auto max-w-screen-xl px-4 2xl:px-0'>
          <div class='mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8'>
            <div>
              <h2 class='mt-3 text-xl font-semibold text-gray-900 sm:text-2xl'>
                Pet List
              </h2>
            </div>
            <div class='flex items-center space-x-4'>
              <button
                data-modal-toggle='filterModal'
                data-modal-target='filterModal'
                type='button'
                class='flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:w-auto'
              >
                <TbFilter className='-ms-0.5 me-2 h-4 w-4' />
                Filters
                <TbChevronDown className='-me-0.5 ms-2 h-4 w-4' />
              </button>
              <button
                id='sortDropdownButton1'
                data-dropdown-toggle='dropdownSort1'
                type='button'
                class='flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:w-auto'
              >
                <TbSortAscendingShapes className='-ms-0.5 me-2 h-4 w-4' />
                Sort
                <TbChevronDown className='-me-0.5 ms-2 h-4 w-4' />
              </button>
              <div
                id='dropdownSort1'
                class='z-50 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow'
                data-popper-placement='bottom'
              >
                <ul
                  class='p-2 text-left text-sm font-medium text-gray-500'
                  aria-labelledby='sortDropdownButton'
                >
                  <li>
                    <a
                      href='#'
                      class='group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                    >
                      {' '}
                      The most recent{' '}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class='mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4'>
            {animalList.map(item => {
              return (
                <article
                  key={item.id}
                  class='rounded-lg border border-gray-200 bg-white p-6 shadow-sm'
                >
                  <div class='h-56 w-full'>
                    <a href='#'>
                      <img class='mx-auto h-full' src={item.photos} alt='' />
                    </a>
                  </div>
                  <div class='pt-6'>
                    <div class='mb-4 flex items-center justify-between gap-4'>
                      {(() => {
                        if (item.status === 'Lost') {
                          return (
                            <span class='uppercase me-2 rounded bg-red-200 px-2.5 py-0.5 text-xs font-bold text-red-800'>
                              {item.status}
                            </span>
                          )
                        } else if (item.status === 'Found') {
                          return (
                            <span class='uppercase me-2 rounded bg-lime-200 px-2.5 py-0.5 text-xs font-bold text-lime-800'>
                              {item.status}
                            </span>
                          )
                        } else {
                          return (
                            <span class='uppercase me-2 rounded bg-primary-200 px-2.5 py-0.5 text-xs font-bold text-primary-800'>
                              {item.status}
                            </span>
                          )
                        }
                      })()}
                      <div class='flex items-center justify-end gap-1'>
                        <span className='text-gray-500'><TbReportMoney /></span>
                        <span className='text-gray-500' title='Reward'>{item.reward}</span>
                        <button
                          type='button'
                          data-tooltip-target='tooltip-add-to-favorites'
                          class='rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                          title='Add to Bookmark'
                        >
                          <span class='sr-only'> Add to Bookmark </span>
                          <TbBookmark className='h-5 w-5' />
                        </button>
                      </div>
                    </div>
                    <a
                      href='#'
                      class='text-lg font-semibold leading-tight text-gray-900 hover:underline'
                    >
                      <h3>{item.name} ({item.specie._path.segments[1]})</h3>
                    </a>
                    <p>{item.description}</p>
                    <div class='mt-2 flex items-center gap-2'>
                      <p class='text-sm font-medium text-gray-900'>
                        Seen on {item.dateLastSeen}
                      </p>
                      <p class='text-sm font-medium text-gray-500'>(<TimeAgoFrom date={item.dateLastSeen} /> ago)</p>
                    </div>
                    <ul class='mt-2 flex items-center gap-2'>
                      <li>
                        <p class='text-sm font-small text-gray-500'>
                          <b>{item.areaLastSeen}</b> · {item.nearestLandmark}, {item.crossStreet}
                        </p>
                      </li>
                      <li className='rounded-lg hover:bg-gray-100 p-2'>
                        <a
                          href={`https://www.google.com/maps/search/${item.ddLat}+${item.ddLon}`}
                          class='text-gray-500 hover:text-gray-900'
                          title='Show un maps'
                          target='_blank'
                        >
                          <span class='sr-only'> Localizar </span>
                          <TbMapSearch className='h-4 w-4' />
                        </a>
                      </li>
                    </ul>
                    <div class='mt-4 flex items-center justify-between gap-4'>
                      <p class='text-2xl font-extrabold leading-tight text-gray-900 hidden'>
                        $1,699
                      </p>
                      <button
                        type='button'
                        class='w-full inline-flex justify-center items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300'
                      >
                        <TbCirclePlus className='-ms-2 me-2 h-5 w-5' />
                        Details
                      </button>
                      <button
                        type='button'
                        class='w-full inline-flex justify-center items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100'
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
          <div class='w-full text-center'>
            <button
              type='button'
              class='rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100'
            >
              Show more
            </button>
          </div>
        </div>
      </section>

      <SearchPet />
      <section className='w-full flex flex-col items-end'>
        <div className='max-w-screen-lg mx-auto'>
          <h3 className='text-center text-5xl mb-5 font-bold'>
            Reunite With Your Pet Quickly! Learn How It Works
          </h3>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
          <div className='flex flex-col gap-3'>
            <img
              src='/img/report-pet-image.svg'
              alt=''
            />
            <div className='text-2xl font-bold text-center py-2 bg-red-600 text-white rounded-full'>
              REPORT
            </div>
            <p className='text-center'>
              Tell us about your lost/found pet; by posting a shout-out on our
              website. By that, you will get concerned people in your
              neighborhoods right on the spot to help search for your pet.
            </p>
          </div>
          <div className='flex flex-col gap-3'>
            <img
              src='/img/report-pet-image.svg'
              alt=''
            />
            <div className='text-2xl font-bold text-center py-2 bg-secondary-600 text-white rounded-full'>
              PROMOTE
            </div>
            <p className='text-center'>
              PetFinder has a feature called PetFinder Alert - by activating the
              alert, you can make your search effort highly effective and reach
              thousands of people to the residents of the area where your pet
              went missing.
            </p>
          </div>
          <div className='flex flex-col gap-3'>
            <img
              src='/img/report-pet-image.svg'
              alt=''
            />
            <div className='text-2xl font-bold text-center py-2 bg-primary-600 text-white rounded-full'>
              REUNITED
            </div>
            <p className='text-center'>
              We are known for what we do! Every day we help distressed pet
              owners to find their lost, scared, and often hungry pets. And it
              has always been an atmosphere of cheers and happiness, every time
              we reunited with their beloved one.
            </p>
          </div>
        </div>
      </section>
      <section className='bg-primary-600 rounded-3xl'>
        <div className='bg-primary-100 flex flex-col md:flex-row rounded-3xl'>
          <img className='flex-1 rounded-3xl' src='/img/dog-image-01.png' alt='Dog' />
          <div className='flex flex-col text-center md:text-right justify-center p-5 md:p-10'>
            <h3 className='text-3xl md:text-5xl font-bold mb-5'>
              Get Your Pet Back Home
            </h3>
            <p className='text-lg md:text-2xl'>
              Over <b>10 million</b> dogs and cats are lost or stolen every year. You
              can report your missing pets with PetFinder. We can notify
              thousands nearby within a minute.
            </p>
          </div>
        </div>
        <div className='flex justify-center items-center gap-2 rounded-b-xl text-xl text-center text-white font-bold py-5 hover:gap-4'>
          Report Lost Pet
          <FaArrowRight />
        </div>
      </section>
    </main>
  )
}
