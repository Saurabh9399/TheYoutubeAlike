import React from 'react'
import "./VideoRow.css"

function VideoRow({image,views,description,timestamp,channel,title,channelImage}) {
    return (
      <div className="videoRow">
        <img src={image} alt="" />
        <div className="videoRow__text">
          <h3>{title}</h3>
          <p>
            {views} views . {timestamp} ago
          </p>
          <div className="channel__name">
            <img className="channelLogo" src={channelImage} alt="" />
            <p>{channel}</p>
          </div>
          <p className="videoRow__description">{description}</p>
        </div>
      </div>
    );
}

export default VideoRow
