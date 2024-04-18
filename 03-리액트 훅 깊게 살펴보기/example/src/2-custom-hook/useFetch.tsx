import { useEffect, useState } from 'react'

const defaultOptions: RequestInit = {
  method: 'get',
}

function useFetch<T>(
  url: string,
  { method, body }: RequestInit = defaultOptions
) {
  const [result, setResult] = useState<T | undefined>()
  const [isLoading, setIsLoading] = useState(false)
  const [ok, setOk] = useState<boolean | undefined>()
  const [status, setStatus] = useState<number | undefined>()

  useEffect(() => {
    const abortController = new AbortController()

    ;(async () => {
      setIsLoading(true)

      const response = await fetch(url, {
        method,
        body,
        signal: abortController.signal,
      })

      setOk(response.ok)
      setStatus(response.status)

      if (response.ok) {
        const result = await response.json()
        setResult(result)
      }

      setIsLoading(false)
    })()

    return () => {
      abortController.abort()
    }
  }, [url, method, body])

  return { ok, status, isLoading, result }
}

export default useFetch
