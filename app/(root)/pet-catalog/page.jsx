'use client'
import React, { useState, useEffect } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { TbChevronDown, TbEyeEdit, TbFilter } from 'react-icons/tb'
import PetFilter from '../components/PetFilter'
import PetFilterMobile from '../components/PetFilterMobile'
import PetList from '../components/PetList'

const pageOptions = [
  { name: '10 items per page', href: '#', current: true },
  { name: '25 items per page', href: '#', current: false },
  { name: '50 items per page', href: '#', current: false },
  { name: '100 items per page', href: '#', current: false }
]

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

const CatalogPetsPage = () => {
  const [filteredPets, setFilteredPets] = useState([])
  const [totalPets, setTotalPets] = useState(0)
  const [limit, setLimit] = useState(10)

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const [status, setStatus] = useState([])
  const [species, setSpecies] = useState([])
  const [genders, setGenders] = useState([])
  const [reward, setReward] = useState(0)
  const [startLastSeen, setStartLastSeen] = useState('')
  const [endLastSeen, setEndLastSeen] = useState('')

  useEffect(() => {
    async function fetchPets () {
      const query = new URLSearchParams()

      if (limit) query.append('limit', limit)
      if (reward) query.append('reward', reward)
      if (startLastSeen) query.append('dateStart', startLastSeen)
      if (endLastSeen) query.append('dateEnd', endLastSeen)

      if (status.length > 0) {
        query.set('status', status.join(','))
      }

      if (species.length > 0) {
        query.set('specie', species.join(','))
      }

      if (genders.length > 0) {
        query.set('gender', genders.join(','))
      }

      try {
        const url = `https://us-central1-pets-api-f1d89.cloudfunctions.net/app/api/v1/animals?${query.toString()}`

        const response = await fetch(url)

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()
        setFilteredPets(data)
        setTotalPets(100)
      } catch (error) {
        console.error('Error fetching animals:', error.message)
      }
    }
    fetchPets()
  }, [status, species, reward, genders, startLastSeen, endLastSeen])

  return (
    <div className='bg-white'>
      <div>
        {/* Mobile filter dialog */}

        {/*  <PetFilterMobile
          status={status}
          setStatus={setStatus}
          species={species}
          setSpecies={setSpecies}
          reward={reward}
          setReward={setReward}
          genders={genders}
          setGenders={setGenders}
          mobileFiltersOpen={mobileFiltersOpen}
          setMobileFiltersOpen={setMobileFiltersOpen}
        /> */}

        <main className='mx-auto px-4 sm:px-4'>
          <div className='flex items-baseline justify-between border-b border-gray-200 pb-6 pt-6'>
            <h1 className='text-3xl font-bold tracking-tight text-gray-900'>
              Lost/Found
            </h1>
            <div className='flex items-center gap-4'>
              <div className='group inline-flex justify-center text-sm font-medium text-gray-500'>
                {totalPets} reports of {1000}
              </div>
              <Menu as='div' className='relative inline-block text-left'>
                <div>
                  <MenuButton className='group inline-flex justify-center align-middle text-sm font-medium text-gray-700 hover:text-gray-900'>
                    <TbEyeEdit aria-hidden='true' className='h-5 w-5 me-1' />
                    Pages
                    <TbChevronDown
                      aria-hidden='true'
                      className='-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className='absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'
                >
                  <div className='py-1'>
                    {pageOptions.map(option => (
                      <MenuItem key={option.name}>
                        <a
                          href={option.href}
                          className={classNames(
                            option.current
                              ? 'font-medium text-gray-900'
                              : 'text-gray-500',
                            'block px-4 py-2 text-sm data-[focus]:bg-gray-100'
                          )}
                        >
                          {option.name}
                        </a>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button
                type='button'
                onClick={() => setMobileFiltersOpen(true)}
                className='-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden'
              >
                <span className='sr-only'>Filters</span>
                <TbFilter aria-hidden='true' className='h-5 w-5' />
              </button>
            </div>
          </div>

          <section aria-labelledby='pets-heading' className='pb-24 pt-6'>
            <h2 id='pets-heading' className='sr-only'>
              Pets
            </h2>

            <div className='grid grid-cols-1 gap-x-4 gap-y-10 lg:grid-cols-4'>
              {/* Filters */}
              <PetFilter
                setStatus={setStatus}
                setSpecies={setSpecies}
                setReward={setReward}
                setGenders={setGenders}
                setStartLastSeen={setStartLastSeen}
                setEndLastSeen={setEndLastSeen}
              />

              {/* Pet grid */}
              <div className='lg:col-span-3'>
                <PetList filteredPets={filteredPets} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default CatalogPetsPage
