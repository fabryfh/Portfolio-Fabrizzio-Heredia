import './App.css'
import { Route, Routes } from 'react-router-dom'
import ProyectsPage from './pages/ProyectsPage'
import ProfilePage from './pages/ProfilePage'
import TranslatePage from './pages/TranslatePage'
import Page404 from './pages/Page404'
import NavBar from './pages/NavBar'
import MainInfo from './components/MainInfo'
import ContactPage from './pages/ContactPage'



function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<MainInfo/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/projects' element={<ProyectsPage/>}/>
        <Route path='/translate' element={<TranslatePage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/*' element={<Page404/>}/>
      </Routes>
      
    </div>
  )
}

export default App
