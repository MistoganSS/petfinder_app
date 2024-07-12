import React from 'react'
import {
  TbBrandInstagram,
  TbBrandX,
  TbBrandYoutubeFilled
} from 'react-icons/tb'
import { MdOutlineMail } from 'react-icons/md'
import { FaFacebook } from 'react-icons/fa'

export default function Footer () {
  return (
    <div className='mt-10'>
      <img src='/img/footer_img.svg' alt='Footer Banner' />
      <div className='bg-primary-700 text-white p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 md:gap-10'>
        <div className='md:col-span-2 '>
          <img
            src='/petfinder.svg'
            className='h-10 mb-4 invert brightness-0'
            alt='PetFind'
          />
          <p className='text-orange-200 text-lg mb-5'>
            PetFinder is actively helping to search for your lost pets in your
            local area. Report your lost/found pets here and send a free alert
            instantly.
          </p>
        </div>
        <div className=''>
          <h3 className='text-xl font-bold underline mb-5'>Quick Links</h3>
          <ul className='text-orange-200 list-disc px-5 flex flex-col gap-2'>
            <li>FAQ</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
            <li>Join our network</li>
          </ul>
        </div>
        <div className=''>
          <h3 className='text-xl font-bold underline mb-5'>Get In Touch</h3>
          <p className='flex items-center gap-1'>
            <MdOutlineMail /> info@petfinder.com
          </p>
          <p className='flex items-center gap-1'>
            <MdOutlineMail /> sales@petfinder.com
          </p>
        </div>
        <div className='md:col-span-2'>
          <h3 className='text-xl font-bold underline mb-5'>
            Sign Up For Newsletter
          </h3>
          <div className='px-5 mb-5'>
            <form>
              <div class='relative'>
                <input
                  type='text'
                  id='voice-search'
                  class='bg-transparent rounded-full border-2 ps-5 placeholder:font-bold border-primary-800 text-red text-sm placeholder-primary-900 focus:text-white focus:outline-none block w-full p-2.5'
                  placeholder='Enter Email'
                  required
                />
                <button
                  type='submit'
                  class='absolute inset-y-0 end-0 py-2.5 px-6 ms-2 rounded-full text-sm font-bold text-white bg-primary-800 hover:bg-primary-900'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className='px-5 flex gap-6 justify-center items-center'>
            <a href='#'>
              <FaFacebook className='h-6 w-6' />
            </a>
            <a href='#'>
              <TbBrandX className='h-6 w-6' />
            </a>
            <a href='#'>
              <TbBrandInstagram className='h-6 w-6' />
            </a>
            <a href='#'>
              <TbBrandYoutubeFilled className='h-6 w-6' />
            </a>
          </div>
        </div>
      </div>
      <div className='bg-primary-800 text-center py-2 px-2 text-white'>
        Terms of our Service · © 2024 PetFinder
      </div>
    </div>
  )
}
