import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function layout ({ children }) {
  return (
    <main>
      <Header />
      <main>{children}</main>
      <Footer />
    </main>
  )
}
