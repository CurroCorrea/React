import React from 'react';
import { createRoot } from 'react-dom/client';
import {App} from './App.jsx'
import './index.css'


//Esto es un componente, una funcion que devuleve un elemento
//Los componentes deben ser PascalCase
//Porque es la unica forma que tiene React para diferenciar un elemento html de un componente
const Button = ({text}) => {
  return (
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
      </svg>
      {text}
    </button>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(
<App />
)
