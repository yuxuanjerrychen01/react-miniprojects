import { useState } from "react";

function BookEdit( {book, onSubmit} ) {
    const [text, setText] = useState(book.title);

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleEditSubmit = (event) => {
        event.preventDefault();
        onSubmit(book.id, text);
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