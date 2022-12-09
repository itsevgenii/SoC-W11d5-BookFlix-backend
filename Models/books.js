import pkg from '../db/db.js';
const { query } = pkg;


const getAllBooks = async () => {
    const result = await query("SELECT * FROM books;")
    console.log(result)
    return result
  }


  const getBooksByAuthor = async (author) => {
    const result = await query(`SELECT * FROM books WHERE author ILIKE $1`, [`%${author}%`])
    console.log(" I am the result from model", result.rows[0].author)
    return result.rows
  }

  const getBooksByTitle = async (title) => {
    const result = await query(`SELECT * FROM books WHERE title ILIKE $1`, [`%${title}%`])
    console.log(" I am the result from model", result.rows[0].author)
    return result.rows
  }

  const getBooksByDate = async (dates) => {
    const result = await query(`SELECT * FROM books WHERE date_published = $1`, [`${dates}`])
    console.log(" I am the result from model", result.rows[0].author)
    return result.rows
  }

  const addBook = async (book) => {
    const result = await query(`INSERT INTO books (title, author, date_published, description, cover) VALUES ($1, $2, $3, $4, $5) RETURNING *`, [book.title, book.author, book.date_published, book.description, book.cover]);
    console.log(" I am the result from model", book)
    return result.rows[0]
  }


  const deleteBookbyId = async (id) => {
    const result = await query(`DELETE FROM books WHERE book_id = ${id}`)
    console.log(" I am the result of deleted book from model", result.rows)
    return result.rows[0];
  }

export {getAllBooks, getBooksByAuthor, getBooksByTitle, getBooksByDate, addBook, deleteBookbyId}
// export {createTodo, addAlltoDos, todoByID, updateTodo, deleteToDo}