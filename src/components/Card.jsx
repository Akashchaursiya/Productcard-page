import React from 'react'
import ProductCard  from './ProductCard';

const sampleProducts = [
  {
    name: 'Cool T-Shirt',
    price: 499,
    image: 'https://unstd.in/cdn/shop/files/SAGE-GREEN-2.jpg?v=1734507963&width=800',
  },
  {
    name: 'Cool T-Shirt',
    price: 469,
    image: 'https://thefabulous.store/cdn/shop/files/Steel_grey_-_I_feel_royal.png?v=1740639052&width=713',
  },
  {
    name: 'Cool T-Shirt',
    price: 499,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRxEJnEtTUeI3cX3-9GlQ7j3w7OT2y4RTxE-J3Brchjdp-xm0O6BCotE8K0DfmBvt9o1F_P83K-K-S5bYozcGoNt74xCba521b_wTJ0xrBA1P2o0m9ox6QV0Q&usqp=CAc',
  }
]

const Card = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 p-8">
      {sampleProducts.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  )
}

export default Card