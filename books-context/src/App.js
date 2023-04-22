import { useEffect, useContext} from "react";
import BooksContext from "./context/books";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const { stableFetchBooks } = useContext(BooksContext);
    
    useEffect(() => {
        stableFetchBooks();
    }, [stableFetchBooks]);


    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList />
            <BookCreate />
        </div>
    );
}

export default App;
