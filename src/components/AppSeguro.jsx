import useCotizador from "../hooks/useCotizador"
import Formulario from "./Formulario"
import MostrarResultado from "./MostrarResultado"
import Spinner from "./Spinner"

const AppSeguro = () => {

  const {cargando, resultado} = useCotizador()

  return (
    <>
        <header>
            <h1 className=" my-10 text-white text-center text-4xl font-black">Cotizador de Seguros de Auto</h1>
        </header>

        <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
            <Formulario />
        </main>

        <>
          {cargando ? <Spinner /> : <MostrarResultado />}
        </>
    </>
  )
}

export default AppSeguro