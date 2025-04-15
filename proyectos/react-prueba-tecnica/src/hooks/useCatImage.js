import { useEffect, useState } from "react"

//Esto seria un custom Hook, que tiene un estado interno, que tiene un useEffect que cada vez que se le pase el factor, va a volver a pedir los datos, va a guardar la imagen en el estado
//lo vamos a tener disponible

//Esto son parametros nombrados, porque obliga a que el nombre sea ese
//Esta sería una caja negra
export function useCatImage ({fact}) {
    const [imageUrl, setImageUrl] = useState()
    //setImageUrl se podria devolver, pero lo que se recomienda es que el estado este interno , en vez de expuesto(que se puede actualizar desde fuera)

    useEffect(() => {
        // Si no hay cita, no hacemos nada
        if(!fact) return 
        const threeFirstWords = fact.split(' ', 3).join(' ')
            /*Con mdn tenemos la documentacion de slice y join
            https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

            Luego, tras tener la primera palabra, hacemos el fetchin de datos con la palabra
            */

            fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const {url} = response
                //Si no funcionara, tendriamos que colocar la url dentro de la misma
                //setImageUrl('https://cataas.com${url}')
                setImageUrl(url)
            })
            //Para que esto no pete, ya que el estado inicial de fact es undefined,tenemos que comprobar si fact existe
    } ,[fact])

    return {imageUrl}
 
} // { imageUrl = 'https://...'}