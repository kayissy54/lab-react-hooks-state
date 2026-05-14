import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // TODO: Implement state for dark mode toggle
     const [darkMode, setDarkMode] = useState(false)
  // TODO: Implement state for cart management
     const [cart, setCart] = useState([])
  // TODO: Implement state for category filtering
     const [category, setCategory] = useState('All')
      
     const products = [
    { id: 1, name: 'Milk', category: 'Dairy' },
    { id: 2, name: 'Cheese', category: 'Dairy' },
    { id: 3, name: 'Bread', category: 'Bakery' },
    { id: 4, name: 'Apple', category: 'Fruits' }
  ]

  
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }
    const addToCart = (product) => {
    setCart(prev => [...prev, product])
  }


  return (
    <div className={darkMode ? 'dark' : 'light'} >
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
          <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList
        products={products}
        category={category}
        addToCart={addToCart}
      />


      {/* TODO: Implement and render Cart component */}
        <Cart cart={cart} />
    </div>
  )
}

export default App
