import  {useEffect, useState} from 'react'

export const UseFetch = (url) => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
   
    useEffect(() => {
        const fetData = async () => {
        setLoading(true)
        await fetch(url)
        .then(response => response.json())
            .then(res => {
                setData(res.data)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })       
    }
        if(url) fetData()
    }, [setData, url])
   
    
return {data, loading, error}}
