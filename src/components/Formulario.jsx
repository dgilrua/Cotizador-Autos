import { Marcas, planes, Years } from "../constants"
import { Fragment } from "react"
import useCotizador from "../hooks/useCotizador"
import Error from "./Error"

const Formulario = () => {

    const{handleChangeData, datos, setError, error, cotizarPrecio} = useCotizador()
    const {marca, modelo} = datos

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(datos).includes('')) {
            setError('Todos los campos son obligatorios')
            return
        }

        setError('')

        cotizarPrecio()
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            {error && <Error />}
            <div className=" my-5">
                <label htmlFor="" className="uppercase text-gray-400 font-bold block">Marca</label>
                <select 
                    className=" w-full p-3 mt-3 bg-white border border-gray-300" 
                    name="marca"
                    onChange={e => handleChangeData(e)}
                    value={marca}
                >
                    <option value="">-- Seleccione una Marca --</option>
                    {Marcas.map(marca => (
                        <option 
                            key={marca.id}
                            value={marca.id}
                        >
                            {marca.nombre}
                        </option>
                    ))}
                </select>
            </div>

            <div className=" my-5">
                <label htmlFor="" className="uppercase text-gray-400 font-bold block">Modelo</label>
                <select 
                    className=" w-full p-3 mt-3 bg-white border border-gray-300" 
                    name="modelo"
                    onChange={e => handleChangeData(e)}
                    value={modelo}
                >
                    <option value="">-- Seleccione un modelo --</option>
                    {Years.map(year => (
                        <option 
                            key={year}
                            value={year}
                        >
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            <div className=" my-5">
                <label htmlFor="" className="uppercase text-gray-400 font-bold block mb-2">Modelo</label>
                <div className="flex gap-3 items-center">
                    {planes.map(plan => (
                        <Fragment key={plan.id}>
                            <label>
                                {plan.nombre}
                            </label>
                            <input 
                                type='radio'
                                name="plan"
                                value={plan.id}
                                onChange={e => handleChangeData(e)}
                            />
                        </Fragment>
                    ))}
                </div>
            </div>
            <input 
                type="submit"
                className="w-full bg-sky-600 p-3 text-white text-xl font-bold cursor-pointer hover:bg-sky-800 transition-colors uppercase mt-4 rounded-sm" 
                value='Cotizar'
            />
        </form>
    </>
  )
}

export default Formulario