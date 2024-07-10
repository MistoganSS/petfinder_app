import React from 'react'
import Header from '../components/Header'

export default function layout ({ children }) {
  return (
    <main>
      <Header />
      <main>{children}</main>
    </main>
  )
}
