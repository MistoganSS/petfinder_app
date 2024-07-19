'use client'

import { useEffect, useState } from 'react'
import { getReportByUser } from './service/ReportService'
import { useAuthContext } from '@/app/context/AuthWrapper'
import Link from 'next/link'
import ReportList from './components/ReportList'

export default function ReportPetPage() {
  const [limit, setLimit] = useState(6)
  const [reportPets, setReportPets] = useState(null)
  const user = useAuthContext()

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const newReports = await getReportByUser({ userId: user.id, limit: 2 })
        setReportPets(newReports)
      }
    }

    fetchData()
  }, [user, limit])
  const handleChange = event => {
    const newLimit = parseInt(event.target.value)
    setLimit(newLimit)
  }
  return (
    <div className='w-full'>
      <div className='flex flex-col lg:flex-row gap-3 justify-between items-center mb-5'>
        <h2 className='text-xl font-bold'>My Reports</h2>
        <div className='flex items-center gap-3'>
          <Link
            href={'/dashboard/report-pet/create'}
            className='rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100'
          >
            Create
          </Link>
          <select
            value={limit}
            onChange={handleChange}
            id='countries'
            className='block px-4 pe-9 border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none'
          >
            <option value='3'>3 items per view</option>
            <option value='6'>6 items per view</option>
            <option value='10'>10 items per view</option>
            <option value='25'>25 items per view</option>
            <option value='50'>50 items per view</option>
          </select>
        </div>
      </div>
      {reportPets ? (
        <ReportList reports={reportPets} />
      ) : (
        <div className=''>Loading...</div>
      )}
    </div>
  )
}
