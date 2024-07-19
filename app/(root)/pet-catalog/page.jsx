'use client'
import React, { useState, useEffect } from 'react'
import { TbCirclePlus, TbCirclePlus2, TbFilter } from 'react-icons/tb'
import PetFilter from '../components/PetFilter'
import PetFilterMobile from '../components/PetFilterMobile'
import PetList from '../components/PetList'

const pageOptions = [
  { name: '2 items per view', value: '2' },
  { name: '4 items per view', value: '4' },
  { name: '8 items per view', value: '8' }
]

const CatalogPetsPage = () => {
  const [filteredPets, setFilteredPets] = useState([])
  const [itemsInView, setItemsInView] = useState(0)
  const [limit, setLimit] = useState(2)
  const [lastDoc, setLastDoc] = useState(null)
  const [loading, setLoading] = useState(false)
  const [loadMore, setLoadMore] = useState(0)

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const [status, setStatus] = useState([])
  const [species, setSpecies] = useState([])
  const [genders, setGenders] = useState([])
  const [reward, setReward] = useState(0)
  const [startLastSeen, setStartLastSeen] = useState('')
  const [endLastSeen, setEndLastSeen] = useState('')

  useEffect(() => {
    async function fetchPets () {
      setLoading(true)
      const query = new URLSearchParams()

      if (limit) query.append('limit', limit)
      if (lastDoc) query.append('lastDoc', lastDoc)
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

        if (lastDoc) {
          // Add items
          setFilteredPets(prevPets => [...prevPets, ...data])
        } else {
          // Add first items
          setFilteredPets(data)
        }

        // Update last item
        if (data.length > 0) {
          setLastDoc(data[data.length - 1].id)
        } else {
          setLastDoc(null)
        }

        setItemsInView(filteredPets.length + data.length)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching pets:', error.message)
        setLoading(false)
      }
    }

    fetchPets()
  }, [status, species, reward, genders, startLastSeen, endLastSeen, loadMore])

  const handlePagesChange = event => {
    setLimit(parseInt(event.target.value))
  }

  const handleLoadMore = () => {
    setLoadMore(loadMore + 1)
  }

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
                Showing {itemsInView} reports
              </div>
              <select
                className='block px-4 pe-9 border-gray-200 rounded-full text-sm disabled:opacity-50 disabled:pointer-events-none'
                id='limitSelect'
                value={limit}
                onChange={handlePagesChange}
              >
                {pageOptions.map(option => (
                  <option value={option.value}>{option.name}</option>
                ))}
              </select>
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
                setFilteredPets={setFilteredPets}
              />

              {/* Pet grid */}
              <div className='lg:col-span-3'>
                <PetList filteredPets={filteredPets} />

                <div className='w-full text-center'>
                  <button
                    onClick={handleLoadMore}
                    disabled={loading}
                    type='button'
                    className='py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-primary-700 focus:text-primary-700 inline-flex items-center'
                  >
                    {loading ? (
                      <TbCirclePlus2
                        aria-hidden='true'
                        className='inline w-5 h-5 me-3 animate-spin'
                      />
                    ) : (
                      <TbCirclePlus
                        aria-hidden='true'
                        className='inline w-5 h-5 me-3 '
                      />
                    )}
                    {loading ? 'Loading...' : 'Show more'}
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default CatalogPetsPage
