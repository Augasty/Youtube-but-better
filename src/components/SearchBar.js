import React, { useState } from 'react'
import { Paper, IconButton } from '@mui/material'
// import { Link, useNavigate } from 'react-router-dom'
import {SearchSharp} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  return (
    <Paper
      component='form'
      onSubmit={(e) => {
        e.preventDefault()

        if (searchTerm){
          navigate(`/search/${searchTerm}`)

          setSearchTerm('')
        }
      }}

      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        paddingLeft: 2,
        boxShadow: 'none',
        marginRight: { sm: 5 }
      }}
    >
      <input className='search-bar' placeholder='search...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
      
      <IconButton type='submit' sx={{ p: '10px' , color: 'grey'}}>
        <SearchSharp/>
      </IconButton>
    
    </Paper>

  )
}

export default SearchBar