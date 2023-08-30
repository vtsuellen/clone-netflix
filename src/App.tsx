import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import HomePage from './pages/homePage'

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Login />} />
      <Route path='/home' element={ <HomePage />} />
    </Routes>
  ) 
}

export default App
