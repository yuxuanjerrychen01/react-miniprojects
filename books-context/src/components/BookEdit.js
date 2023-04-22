import { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";

function BookEdit( {book, onSubmit} ) {
    const [text, setText] = useState(book.title);
    const { editTitleById } = useBooksContext();

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleEditSubmit = (event) => {
        event.preventDefault();
        onSubmit();
        editTitleById(book.id, text);
    }

    return (
        <form className="book-edit" onSubmit={handleEditSubmit}>
            <label>Title</label>
            <input className="input" onChange={handleChange} value={text}/>
            <button className="button is-primary">
                Save
            </button>
        </form>
    );
}

export default BookEdit;