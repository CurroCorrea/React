const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {

    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const data = await res.json()
    const {fact} = data
    return fact


    // fetch(CAT_ENDPOINT_RANDOM_FACT)
    // .then(response => {
    //     //TODO: Handle error if !response.ok
    //     if(!response.ok) 
    //     {
    //         setFactError('Error al recuperar la cita')
    //     }
    //     return response.json()
    // })
    // .then(data => {
    //     const {fact} = data
    //     return fact
    // })
    // .catch((err) => {
    //     //tanto para error en la respuesta
    //     //como si hay error en la peticion
    // })

}