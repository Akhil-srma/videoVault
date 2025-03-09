import "./Styles/longVideo.css";

const LongVideo = ({
  thumbnailImage,
  imgName,
  logoImg,
  videoTitle,
  channelName,
  channelLink,
  countViews,
  uploadTiming,
  link
}) => {
return (
    <>
<div className="long-container">
    <a href={link}><img className="long-thumbnail" src={thumbnailImage} alt={imgName} /></a>
    <div className="cardFooter">
        <div className="logo">
            <img src={logoImg} alt={imgName} />
        </div>
        <div className="description">
            <a href={channelLink}>{videoTitle}</a>
            <span>{channelName}</span>
            <div className="view-time">
            <span className="views">{countViews}</span>
            <span className="dot"> . </span>
            <span className="uploadTiming">{uploadTiming}</span>
            </div>
        </div>
    </div>
    </div>
    </>
);
};

export default LongVideo;
