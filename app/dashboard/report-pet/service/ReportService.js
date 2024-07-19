import { config } from '@/config'

export const getReportByUser = async ({ userId, page = 1, limit = 6 }) => {
  const response = await fetch(
    `${config.apis.animals}?user=${userId}&page=${page}&limit=${limit}`
  )
  if (!response.ok) throw new Error(`HTTP ${response.status}`)
  return await response.json()
}

export const deleteFetch = async id => {
  const url = `${config.apis.animals}/${id}`

  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (!response.ok) {
    throw new Error('Error deleting')
  }
}
