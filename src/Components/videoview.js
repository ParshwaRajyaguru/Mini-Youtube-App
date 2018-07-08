import React from 'react';


const VideoView = (props) => {
    const video = props.video;

    if(!video) {
        return (<div>Loading...</div>);
    }
    const VideoID = video.id.videoId;
    //const url = "https://www.youtube.com/embed/" + VideoID;
    const url = `https://www.youtube.com/embed/${VideoID}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
                <div>Published At: {video.snippet.publishedAt}</div>
            </div>
        </div>
    );
}


export default VideoView;