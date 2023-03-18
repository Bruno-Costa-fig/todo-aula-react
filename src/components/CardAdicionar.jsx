import { useState } from "react";
import PropTypes from "prop-types";

function CardAdicionar({adicionarTarefa, filtrarSomenteFinalizado, somenteFinalizados}) {
    const [texto, setTexto] = useState('')

    // 3 parte
    const handleAdicionar = (event) => {
        event.preventDefault()
        // 4 parte
        if(!!texto){
            adicionarTarefa(texto)
            setTexto('')
        }
    }

    return ( 
        // 2 parte
        <div>
            <input 
                type="text" 
                placeholder="Adicione uma tarefa" 
                value={texto} 
                onChange={(e) => setTexto(e.target.value)} 
            />
            {/* // 3 parte */}
            <button onClick={handleAdicionar}>Adicionar</button>
            <input 
                type="checkbox" 
                checked={somenteFinalizados} 
                onChange={e => filtrarSomenteFinalizado(e.target.checked)}
            />
            <label>filtrar somente finalizadas</label>
        </div>
     );
}

CardAdicionar.propType = {
    adicionarTarefa: PropTypes.func.isRequired
}

export default CardAdicionar;