import SearchBar from "./components/SearchBar";
import SearchImages from "./api";
import ImageList from "./components/ImageList";
import { useState } from "react";

function App() {
    const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {
        const result = await SearchImages(term);
        setImages(result);
    };

    return (
        <div>
            <SearchBar onSubmitTerm={handleSubmit} />
            <ImageList images={images}/>
        </div>
    );
}

export default App;
