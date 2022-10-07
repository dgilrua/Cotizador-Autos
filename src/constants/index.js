export const Marcas = [
    {id: 1, nombre: 'Europeo'},
    {id: 2, nombre: 'Americano'},
    {id: 3, nombre: 'Asiatico'}
]

const YearMax = new Date().getFullYear()

export const Years = Array.from(new Array(20), (valor, index) => YearMax - index)

export const planes = [
    {id: 1, nombre: 'Basico'},
    {id: 2, nombre: 'Completo'}
]