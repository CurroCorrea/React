import './App.css'
import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from './hooks/useCatFact';

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true'

// const useCatFact = () => {
//     const [fact, setFact] = useState()
//     const refreshFact = () => {
//         getRandomFact().then(newFact => setFact(newFact))
//     }
//      //Efecto para recuperar la cita al cargar la pagina  
//      useEffect((refreshFact), [])

//      return {fact, refreshFact}
// }

export function App() {

    const {fact, refreshFact} = useCatFact()
    const {imageUrl} = useCatImage({fact})
    const [factError, setFactError] = useState()


    /*
    aqui no se puede hacer un fetch,porque estaria ejecutandolo cada vez que se renderiza el componente, por lo que se hace en un useEffect

    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => setFact(data.value))
    
    Esto de arriba es mala practica
    */

   /*Esta es la manera mas sencilla de hacerlo
   Un fetch devuelve una promesa, cuando la resolvemos tenemos la respuesta en json
   En data tenemos el objeto que nos devuelve la api, y accedemos a la propiedad que queremos, en este caso fact
    y lo guardamos en el estado setFact, para que se renderice en el componente
    La lista de dependecias vacia significa que solo se ejecutara una vez, cuando se monte el componente
    Dos maneras de sacar la primera palabra, dos useEffect, o en el que hay
    Esta seria la manera mas sencilla de hacerlo:
    
     useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(response => response.json())
        .then(data => {
            const {fact} = data
            setFact(fact)
            const threeFirstWords = fact.split(' ', 3).join(' ')
            /*Con mdn tenemos la documentacion de slice y join
            https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

            Luego, tras tener la primera palabra, hacemos el fetchin de datos con la palabra

            fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const {url} = response
                //Si no funcionara, tendriamos que colocar la url dentro de la misma
                //setImageUrl('https://cataas.com${url}')
                setImageUrl(url)
            })
        })
    }, [])
            
    Lo mejor es utilizar dos, porque hace el codigo mas legible
    Aqui muestro cual es la manera correcta de hacerlo, ya que si el efecto tuviera muchas funcionalidades,  seria dificil de depurar, y cualquiera mete mano
   
   
   */

    // //Efecto para recuperar la cita al cargar la pagina  
    // useEffect(() =>
    //     {
    //         getRandomFact().then(newFact => setFact(newFact))
    //     }, [])

    /*Efecto para recuperar la imagen cada vez que la cita cambia
    De esta forma tenemos separados los efectos, y es mas facil de depurar
    Esto se parece a un custom hook
    */
    // useEffect(() => {
    //     // Si no hay cita, no hacemos nada
    //     if(!fact) return 
    //     const threeFirstWords = fact.split(' ', 3).join(' ')
    //         /*Con mdn tenemos la documentacion de slice y join
    //         https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

    //         Luego, tras tener la primera palabra, hacemos el fetchin de datos con la palabra
    //         */

    //         fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
    //         .then(res => res.json())
    //         .then(response => {
    //             const {url} = response
    //             //Si no funcionara, tendriamos que colocar la url dentro de la misma
    //             //setImageUrl('https://cataas.com${url}')
    //             setImageUrl(url)
    //         })
    //         //Para que esto no pete, ya que el estado inicial de fact es undefined,tenemos que comprobar si fact existe
    // } ,[fact])

    const handleClick = async () => {
        //Esto pide por demanda que se actualice el estado interno de el hook, aunque siempre hay que evitar devolver la actualizacion
        //del estado
        refreshFact()
    }

    /* Renderizado condicional
    Si no tenemos el fact, no renderizamos nada, si lo tenemos renderizamos un parrafo con el texto
    {fact && <p>{fact}</p>}
    */
    return (
        <main>
            <h1>App</h1>

            <button onClick={handleClick}>Get new fact</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={'Image extrated using the three firsts words for ${fact}'}/>}
        </main>
    )
}

export default App;