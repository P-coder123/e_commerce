import React, { useState }  from 'react'
import Navbaar from './Component/Navbaar'
import Product  from './Component/Product'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ProductDetail from './Component/ProductDetail'
import { SearchItem } from './Component/SearchItem'
import {items} from './Component/Data'
import { Cart } from './Component/Cart'
import Admin from './Component/Admin'



//import './App.css'

function App() {

  const [data,setData]=useState([...items])

  return (
    <>

    <Router>
      <Navbaar/>
      <Routes>
        <Route path='/' element={ <Product item={data}/>}/>
        <Route path='/product/:id' element ={<ProductDetail/>}/>
        <Route path='/search/item' element={<SearchItem/>} />
        <Route path='/cart' element ={<Cart/>}/>
        <Route path='/admin' element={<Admin/>}/>

        
        
      </Routes>
    
      </Router>
    </>
  )
}

export default App
