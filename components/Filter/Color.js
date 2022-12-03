import React from 'react'

function Color({color}) {
  return (
    <div style={{backgroundColor: color.color_code}} className='shadow-md w-4 h-4 rounded-full'></div>
  )
}

export default Color