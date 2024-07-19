'use client'
import React from 'react'
import { TbPrinter } from 'react-icons/tb'

const PrintButton = () => {
    return (
        <button
            onClick={() => window.print()}
            className='inline-flex justify-center items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100'
        >
            <TbPrinter className='w-5 h-5 -ms-2 me-2' />
            Print Flyer
        </button>
    )
}

export default PrintButton