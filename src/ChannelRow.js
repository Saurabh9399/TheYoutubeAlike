import React from 'react'
import "./ChannelRow.css"
import { Avatar } from "@material-ui/core"
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

function ChannelRow({image, channel, verified, subs, noOfVideos, description}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
      <div className="channelRow__text">
        <div className="channelRow__verified">
        <h4>{channel}</h4>
        {verified && <CheckCircleOutlineOutlinedIcon />}
        </div>
        <p>
          {subs} subscribers . {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );         
}

export default ChannelRow
