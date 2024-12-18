import React from 'react'

const Products = (props) => {
  const {name, price} = props.product
  return (
    // <div>
    //     <p>Name: {props.products.name} </p>
    //     <p>Price: {props.products.price} </p>
    // </div>

    // <div>
    //     <p>Length: {props.products.length} </p>
    //     <p>Name: {props.products[2]} </p>
    // </div>

    //  <div>
    //     <p>Name: {props.products[1].name} </p>
    //     <p>Price: {props.products[1].price} </p>
    // </div>

    <div>
        <p>Name: {name} </p>
        <p>Price: {price} </p>
        <button onClick={props.alert} className='bg-green-600 text-white p-2'>Click me</button>
    </div>
  )
}

export default Products