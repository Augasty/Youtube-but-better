import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'

import SideBar from './SideBar'
import { FetchFromAPI } from '../utils/FetchFromAPI'
import Videos from './Videos'


const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  // calling the api using useEffect
  useEffect(()=>{
    FetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=> setVideos(data.items))
  },[selectedCategory])
 
 


  return (
    <Stack sx={{ background: 'black' ,flexDirection:{ sx: 'column' , md: 'row'}}}>


      <Box sx={{ height: {sx: 'auto', mid: '92vh'}, borderRight: '1px solid #3d3d3d',
    px : { sx: 0, md: 2}}}>
{/* the sidebar contains the categories */}
      <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

      <Typography className='copyright' variant='body2' sx={{mt: 1.5 , color: '#fff'}}>
        copyright 2k22
      </Typography>
    </Box>

    <Box p={2} sx={{overflowY:'auto', height: '90vh', flex: 2}}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color:'white'}}>
        {selectedCategory} <span style={{color: '#00bfff'}}>Video</span>
      </Typography>


      <Videos videos={videos}/>
    </Box>
    </Stack>
  )
}

export default Feed