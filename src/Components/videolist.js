import React from 'react';
import VideoListItems from './videolistitems';


const VideoList = (props) => {
    const VideoItems = props.videos.map((video) => {
        return <VideoListItems
                    onVideoSelect={props.onVideoSelect}
                    key={video.etag}
                    video={video}
               />
    });

    return (
        <ul className = "col-md-4 list-group">
            {VideoItems}
        </ul>
    );
};


export default VideoList;