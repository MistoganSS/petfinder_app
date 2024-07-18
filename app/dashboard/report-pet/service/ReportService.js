const API_ANIMALS =
  'https://us-central1-pets-api-f1d89.cloudfunctions.net/app/api/v1/animals'

export const getReportByUser = async ({ userId, page = 1, limit = 6 }) => {
  const response = await fetch(`${API_ANIMALS}?page=${page}&limit=${limit}`)
  if (!response.ok) throw new Error(`HTTP ${response.status}`)
  console.log(response)
  return await response.json()
}
