import React from 'react'

const Footer = ({drawerHandler}) => {
  return (
    <div >
      <div className='flex items-center gap-6 justify-end'>
        <button onClick={drawerHandler} className='border tracking-wider text-orange-600 px-3 py-2 rounded-lg font-semibold border-orange-600'>Manage Product</button>
        <button className='bg-orange-600 tracking-wider rounded-lg text-white px-5 py-2  '>Print</button>
      </div>
    </div>
  )
}

export default Footer
