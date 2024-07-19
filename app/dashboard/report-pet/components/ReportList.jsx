'use client'
import ConvertTimestampToDate, { TimeElapsed } from '@/app/components/TimestampHandling'
import Link from 'next/link'
import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa6'
import config from '@/config'

async function deleteFetch(id) {
  const url = ''

  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  })

  if (!response.ok) {
    throw new Error('Error deleting')
  }
}

async function hendleDelete(id) {
  try {
    const data = await deleteFetch(id)
  } catch (error) {
    console.log('Error deleting:', error)
  }
}

export default function ReportList({ reports }) {
  return (
    <div className='flex flex-col gap-3'>
      {reports.map(item => {
        return (
          <article
            key={item.id}
            className='flex gap-2 w-full border shadow-sm px-4 py-3 rounded-md items-center'
          >
            <img src={item.photos != '' ? item.photos : config.DEFAULT_PET_IMAGE_URL} className='h-20 rounded-full' alt='Photos' />
            <div className='w-full'>
              <div className='flex justify-between w-full'>
                <div>
                  <h4 className='font-bold'>
                    {item.name} ({item.gender})
                  </h4>
                  <p>{item.description}</p>
                </div>
                <div>
                  <p className='text-xs font-medium text-gray-900'>
                    Seen on{' '}
                    <ConvertTimestampToDate
                      timestamp={item.dateLastSeen._seconds}
                    />{' '}
                    <span className='text-gray-500'>
                      (<TimeElapsed timestamp={item.dateLastSeen._seconds} />{' '}
                      ago)
                    </span>
                  </p>
                </div>
              </div>
              <div className='flex justify-between items-center'>
                <p>
                  {item.areaLastSeen}-{item.nearestLandmark}, {item.crossStreet}
                </p>
                <div className='flex gap-2'>
                  <Link
                    href={`/dashboard/report-pet/edit/${item.id}`}
                    type='button'
                    className='w-full inline-flex justify-center items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100'
                  >
                    <FaEdit className='-ms-2 me-2 h-4 w-4' />
                    Edit
                  </Link>
                  <button
                    type='button'
                    onClick={hendleDelete}
                    className='w-full inline-flex justify-center items-center rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300'
                  >
                    <FaTrash className='-ms-2 me-2 h-4 w-4' />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
