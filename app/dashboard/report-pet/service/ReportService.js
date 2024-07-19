import config from "@/config"

export const getReportByUser = async ({ userId, page = 1, limit = 6 }) => {
  const response = await fetch(`${config.apis.animals}?page=${page}&limit=${limit}`)
  if (!response.ok) throw new Error(`HTTP ${response.status}`)
  return await response.json()
}
