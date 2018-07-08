import React from 'react';

const VideoListItems = (props) => {
    const video = props.video;
    const onVideoSelect = props.onVideoSelect;

    const ImageURL = video.snippet.thumbnails.medium.url;

    //console.log(video);
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={ImageURL} />
                </div>

                <div>
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>

                </div>
            </div>
        </li>
    );
};


export default VideoListItems;