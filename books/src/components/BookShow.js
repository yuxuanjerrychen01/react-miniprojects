import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow( {book, onDelete, onEdit} ) {
    const [showEdit, setShowEdit] = useState(false);

    const handleClickDelete = () => {
        onDelete(book.id)
    };

    const handleClickEdit = () => {
        setShowEdit(!showEdit)
    };

    const handleSubmit = (id, title) => {
        setShowEdit(false);
        onEdit(id, title);
    };


    let content = <h3>{book.title}</h3>
    if (showEdit) {content = <BookEdit book={book} onSubmit={handleSubmit}/>}

    return (
        <div className="book-show"> 
        <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
            {content} 
            <div className="actions">
                <button className="edit" onClick={handleClickEdit}>Edit</button>
                <button className="delete" onClick={handleClickDelete}>delete</button>
            </div>
        </div>
    );
}

export default BookShow;