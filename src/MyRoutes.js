import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Layouts from './components/Layouts'
import Homepage from './pages/Homepage'
import Product from './pages/Product'
const MyRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layouts/>}>
          <Route index element={<Homepage/>}/>
          <Route path='product' element={<Product/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default MyRoutes
