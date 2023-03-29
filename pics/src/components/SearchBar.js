import { useState } from "react";
import "./SearchBar.css";

function SearchBar( {onSubmitTerm} ) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmitTerm(term);
    };

    const handleChange = (event) => {
        // console.log(event.target.value);
        setTerm(event.target.value);
    };

    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label>Enter Search Term</label>
                <input value={term} onChange={handleChange}/>
            </form>
        </div>
    );
}

export default SearchBar;