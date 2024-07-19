import config from "@/config"

export const createSavedPet = async ({ userId, animalId }) => {
  const response = await fetch(config.apis.saved, {
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
    const response = await fetch(`${config.apis.saved}?user=${userId}`)
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
