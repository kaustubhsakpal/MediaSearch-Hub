import React from 'react'
import { useSelector } from 'react-redux'
import Resultgrid from './Resultgrid'

const Hero = () => {
    const {query,activetab,results,loading,error} =useSelector((store)=>store.search)
  return (
    
   <> 
<div className="flex items-center justify-center min-h-[60vh]">
  {results.length === 0 ? (
    <div className="text-center max-w-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Start searching
      </h2>
      <p className="text-gray-500 text-sm">
        Type something in the search box to see photos, videos, or GIFs.
      </p>
    </div>
  ) : (
    <Resultgrid />
  )}
</div>

   </>
  )
}

export default Hero