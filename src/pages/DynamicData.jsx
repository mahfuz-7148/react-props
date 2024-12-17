import React from 'react'

const DynamicData = (props) => {
  return (
    <div className='border-2 p-5 m-10 bg-green-400'>
        <p>Dynamic data</p>
        <p>Name: {props.name} </p>
        <p>Age: {props.age} </p>
    </div>
  )
}

export default DynamicData