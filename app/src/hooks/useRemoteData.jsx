import React, { useEffect, useState } from 'react'

export function useRemoteData(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((response) => response.json)
                .then((data) => {
                    setLoading(false)
                    setData(data)
                })
                .catch((error) => {
                    setError(error)
                })
        }, 3000)
    }, [])

    return { data, loading, error }
}