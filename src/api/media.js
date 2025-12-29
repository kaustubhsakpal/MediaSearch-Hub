import axios from 'axios'

const PIXELES_API=import.meta.env.VITE_PIXELES_API_KEY
const UNPLASH_API=import.meta.env.VITE_UNSPLASH_API_KEY
const TENOR_KEY=import.meta.env.VITE_TENOR_API_KEY


  export async function fecthapi(query,page=1,per_page=20){
   const res= await axios.get('https://api.unsplash.com/search/photos',{
    params:{query,page,per_page},
    headers:{Authorization:`Client-ID ${UNPLASH_API}`}
   })
   return res.data.results   
}

export async function viedoapi(query,page=1,per_page=20){
  const res= await axios.get("https://api.pexels.com/videos/search",{
    params:{query,page,per_page},
    headers:{Authorization:`Client-ID ${PIXELES_API}`}
  })
  return res.data.videos
}
export async function gifapi(query,limit=20){
  const res= await axios.get("https://tenor.googleapis.com/v2/search",{
    params:{q:query,key:TENOR_KEY,limit}
  })
  return res.data.results
}