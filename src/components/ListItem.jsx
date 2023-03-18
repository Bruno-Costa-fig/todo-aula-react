import { useState } from "react"
import "./listItem.css"

const ListItem = ({item}) => {
    // 5 parte
    const [finalizado, setFinalizado] = useState(item.finalizado)
    return (
        <div className="container-item">
            <input 
                className="input-item"
                type="checkbox" 
                checked={finalizado} 
                onChange={e => setFinalizado(e.target.checked)}
            />
            <label className="label-item">{item.texto}</label>
        </div>
    )
}

export default ListItem