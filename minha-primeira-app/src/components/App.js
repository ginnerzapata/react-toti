import React, {useState} from "react"
import "../styles/styles.css"
import Banner from "./Banner"
import { booklist } from "../data/data"
import Card from "./Card"
import FormCriarLivro from "./FormCriarLivro"

const App = () => {
   const [books, setBooks] = useState(booklist)
   
   const handleDelete = (id) => {
      setBooks(prev => prev.filter(book => book.id !== id))
   }

   const handleCreate = (livro) => {
      setBooks(prev => [livro,...prev])
   }
    return <div className="main">
       <Banner />
       <div className="wrapper">
          <FormCriarLivro handleCreate={handleCreate} />
          <h2>Meus livros</h2>
          {books.map(book => <Card key={book.id} book={book} handleDelete={handleDelete}/>)}
       </div>

    </div>
 }

 export default App