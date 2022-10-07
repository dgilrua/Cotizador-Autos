import useCotizador from "../hooks/useCotizador"
import {useRef, useCallback} from 'react'
import {Marcas, planes} from '../constants'

const MostrarResultado = () => {

    const {resultado, datos} = useCotizador()
    const {marca, modelo, plan} = datos

    const modeloRef = useRef(modelo)

    const [nombreMarca] = useCallback(Marcas.filter(m => m.id === Number(marca)), [resultado])
    const [nombrePlan] = useCallback(planes.filter(p => p.id === Number(plan)), [resultado])

    if (resultado === 0) return null

  return (
    <div className="bg-white md:w-2/3 lg:w-2/4 mx-auto text-center shadow rounded-lg p-10 mt-4">
        <h2 className="text-gray-600 text-3xl font-black mb-2">Resumen</h2>

        <p className="text-xl"><span className=" text-2xl font-semibold text-gray-800">Marca: </span>{nombreMarca.nombre}</p>
        <p className="text-xl"><span className=" text-2xl font-semibold text-gray-800">Modelo: </span>{modeloRef.current}</p>
        <p className="text-xl"><span className=" text-2xl font-semibold text-gray-800">Plan: </span>{nombrePlan.nombre}</p>
        <p className="text-3xl mt-2 font-semibold"><span className="text-gray-800">Total Cotizacion: </span>{resultado}</p>
    </div>
  )
}

export default MostrarResultado