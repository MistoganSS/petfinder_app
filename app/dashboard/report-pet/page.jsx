'use client'

import { useEffect, useState } from 'react'
import { getReportByUser } from './service/ReportService'
import { useAuthContext } from '@/app/context/AuthWrapper'
import ReportList from './components/ReportList'

export default function ReportPetPage () {
  const [reportPets, setReportPets] = useState(null)
  const user = useAuthContext()

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const newReports = await getReportByUser({ userId: user.id })
        setReportPets(newReports)
      }
    }

    fetchData()
  }, [user])
  return (
    <div className='w-full'>
      <div className='flex flex-col lg:flex-row gap-3 justify-between items-center mb-5'>
        <h2 className='text-xl font-bold'>My Reports</h2>
        <div>
          <select
            id='countries'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          >
            <option value='3'>3 items per page</option>
            <option value='6'>6 items per page</option>
            <option value='10'>10 items per page</option>
            <option value='25'>25 items per page</option>
            <option value='50'>50 items per page</option>
          </select>
        </div>
      </div>
      <ReportList reports={reportPets} />
    </div>
  )
}
