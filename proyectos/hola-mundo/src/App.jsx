import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]


//Ejemplo de renderizar un array con un componente, el twitterFollowCard
export function App () {
  return (
    //Cuando se renderiza una lista de elementos en React, hay q añadir la key, que es un id unico para el elemento
    //porq react tiene que saber exactamente el elemento con algo que sea único
    //Las llaves (abajo del section)para evaluarlo, ya que son para renderizar
    <section className='App'>
      {
        //Se hace un users y se mapea para tener la info de cada usuario, y esta funcion devuelve el componente a renderizar para cada usuario
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
          //EL name se pone debajo ya que el texto lo coge del children, que es todo lo que tenga dentro el componente cuando lo llamas desde la app
        ))
      }
    </section>
  )
}