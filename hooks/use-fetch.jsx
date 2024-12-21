import { useState } from "react"
import { set } from "react-hook-form"
import { toast } from "sonner"

const useFetch = (cb) => {
  const [data, setData] = useState(undefined)
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)
  
  const fn = async (...args) => {
    setLoading(true)
    setError(null)
    
    try{
      const res = await cb(...args)
      setData(res)
      setError(null)
    }catch(err){
      setError(err)
      toast.error(err.message)
    }finally{
      setLoading(false)
    }
  }


  return {data, loading, error, fn, setData}
}

export default useFetch