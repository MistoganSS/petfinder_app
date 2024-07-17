'use client'
import { useAuthContext } from '@/app/context/AuthWrapper'
import React from 'react'

export default function UserComponent () {
  const userValue = useAuthContext()

  if (!userValue) {
    return <p>...Loading</p>
  }

  return <pre>{JSON.stringify(userValue, null, 2)}</pre>
}
