import axios from "axios";

async function SearchImages(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: "Client-ID z58kDpj6tto89ulkRyaKqxOGVlHrrlwh09hq5MsPr6U",
        },
        params: {
            query: term
        },
    });
    // console.log(response);
    return response.data.results;
};

export default SearchImages;