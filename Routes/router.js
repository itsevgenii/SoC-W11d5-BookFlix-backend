import express from "express";
const router = express.Router();




import { getAllBooks, getBooksByAuthor, getBooksByTitle, getBooksByDate, addBook, deleteBookbyId} from "../Models/books.js"


 // ROUTES


 router.get("/", async(req, res)=>{
    const author = req.query.author
    const title = req.query.title
    const dates = req.query.date
    try {
        if (author!== undefined) {
            const result = await getBooksByAuthor(author);
            console.log(`this is books by author ${author}`);
            return res.status(200).json({ success: true, payload: result });
        } else if (title !== undefined){
            const result = await getBooksByTitle(title);
            console.log(`this is books by author ${title}`);
            return res.status(200).json({ success: true, payload: result });
        } else if(  dates !==undefined){
            const result = await getBooksByDate(dates);
            console.log(`this is books by author ${dates}`);
            return res.status(200).json({ success: true, payload: result });
        }
        
        
        else{
        //result comes with payload like result.payload
        const result = await getAllBooks();
        const data = result.rows
    
        res.json({success: true, payload: data });
    }
    } catch (err) {
        console.error(err.message);
    }
})

router.post('/', async (req, res)=>{

    const addedBook = req.body;
    const result = await addBook(addedBook);
    console.log(" I am the result of payload", addedBook)
    res.json({ success: true, payload: result });
})

router.delete("/:id", async function (req, res) {
    const result = await deleteBookbyId(req.params.id);
    res.json({ success: true, payload: result });
  });


 export default router;

