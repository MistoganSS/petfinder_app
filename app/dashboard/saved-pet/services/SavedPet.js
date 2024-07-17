const API_URL =
  'https://us-central1-pets-api-f1d89.cloudfunctions.net/app/api/v1/saved'
const API_ANIMALS =
  'https://us-central1-pets-api-f1d89.cloudfunctions.net/app/api/v1/animals'
export const getSavedPetByUser = async ({ userId }) => {
  try {
    const response = await fetch(API_URL)
    if (!response.ok) throw new Error('HTTP: ', response.status)
    const data = await response.json()
    const dataFilter = data.filter(
      pet => pet.userId._path.segments[1] === userId
    )
    const petDetailsPromises = dataFilter.map(async pet => {
      const petResponse = await fetch(
        `${API_ANIMALS}/${pet.animalId._path.segments[1]}`
      )
      if (!petResponse.ok)
        throw new Error('Http, animal no existe, ', petResponse.status)
      const data = await petResponse.json()
      return { savedId: pet.id, id: pet.animalId._path.segments[1], ...data }
    })
    const petDetail = await Promise.all(petDetailsPromises)
    return petDetail
  } catch (error) {
    console.error('Error fetching saved pets: ', error)
    throw error
  }
}
