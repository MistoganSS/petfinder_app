import PetForm from '../components/PetForm'
import { FaListCheck, FaPaperPlane, FaPeopleGroup } from 'react-icons/fa6'
import { IoCreateSharp } from 'react-icons/io5'
import SearchPet from './components/SearchPet'
import HowItWorksComponent from './components/HowItWorksComponent'
import PetBackHome from './components/PetBackHome'
import PetCatalog from './components/PetCatalog'

export default function Home() {
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
        <PetCatalog />
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
