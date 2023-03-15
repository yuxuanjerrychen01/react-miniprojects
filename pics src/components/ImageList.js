import ImageShow from "./ImageShow";
import "./ImageList.css"

function ImageList( {images} ) {
    const renderedImages = images.map(
        (image) => {return (<ImageShow theImage={image} key={image.id} />);}
    );

    return (
        <div className="image-list"> {renderedImages} </div>
    );
}


export default ImageList;