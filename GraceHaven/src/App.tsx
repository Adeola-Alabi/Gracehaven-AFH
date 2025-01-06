import Header from './Components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import {Route, Routes} from "react-router-dom";
import { APIProvider } from '@vis.gl/react-google-maps'
import './Styles/App.css'

function App() {

  return (
    <APIProvider apiKey = 'AIzaSyAAtwBk7arm3xq-uC_bTcqZQkqqsQg3P84'>
    <div className='App'>
      <Header/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/About' element = {<About/>}/>
        <Route path = '/Services' element = {<Services/>}/>
        <Route path = '/Contact' element = {<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
    </APIProvider>
  )
}

export default App
