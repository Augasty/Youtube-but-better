import { Card, CardContent, CardMedia, Typography } from '@mui/material'
// import { textAlign } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants'

// destructing the video component
const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
      {/* this is the thumbnail */}
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia image={snippet.thumbnails.high.url}
          alt={snippet.title}
          sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }}  />
        {/* check the path from console in chrome */}
      </Link>


      {/* this is the container that contains all the texts under the thumnail */}
      <CardContent sx={{ backgroundColor: 'black', height: '106px' }}>

        {/* this is the headlines under the video thumbnail */}
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' fontWeight='bold' color='#f0ffff' >{snippet.title.slice(0, 50) || demoVideoTitle.slice(0, 50)}</Typography>
        </Link>



    {/* for the channel name , clicking this will take us to the channel*/}
        <Link to={snippet.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
          
          
          <Typography variant='h6' fontWeight='bold' color='skyblue' >{snippet.channelTitle || demoChannelTitle}
          </Typography>
          
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard