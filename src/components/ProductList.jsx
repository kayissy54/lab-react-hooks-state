import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({ products, category, addToCart }) => {
 
  const productData = products && products.length ? products : sampleProducts

 
  const filtered =
    category === 'All'
      ? productData
      : productData.filter(p => p.category === category)

  return (
    <div>
      <h2>Available Products</h2>

      {filtered.map(product => (
        <div key={product.id}>
          <ProductCard product={product} />
          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  )
}

export default ProductList