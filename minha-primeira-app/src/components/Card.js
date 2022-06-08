import React from "react"

const Card = (props) => {
  return  <div className="card">
            {props.book.imgUrl && <img src={props.book.imgUrl} alt={props.book.nome} />}
            <div className="card-conteudo">
                <p className="titulo">{props.book.nome}</p>
                <p className="autor">{props.book.autor}</p>
            </div>
            <button onClick={()=>props.handleDelete(props.book.id)} className="delete">X</button>
        </div>
}

export default Card   