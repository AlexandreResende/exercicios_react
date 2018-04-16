
import React from 'react'

export default (props) => (
  <div>
    {props.children}
  </div>
);

/*
* Todos os components filhos que forem
* listados dentro de family serão mostrados
* através desse props.family. Dessa maneira
* todos serão renderizados
*/