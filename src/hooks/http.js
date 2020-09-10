import { useState, useEffect } from 'react'

export const useHttp = (url, dependencies) => {
    const [isLoading, setIsLoading] = useState(false)
    const [fetchedData, setFetchedData] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        fetch(url, {mode: 'cors'})
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch.');
          }
          return response.json();
        })
        .then(data => {
         setFetchedData(data)
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false)
        })
    }, dependencies)

    return [isLoading, fetchedData]    
}