import React from 'react'

const Product = ({product}) => {
  return (
    <div className='border flex items-center justify-between px-3 py-2 text-xs'>
            <h1>{product.name}</h1>
            <h1>{product.price}</h1>
        </div>
  )
}

export default Product
