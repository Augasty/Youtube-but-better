import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FetchFromAPI } from '../utils/FetchFromAPI'
import ChannelCard from './ChannelCard'
import Videos from './Videos'



const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const { id } = useParams();
  const [videos, setVideos] = useState([]);

  console.log(channelDetail)
  useEffect(() => {
    const fetchResults = async () => {
      const data = await FetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await FetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    }

    fetchResults();
  }, [id])

  return (
    <Box minHeight='95vh'>
      <Box >
        <div style={{ background: 'linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(206,3,184,1) 100%, rgba(2,0,36,1) 100%)', height: '300px' }} />
        <ChannelCard channelDetail={channelDetail} marginTop={'-110px'} />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail