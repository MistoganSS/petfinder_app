'use client'
import { useUser } from '@clerk/nextjs'
import { createContext, useContext, useEffect, useState } from 'react'
import {config} from '@/config'

const getUserById = async providerId => {
  const url = `${config.apis.users}?provider=${providerId}`
  const response = await fetch(url)
  if (!response.ok) throw new Error(`Error HTTP: ${response.status}`)
  const data = await response.json()
  if (data.length === 0) return false

  return data
}
const createUser = async user => {
  const url = `${config.apis.users}`
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  if (!response.ok) throw new Error(`Error HTTP: ${response.status}`)

  return await response.json()
}
const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
  const { isSignedIn, user } = useUser()
  const [userValue, setUserValue] = useState(null)
  useEffect(() => {
    const initialFetch = async () => {
      const dataUser = await getUserById(user.id)
      if (dataUser.users.length === 0) {
        const userSave = {
          phone: '',
          fullName: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          rol: 'user',
          password: '',
          providerId: user.id
        }
        const response = await createUser(userSave)
        setUserValue(response)
      } else {
        setUserValue(dataUser.users[0])
      }
    }
    if (isSignedIn && user) {
      initialFetch()
    }
  }, [user, isSignedIn])
  return (
    <AuthContext.Provider value={userValue}>{children}</AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
