import Link from 'next/link'
import React from 'react'
import HowItWorksComponent from '../components/HowItWorksComponent'
import PetBackHome from '../components/PetBackHome'

export default function HowItWorks () {
  return (
    <div className='lg:p-10 p-5 pt-15 flex flex-col gap-10 md:gap-20'>
      <section className='p-5 flex flex-col lg:flex-row justify-center items-center'>
        <div className='md:p-10'>
          <h1 className='text-3xl md:text-5xl font-bold mb-5 md:mb-10'>
            <span className='text-primary-600'> PetFinder</span> helps you find
            your missing pet quickly
          </h1>
          <p className='mb-5 md:mb-10 text-lg'>
            You need to act quickly to find your missing pet. Report your lost
            dog, cat, rabbit, and other pets today.
          </p>
          <Link
            href='/'
            className='p-3 border border-primary-600 rounded-lg hover:bg-primary-600 text-primary-700 hover:text-white font-bold '
          >
            Get Started Now
          </Link>
        </div>
        <img src='/how-it-works.svg' alt='How it Work' />
      </section>
      <section className=''>
        <h2 className='text-3xl md:text-5xl font-bold text-gray-700 mb-10'>
          Take A Quick Tour
        </h2>
        <div className='flex flex-col gap-10 md:flex-row items-center justify-center md:justify-around'>
          <div className='flex flex-col items-center gap-3'>
            <img src='/alert-rescue-squad.svg' alt='Alert Rescue Squad' />
            <h3 className='text-2xl font-bold text-gray-700'>
              Alert Rescue Squad
            </h3>
            <p className=''>Shout out to pet lovers around you</p>
            <button className='p-4 rounded-lg text-white bg-primary-700 font-bold'>
              Learn More
            </button>
          </div>
          <div className='flex flex-col items-center gap-3'>
            <img src='/report-lost-pets.svg' alt='Report Lost And Found Pet' />
            <h3 className='text-2xl font-bold text-gray-700'>
              Report Lost And Found Pet
            </h3>
            <p className=''>Enlist your pet on our lost and found database</p>
            <button className='p-4 rounded-lg text-white bg-primary-700 font-bold'>
              Report Pet
            </button>
          </div>
          <div className='flex flex-col items-center gap-3'>
            <img src='/search-lost-pets.svg' alt='Search Lost & Found Pet' />
            <h3 className='text-2xl font-bold text-gray-700'>
              Search Lost & Found Pet
            </h3>
            <p className=''>Search Lost & Found Pet</p>
            <button className='p-4 rounded-lg text-white bg-primary-700 font-bold'>
              Search Pets
            </button>
          </div>
        </div>
      </section>
      <HowItWorksComponent />
      <PetBackHome />
    </div>
  )
}
