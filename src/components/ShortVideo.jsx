import "./Styles/shortVideo.css"

const ShortVideo = ({
    thumbnailImage,
    imgName,
    videoTitle,
    channelLink,
    countViews,
    link
}) => {
    return (
    <>
        <div className="short-container">
            <a href={link}><img className="short-thumbnail" src={thumbnailImage} alt={imgName} /></a>
            <div className="short-description">
                <a href={channelLink}>{videoTitle}</a>
                <span className="short-views">{countViews}</span>
            </div>
        </div>
    </>
    );
};

export default ShortVideo;
