import React from 'react'

const Button = ({title}) => {
  return (
    <div>
      <button className='py-2 px-5 rounded-full bg-white mt-4 outline hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-green-400 hover:text-white font-semibold'>
      {title}
      </button>
    </div>
  )
}

export default Button
