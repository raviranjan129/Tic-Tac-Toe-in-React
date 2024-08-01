/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Square(props) {
  return (
    <div
    
    onClick={props.onClick}
    
    className={`border border-none w-24 h-20 flex justify-center items-center text-xl font-semibold m-0.5 rounded-md bg-sky-500`}>
      <h1 >{props.value}</h1>
    </div>
  )
}

export default Square
