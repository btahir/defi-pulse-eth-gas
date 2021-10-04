import React from 'react'

function DataDisplay({ title, gasPrice, waitTime }) {
  return (
    <div className='p-4 rounded-lg bg-purple-50 w-full hover:bg-purple-100'>
      <h2 className='text-2xl font-bold mb-4'>{title}</h2>
      <div>
        <div>Price: <span className='text-purple-600 font-medium'>{gasPrice / 10} gwei</span></div>
        <div>Wait Time: <span className='text-purple-600 font-medium'>{waitTime} minutes</span></div>
      </div>
    </div>
  )
}

export default DataDisplay
