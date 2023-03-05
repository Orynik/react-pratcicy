import React from 'react'
import {Products} from './components/products'
import {productsData} from './mock/products'
        
function App() {
  return (
    <div className="container mx-auto px-2">
      <Products prod={productsData[0]}/>
      <Products prod={productsData[1]}/>
    </div>
  )
}

export default App
