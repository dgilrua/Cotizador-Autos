import React from 'react'
import useCotizador from '../hooks/useCotizador'

const Error = () => {

    const {error} = useCotizador()

  return (
    <div className=' text-center bg-red-900 p-3 text-white font-bold text-l uppercase'>
        <p>{error}</p>
    </div>
  )
}

export default Error