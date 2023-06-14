import { useState } from "react";

function useListaTarefas() {

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

  let listaFiltrada = list.filter(item => item.finalizado)

  return ({
    somenteFinalizados,
    setSomenteFinalizados,
    list,
    adicionarTarefa,
    filtrarSomenteFinalizado,
    listaFiltrada
  });
}

export default useListaTarefas;