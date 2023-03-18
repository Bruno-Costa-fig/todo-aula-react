import { useState } from 'react'
import CardAdicionar from './components/CardAdicionar'
import ListItem from './components/ListItem'
import './App.css'

function App() {
  // 1 parte
  const [somenteFinalizados, setSomenteFinalizados] = useState(false)

  const [list, setList] = useState([
    { id: 1, texto: "Comprar pão na padaria", finalizado: false },
    { id: 2, texto: "Comprar bolo na padaria", finalizado: true }
  ])

  const adicionarTarefa = ((texto) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      texto: texto,
      finalizado: false,
    });
    setList(newList)
    listaFiltrada = list.filter(item => item.finalizado)
  })

  const filtrarSomenteFinalizado = (valor) => {
    setSomenteFinalizados(valor)
  }

  const listaFiltrada = list.filter(item => item.finalizado)

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
