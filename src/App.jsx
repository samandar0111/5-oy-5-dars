import React from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import { MainLayout } from './layout/MainLayout'
import { Home ,Karzina,Product} from './pages'
function App() {



  return (<>

  <Routes>
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='karzina' element={<Karzina/>}/>
      <Route path='product' element={<Product/>}/>
    </Route>
    <Route path='*' element={<h1>Page not found</h1>}/>
  </Routes>
  </>
  )
}

export default App
