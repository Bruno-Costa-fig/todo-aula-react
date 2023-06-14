import { useState } from 'react'
import CardAdicionar from './components/CardAdicionar'
import ListItem from './components/ListItem'
import './App.css'
import useListaTarefas from './hooks/useListaTarefas'

function App() {
  // 1 parte
  const {adicionarTarefa, list, filtrarSomenteFinalizado, listaFiltrada, setSomenteFinalizados, somenteFinalizados} = useListaTarefas()

  return (
    <div className="App">
      {/* 2 parte */}
      <CardAdicionar 
        filtrarSomenteFinalizado={filtrarSomenteFinalizado} 
        adicionarTarefa={adicionarTarefa} 
        somenteFinalizados={somenteFinalizados}
      />
      {/* Área de renderizar os componentes */}

      {/* // 5 parte */}
      {
        somenteFinalizados ? (
            listaFiltrada.map(item => (
              <ListItem key={item.id} item={item}/>
            ))
          ) : (
            list.map((item, index) => (
              <ListItem key={index} item={item}/>
            ))
          )
      }
    </div>
  )
}

export default App
