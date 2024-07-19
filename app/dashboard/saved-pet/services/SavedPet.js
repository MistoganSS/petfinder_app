import config from "@/config"

export const getSavedPetByUser = async ({ userId, page = 1, limit = 6 }) => {
  try {
    const response = await fetch(
      `${config.apis.saved}?user=${userId}&page=${page}&limit=${limit}`
    )
    if (!response.ok) throw new Error('HTTP: ', response.status)
    const data = await response.json()
    // const dataFilter = data.filter(
    //   pet => pet.userId._path.segments[1] === userId
    // )
    const petDetailsPromises = data.map(async pet => {
      const petResponse = await fetch(
        `${config.apis.animals}/${pet.animalId._path.segments[1]}`
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
export const deleteSavedPetByUser = async savedId => {
  try {
    const response = await fetch(`${API_URL}/${savedId}`, {
      method: 'DELETE'
    })
    if (!response.ok) throw new Error('HTTP: ', response.status)

    return response.ok
  } catch (error) {
    console.error('Error fetching saved pets: ', error)
    throw error
  }
}
