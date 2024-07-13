import React from 'react'

export default function HowItWorksComponent () {
  return (
    <section className='w-full flex flex-col items-end'>
      <div className='max-w-screen-lg mx-auto'>
        <h3 className='text-center text-5xl mb-5 font-bold text-gray-700'>
          Reunite With Your Pet Quickly! Learn How It Works
        </h3>
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-20'>
        <div className='flex flex-col gap-3'>
          <img
            src='/report_pet.svg'
            alt='Report Pet in PetFinder'
            className='max-h-80 min-h-80'
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
            src='/promote_pet.svg'
            alt='Promote Pet in PetFinder'
            className='max-h-80 min-h-80'
          />
          <div className='text-2xl font-bold text-center py-2 bg-secondary-600 text-white rounded-full'>
            PROMOTE
          </div>
          <p className='text-center'>
            PetFinder has a feature called PetFinder Alert - by activating the
            alert, you can make your search effort highly effective and reach
            thousands of people to the residents of the area where your pet went
            missing.
          </p>
        </div>
        <div className='flex flex-col gap-3'>
          <img
            src='/reunited_pet.svg'
            alt='Promote Pet in PetFinder'
            className='max-h-80 min-h-80'
          />
          <div className='text-2xl font-bold text-center py-2 bg-primary-600 text-white rounded-full'>
            REUNITED
          </div>
          <p className='text-center'>
            We are known for what we do! Every day we help distressed pet owners
            to find their lost, scared, and often hungry pets. And it has always
            been an atmosphere of cheers and happiness, every time we reunited
            with their beloved one.
          </p>
        </div>
      </div>
    </section>
  )
}
