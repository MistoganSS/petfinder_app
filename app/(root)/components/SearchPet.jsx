import React from 'react'
const URL_API =
  'https://us-central1-pets-api-f1d89.cloudfunctions.net/app/api/v1'
const getSpecies = async () => {
  const response = await fetch(`${URL_API}/species`)
  if (!response.ok) throw new Error('Error HTTP: ', response.status)
  const data = await response.json()
  return data
}
export default async function SearchPet () {
  const species = await getSpecies()
  return (
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
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
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
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2'
              />
            </svg>
          </div>
          <select
            defaultValue='0'
            className='ps-8 bg-transparent border border-none text-gray-900 text-sm appearance-none rounded-lg block w-full p-2.5 focus:outline-none'
          >
            <option disabled value='0' className='text-slate-500'>
              Choose a Specie
            </option>
            {species.map(({ id, name }) => {
              return (
                <option key={id} value={name}>
                  {name}
                </option>
              )
            })}
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
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
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
  )
}
