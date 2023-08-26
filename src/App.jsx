import './App.css'
import { Route, Routes } from 'react-router-dom'
import ProjectsPage from './pages/ProjectsPage'
import CertificationPage from './pages/CertificationPage'
import TranslatePage from './pages/TranslatePage'
import Page404 from './pages/Page404'
import NavBar from './pages/NavBar'
import MainInfo from './components/MainInfo'
import ContactPage from './pages/ContactPage'
import NavBarDown from './pages/NavBarDown'


function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<MainInfo/>}/>
        <Route path='/certification' element={<CertificationPage/>}/>
        <Route path='/projects' element={<ProjectsPage/>}/>
        <Route path='/translate' element={<TranslatePage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/*' element={<Page404/>}/>
      </Routes>
      <NavBarDown/>
    </div>
  )
}

export default App
