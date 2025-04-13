import { useEffect, useState } from "react"

const FollowMouse = () => {

  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

 //Vamos a hacer q se ejecute cada vez q cambie el enabled para que se renderice
 useEffect(() => {
  console.log('Efecto' , {enabled})
  
  const handleMove = (event) => {
  const {clientX, clientY} = event
  console.log('handleMove', {clientX, clientY})
  setPosition({x: clientX, y: clientY })

  }

  //Podemos hacer logica dentro del efecto dependiendo del valor de la dependencia
  //Lo que no se puede es meter el efect dentro de un if
  if(enabled){
    //Las suscripciones se tienen que limpiar, ya que una vez se renderice el componente, 
    //esto va a seguir vigente en el DOM
  window.addEventListener('mousemove', handleMove)
  }


  //cleanup
  //Esto se ejecuta cuando el componente se desmonta
  //o cuando cambia la dependencia
  //Lo que hace es eliminar el evento del DOM
  //MUY IMPORTANTE
  return () => {
    //Limpiamos el evento que se guarda en el DOM
    window.removeEventListener('mousemove', handleMove)
  }

}, [enabled])

useEffect(() => {

  document.body.classList.toggle('no-cursor', enabled)

  return () => {
    document.body.classList.remove('no-cursor')
  }

}, [enabled])



  return (
   <>
   <div style={{
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      border: '1px solid #fff',
      borderRadius: '50%',
      opacity: 0.8,
      pointerEvents: 'none',
      left: -25,
      top: -25,
      width: 50,
      height: 50,
      //Aqui se usa el estado, usando la posicion del estado
      transform: `translate(${position.x}px, ${position.y}px)`
    }} /><button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
      </>
  )
}

function App() {

  const [mounted, setMounted] = useState(true)



  //OnClick ==> Si esta activo, hacemos lo contrario
  //Hemos hecho un boton que hace un renderizado condicional que renderiza el componente 
  //que sigue al mouse, entonces hay dos botones, uno para seguir el puntero y otro para desmontar 
  //el componente de seguir el puntero
  //Siempre que se monta el componente, se ejecuta el cleanup para limpiarlo
  return (
<>
    <main>
      {mounted && <FollowMouse />}
      <button onClick={() => setMounted(!mounted)}>Toggle mounted FollowMouse component</button>
    </main>
</>
  )
}

export default App
