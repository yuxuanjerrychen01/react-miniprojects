import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get("http://localhost:3001/books");
        setBooks(response.data);
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    // const deleteBookById = (id) => {
    //     const updatedBooks = books.filter(
    //         (book) => {return book.id !== id;}
    //     );
    //     setBooks(updatedBooks);
    // };
    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        
        const updatedBooks = books.filter(
            (book) => {return book.id !== id;}
        );
        setBooks(updatedBooks);
    };

    // const editTitleById = (id, title) => {
    //     const updatedBooks = books.map(
    //         (book) => {
    //             if (book.id === id) {return {...book, title: title}};
    //             return book;
    //         }
    //     );
    //     setBooks(updatedBooks);
    // };
    const editTitleById = async (id, title) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: title
        });
        const updatedBooks = books.map(
            (book) => {
                if (book.id === id) {return {...book, ...response.data}};
                return book;
            }
        );
        setBooks(updatedBooks);
    };

    // const createBook = (title) => {
    //     const updatedBook = [
    //         ...books, 
    //         {id: Math.round(Math.random() * 9999), title: title} 
    //     ];
    //     setBooks(updatedBook);
    // };
    const createBook = async (title) => {
        const response = await axios.post("http://localhost:3001/books", {
            title: title
        });
        // console.log(response);
        const updatedBook = [
            ...books, 
            response.data
        ];
        setBooks(updatedBook);
    };


    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBookById} onEdit={editTitleById}/>
            <BookCreate onEnter={createBook}/>
        </div>
    );
}

export default App;
