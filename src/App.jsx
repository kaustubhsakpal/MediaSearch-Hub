
import { fecthapi, gifapi, viedoapi } from './api/media'
import './App.css'
import Hero from './components/Hero'
import Resultgrid from './components/Resultgrid'
import Searchbar from './components/searchbar'
import Tabs from './components/tabs'

function App() {

  return (
    <>
     <Searchbar />
     <Tabs />
     <Hero />
    </>
  )
}

export default App
