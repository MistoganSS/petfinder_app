import React from 'react'

export default function AboutUs () {
  return (
    <div className='flex flex-col gap-11 justify-center items-center p-10 max-w-screen-lg mx-auto text-gray-800'>
      <img src='/about-us.svg' alt='' />
      <h1 className='text-3xl md:text-5xl font-bold'>
        About <span className='text-primary-600'> PetFinder</span>
      </h1>
      <p className='text-center text-xl'>
        Welcome to PetFinder, your reliable partner in reuniting lost pets with
        their families and finding new homes for pets in need. At PetFinder, we
        understand the distress that comes with a missing pet, and we are
        dedicated to helping you every step of the way.
      </p>
      <p className='text-center text-xl'>
        Founded in 2011, PetFinder has become a trusted platform for pet owners
        and animal lovers. Our mission is to provide a seamless and supportive
        experience for those looking to find their lost pets or adopt a new
        companion.
      </p>
      <h2 className='text-3xl md:text-5xl font-bold'>Our Mission</h2>
      <ul className='text-xl list-disc p-5'>
        <li className='mb-3'>
          Reunite Lost Pets: We work tirelessly to connect lost pets with their
          owners through our extensive network and user-friendly platform.
        </li>
        <li className='mb-3'>
          Promote Responsible Pet Ownership: By offering resources and support,
          we aim to educate the community on the importance of pet care and
          safety.
        </li>
        <li>
          Facilitate Adoptions: For pets that cannot be reunited with their
          owners, we help find them loving new homes.
        </li>
      </ul>
      <h2 className='text-3xl md:text-5xl font-bold'>Why Choose PetFinder?</h2>
      <ul className='text-xl list-disc p-5'>
        <li className='mb-3'>
          Comprehensive Database: Access thousands of listings for lost and
          found pets from across the country.
        </li>
        <li className='mb-3'>
          Easy to Use: Our intuitive search and alert system makes it simple to
          post and find lost pets.
        </li>
        <li>
          Community Support: Join a community of pet owners and animal lovers
          dedicated to helping each other.
        </li>
      </ul>
      <h2 className='text-3xl md:text-5xl font-bold'>Get Involved</h2>
      <ul className='text-xl list-disc p-5'>
        <li className='mb-3'>
          Report a Lost Pet: Quickly and easily post about your lost pet to
          alert the community.
        </li>
        <li>
          Report a Found Pet: Help lost pets reunite with their families by
          reporting found animals.
        </li>
      </ul>

      <p className='text-xl'>
        At PetFinder, we are more than just a platform – we are a community of
        compassionate individuals working together to make a difference. Join us
        in our mission to reunite lost pets with their families and find new
        homes for those in need. Together, we can make sure every pet finds its
        way home.
      </p>
    </div>
  )
}
