import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

export default function PetBackHome () {
  return (
    <section className='bg-primary-600 rounded-3xl'>
      <div className='bg-white flex flex-col md:flex-row rounded-full'>
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
            Over 10 million dogs and cats are lost or stolen every year. You can
            report your missing pets with PetFinder. We can notify thousands
            nearby within a minute.
          </p>
        </div>
      </div>
      <Link
        href='/'
        className='flex justify-center items-center gap-2 rounded-b-xl text-xl text-center text-white font-bold py-5'
      >
        Report Lost Pet
        <FaArrowRight />
      </Link>
    </section>
  )
}
