import { useState } from 'react'

//isFollowing es el estado
export function TwitterFollowCard ({ children, userName, initialIsFollowing }) {


    /*
    const state = useState(false)
    const isFollowing = state[0]
    Este es el interruptor
    const setIsFollowing = state[1]

    Lo de abajo sería la creación del estado
    */
    //Los hooks te permiten añadir cierta funcionalidad a los componentes, ejecutar codigo arbitrario,...
    //Este useState me devuelve un array que la primera posicion tiene el valor y la segunda es la forma de actualizar
//Es una propt que sirve para inicializar un estado, por eso se llama initialIsFollowing, porq es el valor inicial
//El estado se inicializa una vez nada más
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  console.log('[TwitterFollowCard] render with userName: ', userName)

  //Esto es declarativo
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    //Lo que hace esta funcion es darle la vuelta al valor inicial del estado, cambiando el estado en sí
    //El virtual Doom renderiza nada mas el estado despues de instanciar el componente, es decir, que si cambiara el boton,
    //solo cambia el boton, no el conjunto
    //Los cambios se propagan en el arbol, es decir, lo que cambias en app, cambia en twitter
    //Cuando se renderiza un componente padre, tmb se renderiza un componente hijo
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt='El avatar de midudev'
          src={`https://unavatar.io/${userName}`}
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}