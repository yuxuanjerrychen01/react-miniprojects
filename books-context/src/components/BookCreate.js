import { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";

function BookCreate() {
    const [term, setTerm] = useState("");
    const { createBook } = useBooksContext();

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(term);
        setTerm("");
    }

    const handleChange = (event) => {
        setTerm(event.target.value)
    };

    return (
        <div className="book-create">
            <h3>Add a book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" value={term} onChange={handleChange} />
                <button className="button">Create</button>
            </form>
        </div>
    );
}

export default BookCreate;