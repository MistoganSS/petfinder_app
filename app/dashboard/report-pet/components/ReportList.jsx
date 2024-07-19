'use client'
import ConvertTimestampToDate, {
  TimeElapsed
} from '@/app/components/TimestampHandling'
import Link from 'next/link'
import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa6'
import { config } from '@/config'
import Swal from 'sweetalert2'
import { deleteFetch } from '../service/ReportService'

export default function ReportList ({ reports }) {
  const handleDelete = id => {
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d97706',
        cancelButtonColor: '#df1d42',
        confirmButtonText: 'Yes, delete it!'
      }).then(result => {
        if (result.isConfirmed) {
          deleteFetch(id).then(res => {
            if (res) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your report Pet has been deleted.',
                icon: 'success'
              })
            }
          })
        }
      })
    } catch (error) {
      console.log('Error deleting:', error)
    }
  }
  if (reports.length === 0) {
    return <div className='text-center'>No pet reports.</div>
  }
  return (
    <div className='flex flex-col gap-3'>
      {reports.map(item => {
        return (
          <article
            key={item.id}
            className='flex gap-2 w-full border shadow-sm px-4 py-3 rounded-md items-center'
          >
            <img
              src={
                item.photos != '' ? item.photos : config.DEFAULT_PET_IMAGE_URL
              }
              className='h-20 rounded-full'
              alt='Photos'
            />
            <div className='w-full'>
              <div className='flex flex-wrap justify-between w-full'>
                <div>
                  <Link
                    href={`/pet-catalog/${item.id}`}
                    className='font-bold hover:underline'
                  >
                    {item.name} ({item.gender})
                  </Link>
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
              <div className='flex flex-wrap justify-between items-center'>
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
                    onClick={() => handleDelete(item.id)}
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
