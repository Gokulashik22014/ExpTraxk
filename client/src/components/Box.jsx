import React from 'react'

function Box({title,profit,loss}) {
  return (
    <div className='w-42 mx-1 h-12 bg-teal-400/20 rounded-full border-white border-2 flex flex-row items-center px-4 py-2'>
      <h1 className='text-md text-white'>{title}</h1>
      <h1 className='text-green-500 ml-1'>+{profit}</h1>
      <h1 className='text-red-500 ml-1'>-{loss}</h1>
    </div>
  )
}

export default Box