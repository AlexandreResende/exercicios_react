
import React from 'react'

import childrenWithProps from '../utils/reactUtils/childrenWithProps'

export default (props) => (
  <div>
    { childrenWithProps(props.children, props) }
  </div>
);

/*
* Todos os components filhos que forem
* listados dentro de family serão mostrados
* através desse props.family. Dessa maneira
* todos serão renderizados
*/