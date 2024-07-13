import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function layout({ children }) {
  return (
    <main>
      <Header dashboard={false} />
      <div className='max-w-screen-2xl mx-auto'>
        {children}
      </div>
      <Footer />
    </main>
  )
}
