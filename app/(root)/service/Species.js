const URL_API =
  'https://us-central1-pets-api-f1d89.cloudfunctions.net/app/api/v1'
export const getSpecies = async () => {
  const response = await fetch(`${URL_API}/species`)
  if (!response.ok) throw new Error('Error HTTP: ', response.status)
  const data = await response.json()
  return data
}
