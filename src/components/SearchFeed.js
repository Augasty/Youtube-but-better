import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FetchFromAPI } from '../utils/FetchFromAPI'
import Videos from './Videos'


const SearchFeed = () => {
  const [videos, setVideos] = useState([])

  const {searchTerm} = useParams()
  // calling the api using useEffect
  useEffect(()=>{
    FetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data)=> setVideos(data.items))
  },[searchTerm])
 


  return (
    <Box p={2} sx={{overflowY:'auto', height: '90vh', flex: 2}}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color:'white'}}>
        Search results for <span style={{color: '#00bfff'}}>{searchTerm}</span>
      </Typography>


      <Videos videos={videos}/>
    </Box>
  )
}

export default SearchFeed