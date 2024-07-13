import MetaEntity from '@/app/components/MetaEntity'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { TbArrowRight } from 'react-icons/tb'

export default function PetBackHome () {
  return (
    <section className='bg-[#df1d42] rounded-3xl'>
      <div className='bg-gradient-to-tr from-secondary-500 to-teal-50 flex flex-col justify-around items-center lg:flex-row rounded-3xl'>
        <img
          className='flex-1 rounded-3xl'
          src='/img/dog-image-01.png'
          alt='Dog'
        />
        <div className='flex-1 text-center p-5 md:p-10'>
          <h3 className='text-4xl md:text-6xl font-bold mb-5'>
            Get Your Pet Back Home
          </h3>
          <p className='text-lg md:text-2xl'>
            Over{' '}
            <span className='underline underline-offset-2 decoration-4 decoration-red-500'>
              10 million
            </span>{' '}
            dogs and cats are lost or stolen every year. You can report your
            missing pets with <MetaEntity metaKey='name' />. We can notify
            thousands nearby within a minute.
          </p>
        </div>
      </div>
      <Link
        href='/'
        className='flex justify-center items-center gap-5 rounded-b-xl text-xl text-center text-white font-bold py-5'
      >
        Report Lost Pet
        <TbArrowRight className='animate-ping ' />
      </Link>
      {/*<section className='bg-red-700 rounded-3xl'>
    //   <div className='bg-gradient-to-tr from-emerald-700 to-teal-50 flex flex-col md:flex-row rounded-3xl'>
    //     <img className='flex-1 rounded-3xl' src='/img/dog-image-01.png' alt='Dog' />
    //     <div className='flex flex-col text-center md:text-right justify-center p-5 md:p-10'>
    //       <h3 className='text-4xl md:text-5xl font-extrabold mb-5 text-emerald-950'>
    //         Get your pet back home
    //       </h3>
    //       <p className='text-lg md:text-2xl'>
    //         Over <span className='underline underline-offset-3 decoration-8 decoration-red-500'>10 million</span> dogs and cats are lost or stolen every year. You
    //         can report your missing pets with <MetaEntity metaKey="name" />. We can notify
    //         thousands nearby within a minute.
    //       </p>
    //     </div>
    //   </div>
    //   <div className='flex gap-5 justify-center items-center rounded-b-xl text-xl text-center text-white font-bold py-5'>
    //     Report Lost Pet
    //     <TbArrowRight className='animate-ping ' />
    //   </div>
    // </section>*/}
    </section>
  )
}
