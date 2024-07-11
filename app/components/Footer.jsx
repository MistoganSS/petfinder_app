import React from 'react'

export default function Footer () {
  return (
    <div>
      <img src='/footer_img.svg' alt='' />
      <div className='bg-[#B81F3B] text-white p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 md:gap-10'>
        <div className='md:col-span-2 '>
          <h3 className='text-2xl font-bold mb-5'>PetFind</h3>
          <p className='text-[#d8d8d8] text-lg mb-5'>
            PawMaw is actively helping to search for your lost pets in your
            local area. Report your lost/found pets here and send a free alert
            instantly.
          </p>
        </div>
        <div className=''>
          <h3 className='text-xl font-bold underline mb-5'>Quick Links</h3>
          <ul className='text-[#d8d8d8] list-disc px-5 flex flex-col gap-2'>
            <li>Blog</li>
            <li>FAQ</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
            <li>Join our network</li>
          </ul>
        </div>
        <div className=''>
          <h3 className='text-xl font-bold underline mb-5'>Get In Touch</h3>
          <p>info@petfind.com</p>
          <p className=''>sales@petfind.com</p>
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
                  class='bg-transparent rounded-full border border-gray-300 text-white text-sm focus:outline-none block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Enter Email'
                  required
                />
                <button
                  type='submit'
                  class='absolute inset-y-0 end-0 pe-3 py-2.5 px-3 ms-2 rounded-full text-sm font-medium text-[#B81F3B] bg-white'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className='px-5'>
            <img src='/icon-facebook.svg' alt='' />
          </div>
        </div>
      </div>
      <div className='bg-[#DB1D41] text-center py-5 px-2 text-white'>
        Terms of our Service | Copyright © 2024 PetFind
      </div>
    </div>
  )
}
