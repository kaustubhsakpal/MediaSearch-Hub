import { createSlice } from "@reduxjs/toolkit";

const Serachslice = createSlice({
  name: "search",
  initialState: {
    query: "",
    activeTab: "",
    results:[],
    loading: false,
    error: null,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setactiveTab(state, action) {
      state.activeTab = action.payload;
    },
    setresults(state,action){
    state.results=action.payload;
    state.loading=false
    },
    setloading(state){
       state.loading=true;
       state.error=null
    },
    seterror(state,action){
      state.error=action.payload;
      state.loading=false;
    }
  },
});
export const { setQuery,setactiveTab,setresults,seterror,setloading } = Serachslice.actions;
export default Serachslice.reducer;
