import {createContext, useState} from 'react'
import { formatearPrecio } from '../helpers'

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

    const [datos, setDatos] = useState({
        marca: '',
        modelo: '',
        plan: ''
    })

    const [error, setError] = useState('')

    const [resultado, setResultado] = useState(0)

    const [cargando, setCargando] = useState(false)

    const handleChangeData = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const cotizarPrecio = () => {
        let base = 10000

        let precioMarca

        if(datos.marca === '1') {
            precioMarca = base * 0.3
        } else if (datos.marca === '2') {
            precioMarca = base * 0.15
        } else {
            precioMarca = base * 0.05
        }

        let precioAño = base*0.03*(Number(datos.modelo) - 2003)

        let precioPlan

        if(datos.plan === '1') {
            precioPlan = base*0.2 
        } else {
            precioPlan = base*0.5
        }
        
        let precioFinal = formatearPrecio(precioAño + precioPlan + base + precioMarca)

        setCargando(true)

        setTimeout(() => {
            setResultado(precioFinal)
            setCargando(false)
        }, 3000);
        
    }

    return(
        <CotizadorContext.Provider
            value={{
                handleChangeData,
                datos,
                setError,
                error, 
                cotizarPrecio,
                resultado, 
                cargando
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext