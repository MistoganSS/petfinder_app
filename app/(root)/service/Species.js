import { config } from '@/config'

export const getSpecies = async () => {
  const response = await fetch(`${config.apis.species}`)
  if (!response.ok) throw new Error('Error HTTP: ', response.status)
  const data = await response.json()
  return data
}
