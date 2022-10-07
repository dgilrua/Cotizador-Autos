export const formatearPrecio = valor => {
    return valor.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}