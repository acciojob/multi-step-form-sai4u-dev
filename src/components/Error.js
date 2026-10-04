import React from 'react'

function Error({type}) {
  return (
    <div>
        <p className='text-red-500'>{`Please Fill ${type}`}</p>
    </div>
  )
}

export default Error