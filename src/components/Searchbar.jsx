import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../sclices/searchSlice";

const Searchbar = () => {
    const [search, setsearch] = useState('')
    const dispatch=useDispatch()
    function sumbithandler(e){
       e.preventDefault();
      dispatch( setQuery(search))
       setTimeout(()=>{
        setsearch('')
       },3000)
    }
  return (
 <form className="flex items-center justify-center gap-4 
                 bg-gradient-to-r from-gray-800 to-gray-700
                 mt-3 h-20 px-6 rounded-xl shadow-md">

  <input
    type="text"
    placeholder="Search photos, videos, GIFs..."
    className="w-1/2 bg-white text-black text-lg
               px-4 py-2 rounded-lg
               border border-gray-300
               focus:outline-none focus:ring-2 focus:ring-emerald-400
               transition-all duration-200"
    value={search}
    onChange={(e) => {{
      setsearch(e.target.value);
    }}}
  />

  <button
    className="bg-emerald-500 hover:bg-emerald-600
               text-white font-semibold text-lg
               px-6 py-2 rounded-lg
               shadow-md hover:shadow-lg
               transition-all duration-200 active:scale-95"
    onClick={(e) => {
      sumbithandler(e);
    }}
  >
    Search
  </button>

</form>

)
}

export default Searchbar