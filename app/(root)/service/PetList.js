const API_SAVED = `https://us-central1-pets-api-f1d89.cloudfunctions.net/app/api/v1/saved`
export const createSavedPet = async ({ userId, animalId }) => {
  const response = await fetch(API_SAVED, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userId, animalId })
  })
  if (!response.ok) throw new Error(`Error HTTP: ${response.status}`)

  return await response.json()
}
export const getSavedPetByUser = async ({ userId }) => {
  try {
    const response = await fetch(`${API_SAVED}?user=${userId}`)
    if (!response.ok) throw new Error('HTTP: ', response.status)
    const data = await response.json()
    const dataSaved = data.map(item => {
      return item.animalId._path.segments[1]
    })
    return dataSaved
  } catch (error) {
    console.error('Error fetching saved pets: ', error)
    throw error
  }
}
