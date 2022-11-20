import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'

const Videos = ({videos , direction}) => {

  if(!videos?.length) return (
    <Typography variant='h1' color='skyblue'>
      Loading...
    </Typography>
  )

  // console.log(videos)
  return (
    
    <Stack direction={ direction || 'row' } flexWrap = 'wrap' justifyContent = 'start' gap = {2} >
      {
        // rendering a box element for each video
        videos.map((item,idx)=>(
          <Box key={idx}>
            {/* if the item is a video, then use this */}
            {item?.id?.videoId && <VideoCard video={item}/>}
            {/* if the item is a channel, then use this */}
            {item?.id?.channelId && <ChannelCard channelDetail={item}/>}
          </Box>
        ))
      }
    </Stack>
  )
}

export default Videos