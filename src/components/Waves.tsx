import React from 'react'

const Waves = ({ className = 'loader' }: { className?: string }) => {
  return (
    <div className={'waves ' + className}>
      <div className='wave wave-one' />
      <div className='wave wave-two' />
      <div className='wave wave-three' />
    </div>
  )
}

export default Waves
