import TimeAgoFrom from '@/app/components/TimeAgoFrom'
import Link from 'next/link'
import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

export default function ReportList ({ reports }) {
  return (
    <div className='flex flex-col gap-3'>
      {reports.map(item => {
        return (
          <article
            key={item.id}
            className='flex gap-2 w-full bg-gray-300 p-2 rounded-md items-center'
          >
            <img src={item.photos} className='h-20 rounded-full' alt='Photos' />
            <div className='w-full'>
              <div className='flex justify-between w-full'>
                <div>
                  <h4>
                    {item.name} ({item.gender})
                  </h4>
                  <p>{item.description}</p>
                </div>
                <div>
                  <p className='text-xs font-medium text-gray-900'>
                    Seen on {item.dateLastSeen}{' '}
                    <span className='text-gray-500'>
                      (<TimeAgoFrom date={item.dateLastSeen} /> ago)
                    </span>
                  </p>
                </div>
              </div>
              <div className='flex justify-between items-center'>
                <p>
                  {item.areaLastSeen}-{item.nearestLandmark}, {item.crossStreet}
                </p>
                <div className='flex gap-2'>
                  <a
                    href=''
                    type='button'
                    className='w-full inline-flex justify-center items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100'
                  >
                    <FaEdit className='-ms-2 me-2 h-4 w-4' />
                    Edit
                  </a>
                  <a
                    type='button'
                    className='w-full inline-flex justify-center items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300'
                  >
                    <MdDelete className='-ms-2 me-2 h-4 w-4' />
                    Delete
                  </a>
                </div>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
