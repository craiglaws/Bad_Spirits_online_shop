import React from 'react';

const ProductDetail = ({product, addToCart}) => {

  const handlePassToList = () => {
    if(product.stock > 0){
      const updatedProduct = product;
      updatedProduct.stock -= 1;
      addToCart(updatedProduct)
    }
  }

  return (
    <div className="">
      <div>
        <img className="detailImage" src={product.image} alt={product.name} height="200"/>
      </div>
      <h3>{product.name}</h3>
      <p>ABV: {product.percent}%</p>
      <p>{product.description}</p>
      <p>{product.location}</p>
      <p>£{product.price}</p>
      <button onClick={handlePassToList}>Add to Card</button>
    </div>
  )
}

export default ProductDetail
