import React from 'react'
import ItemList from './ItemList';
import Contador from './Contador/Contador';
import RepositoryList from './RepositoryList/RepositoryList';


export default function App() {

  const itens = [
    {
      id:1,
      nome:"item1",
      descricao:"teste"
    },
    {
      id:1,
      nome:"item1",
      descricao:"teste"
    },
    {
      id:1,
      nome:"item1",
      descricao:"teste"
    },
    {
      id:1,
      nome:"item1",
      descricao:"teste"
    }
  ]

  return (
      <ItemList itens={itens}/>
  );
}