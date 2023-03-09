import { useSearchParams } from 'react-router-dom'
export const useQueryString = () => {
  const [searchParams] = useSearchParams()
  const searchParamObj = Object.fromEntries([...searchParams])

  return searchParamObj
}
