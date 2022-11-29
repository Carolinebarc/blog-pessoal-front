import React  from 'react';
import './title.css';

interface ITitle {
  nome:string
}

function Title (props: ITitle) {
  return(
    <h1> Hello {props.nome}</h1>
  )
}

export { Title }