import React from 'react'

const Button = ({className,onClick,type}:{className?:string,onClick:any,type?: "button" | "submit" | "reset"}) => {
  return (
    <>
    <button type={type} onClick={onClick} className={`bg-blue-900 py-2 w-1/2 rounded-2xl text-white text-3xl hover:bg-blue-950 flex justify-center items-center ${className}`}>Submit</button>
    </>
  )
}

export default Button