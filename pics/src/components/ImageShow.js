function ImageShow( {theImage} ) {
    return (
        <div>
            <img src={theImage.urls.small} alt={theImage.alt_description} />
        </div>
    );
}

export default ImageShow;