import { SignUp } from '@clerk/nextjs'
import React from 'react'

export default function page () {
  return <SignUp fallbackRedirectUrl='/dashboard/listing-pet' />
}
