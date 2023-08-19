import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProyectsPage from './pages/ProyectsPage'
import ProfilePage from './pages/ProfilePage'
import TranslatePage from './pages/TranslatePage'
import Page404 from './pages/Page404'
import NavBar from './pages/NavBar'



function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/proyects' element={<ProyectsPage/>}/>
        <Route path='/translate' element={<TranslatePage/>}/>
        <Route path='/*' element={<Page404/>}/>
      </Routes>
      <div className='center__container'>
        Portfolio borrador
      </div>
    </div>
  )
}

export default App
