import Image from 'next/image'
import PetForm from '../components/PetForm'
import { animalList } from '../mocks/animalsList'
import {
  TbHeart,
  TbShare,
  TbCirclePlus,
  TbBookmark,
  TbMapSearch,
  TbZoomMoney
} from 'react-icons/tb'
import { FaArrowRight } from 'react-icons/fa'

export default function Home () {
  return (
    <main className='lg:p-10 p-5 pt-24 flex flex-col gap-20'>
      <section className='flex flex-col lg:flex-row justify-between items-center gap-5 p-5'>
        <div className='flex-1'>
          <PetForm />
        </div>
        <div className='flex-1 p-10'>
          <img src='https://placedog.net/500' alt='' />
        </div>
      </section>
      <section className='flex flex-col gap-5 lg:flex-row justify-evenly items-center'>
        {/* <div className='flex justify-center items-center w-96 h-96 rounded-full bg-red-700 absolute -start-10 top-14'>
          <div className='w-80 h-80 rounded-full bg-blue-600'></div>
        </div> */}
        <div className='relative border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-xl h-[475px] w-[257px] shadow-xl'>
          <div className='w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute'></div>
          <div className='h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg'></div>
          <div className='h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg'></div>
          <div className='h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg'></div>
          <div className='h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg'></div>
          <div className='rounded-xl overflow-hidden w-[230px] h-[450px] bg-white dark:bg-gray-800'>
            <img
              src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png'
              className='dark:hidden w-[230px] h-[450px]'
              alt=''
            />
            <img
              src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png'
              className='hidden dark:block w-[230px] h-[450px]'
              alt=''
            />
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
                <svg
                  class='-ms-0.5 me-2 h-4 w-4'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-width='2'
                    d='M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z'
                  />
                </svg>
                Filters
                <svg
                  class='-me-0.5 ms-2 h-4 w-4'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='m19 9-7 7-7-7'
                  />
                </svg>
              </button>
              <button
                id='sortDropdownButton1'
                data-dropdown-toggle='dropdownSort1'
                type='button'
                class='flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:w-auto'
              >
                <svg
                  class='-ms-0.5 me-2 h-4 w-4'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M7 4v16M7 4l3 3M7 4 4 7m9-3h6l-6 6h6m-6.5 10 3.5-7 3.5 7M14 18h4'
                  />
                </svg>
                Sort
                <svg
                  class='-me-0.5 ms-2 h-4 w-4'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='m19 9-7 7-7-7'
                  />
                </svg>
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
                            <span class='uppercase me-2 rounded bg-red-100 px-2.5 py-0.5 text-xs font-bold text-red-800'>
                              {item.status}
                            </span>
                          )
                        } else if (item.status === 'Found') {
                          return (
                            <span class='uppercase me-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-bold text-green-800'>
                              {item.status}
                            </span>
                          )
                        } else {
                          return (
                            <span class='uppercase me-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-bold text-blue-800'>
                              {item.status}
                            </span>
                          )
                        }
                      })()}
                      <div class='flex items-center justify-end gap-1'>
                        <span className='text-gray-500'>S/ {item.reward}</span>
                        <button
                          type='button'
                          data-tooltip-target='tooltip-add-to-favorites'
                          class='rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900'
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
                      {item.name} (Dog)
                    </a>
                    <p>{item.description}</p>
                    <div class='mt-2 flex items-center gap-2'>
                      <p class='text-sm font-medium text-gray-900'>
                        Seen {item.dateLastSeen}
                      </p>
                      <p class='text-sm font-medium text-gray-500'>(45d ago)</p>
                    </div>
                    <ul class='mt-2 flex items-center gap-4'>
                      <li class='flex items-center gap-2'>
                        <p class='text-sm font-small text-gray-500'>
                          {item.areaLastSeen}, {item.nearestLandmark},{' '}
                          {item.crossStreet}
                        </p>
                      </li>
                      <li>
                        <button
                          href={`https://www.google.com/maps/search/${item.ddLat}+${item.ddLon}`}
                          class='rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                        >
                          <span class='sr-only'> Localizar </span>
                          <TbMapSearch className='h-4 w-4' />
                        </button>
                      </li>
                    </ul>
                    <div class='mt-4 flex items-center justify-between gap-4'>
                      <p class='text-2xl font-extrabold leading-tight text-gray-900 hidden'>
                        $1,699
                      </p>
                      <button
                        type='button'
                        class='inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300'
                      >
                        <TbCirclePlus className='-ms-2 me-2 h-5 w-5' />
                        Details
                      </button>
                      <button
                        type='button'
                        class='inline-flex items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100'
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

      <section className='lg:px-20 flex flex-col items-center gap-10'>
        <h3 className='text-5xl font-bold max-w-screen-md text-center'>
          Search for <span className='text-red-600'> Lost</span>/
          <span className='text-primary-600'>Found</span> Pets In Your Local
          Area
        </h3>
        <form className='w-full p-5 grid grid-cols-1 md:grid-cols-4 gap-5 place-items-center justify-items-center lg:text-center bg-primary-400/30 rounded-xl lg:rounded-full'>
          <div className='w-full'>
            <label
              htmlFor='name'
              className='block mb-2 text-lg font-bold text-gray-900'
            >
              Name
            </label>
            <div className='relative w-full'>
              <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                <svg
                  className='w-4 h-4 text-gray-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 20'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2'
                  />
                </svg>
              </div>
              <input
                type='text'
                id='name'
                name='name'
                className='ps-8 bg-transparent border border-transparent text-green-900 placeholder-slate-500 text-sm rounded-lg focus:outline-none block w-full p-2.5'
                placeholder='Type Pet Name'
                required
              />
            </div>
          </div>
          <div className='w-full'>
            <label
              htmlFor=''
              className='block mb-2 text-lg font-bold text-gray-900'
            >
              Select an option
            </label>
            <div className='relative w-full'>
              <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                <svg
                  className='w-4 h-4 text-gray-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 20'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2'
                  />
                </svg>
              </div>
              <select className='ps-8 bg-transparent border border-none text-gray-900 text-sm appearance-none rounded-lg block w-full p-2.5 focus:outline-none'>
                <option selected className='text-slate-500'>
                  Choose a country
                </option>
                <option value='US'>United States</option>
                <option value='CA'>Canada</option>
                <option value='FR'>France</option>
                <option value='DE'>Germany</option>
              </select>
            </div>
          </div>
          <div className='w-full'>
            <label
              htmlFor='location'
              className='block mb-2 text-lg font-bold text-gray-900'
            >
              Location
            </label>
            <div className='relative w-full'>
              <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                <svg
                  className='w-4 h-4 text-gray-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 20'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2'
                  />
                </svg>
              </div>
              <input
                type='text'
                id='location'
                name='location'
                className='ps-8 bg-transparent placeholder-slate-500 border-none text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5'
                placeholder='Type Location'
                required
              />
            </div>
          </div>
          <button
            type='submit'
            className='w-20 bg-primary-700 border-none font-bold text-white rounded-md py-4'
          >
            Find Pet
          </button>
        </form>
      </section>
      <section className='w-full flex flex-col items-end'>
        <div className='max-w-screen-lg'>
          <h3 className='text-center text-5xl mb-5 font-bold'>
            Reunite With Your Pet Quickly! Learn How It Works
          </h3>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          <div className=''>
            <img
              src='https://www.pawmaw.com/assets/images/how-it-works/report-pet-image.svg'
              alt=''
            />
            <div className=''>REPORT A PET</div>
            <p className=''>
              Tell us about your lost/found pet; by posting a shout-out on our
              website. By that, you will get concerned people in your
              neighborhoods right on the spot to help search for your pet.
            </p>
          </div>
          <div className=''>
            <img
              src='https://www.pawmaw.com/assets/images/how-it-works/report-pet-image.svg'
              alt=''
            />
            <div className=''>REPORT A PET</div>
            <p className=''>
              Tell us about your lost/found pet; by posting a shout-out on our
              website. By that, you will get concerned people in your
              neighborhoods right on the spot to help search for your pet.
            </p>
          </div>
          <div className=''>
            <img
              src='https://www.pawmaw.com/assets/images/how-it-works/report-pet-image.svg'
              alt=''
            />
            <div className=''>REPORT A PET</div>
            <p className=''>
              Tell us about your lost/found pet; by posting a shout-out on our
              website. By that, you will get concerned people in your
              neighborhoods right on the spot to help search for your pet.
            </p>
          </div>
        </div>
      </section>
      <section className='bg-primary-600 rounded-3xl'>
        <div className='bg-white flex flex-col md:flex-row rounded-3xl'>
          <img
            className='flex-1'
            src='https://pawmaw-images.s3.ap-southeast-1.amazonaws.com/Public/Static-image/dog-image-01.webp'
            alt=''
          />
          <div className='flex-1 text-center p-5 md:p-10'>
            <h3 className='text-4xl md:text-6xl font-bold mb-5'>
              Get Your Pet Back Home
            </h3>
            <p className='text-lg md:text-2xl'>
              Over 10 million dogs and cats are lost or stolen every year. You
              can report your missing pets with PawMaw. We can notify thousands
              nearby within a minute.
            </p>
          </div>
        </div>
        <div className='flex justify-center items-center gap-2 rounded-b-xl text-xl text-center text-white font-bold py-5'>
          Report Lost PeT
          <FaArrowRight />
        </div>
      </section>
    </main>
  )
}
