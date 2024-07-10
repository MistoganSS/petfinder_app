import Image from 'next/image'
import PetForm from '../components/PetForm'
import { animalList } from '../mocks/animalsList'

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
      <section className='flex flex-col items-end'>
        <div className='max-w-screen-lg'>
          <h2 className='text-right text-5xl mb-5 font-bold'>
            When you report a lost/found pet, your post will appear here as
            featured post
          </h2>
          <p className='text-right text-2xl text-slate-500'>
            Have lost or found pets in your area? We have featured posts
            available on our website to get more attention from visitors. Over
            85% success rate finding your lost pets by reaching 1000s of
            neighbors.
          </p>
        </div>
        <div className='py-5 grid grid-cols-2 lg:grid-cols-5 gap-3'>
          {animalList.map(item => {
            return (
              <article key={item.id} className='bg-red-600 rounded-lg'>
                <div className='p-5'>
                  <img src={item.photos} alt='' />
                  <p className='font-bold'>{item.name}</p>
                  <p className=''>
                    {item.areaLastSeen}, {item.nearestLandmark}
                  </p>
                  <span className='capitalize'>
                    {item.specie._path.segments[1]}
                  </span>
                </div>
              </article>
            )
          })}
        </div>
      </section>
      <section className='lg:px-20 flex flex-col items-center gap-10'>
        <h3 className='text-5xl font-bold max-w-screen-md text-center'>
          Search for <span className='text-red-600'> Lost/Found</span> Pets In
          Your Local Area
        </h3>
        <form className='w-full p-5 grid grid-cols-1 lg:grid-cols-4 gap-5 place-items-center justify-items-center lg:text-center bg-slate-400 rounded-xl lg:rounded-full'>
          <div className='w-full'>
            <label
              htmlFor='name'
              className='block mb-2 text-lg font-bold text-gray-900 dark:text-white'
            >
              Name
            </label>
            <div className='relative w-full'>
              <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                <svg
                  className='w-4 h-4 text-gray-500 dark:text-gray-400'
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
              className='block mb-2 text-lg font-bold text-gray-900 dark:text-white'
            >
              Select an option
            </label>
            <div className='relative w-full'>
              <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                <svg
                  className='w-4 h-4 text-gray-500 dark:text-gray-400'
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
              className='block mb-2 text-lg font-bold text-gray-900 dark:text-white'
            >
              Location
            </label>
            <div className='relative w-full'>
              <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                <svg
                  className='w-4 h-4 text-gray-500 dark:text-gray-400'
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
                className='ps-8 bg-transparent placeholder-slate-500 border-none text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5  dark:shadow-sm-light'
                placeholder='Type Location'
                required
              />
            </div>
          </div>
          <button type='submit' className='w-20 bg-[#df1d42] rounded-md py-4'>
            Find Pet
          </button>
        </form>
      </section>
      <section className='w-full flex flex-col items-end'>
        <div className='max-w-screen-lg'>
          <h3 className='text-right text-5xl mb-5 font-bold'>
            Reunite With Your Pet Quickly! Learn How It Works
          </h3>
        </div>
        <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-5'>
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
    </main>
  )
}
