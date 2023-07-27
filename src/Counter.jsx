import React from 'react'



function Counter ({title, description}) {

  console.log(title, description)
  return (
    <>
    
    <div>{title}</div>
    <div>{description}</div>

    </>
  )
}

export default Counter;