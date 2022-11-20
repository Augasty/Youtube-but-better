import React from 'react'
import { Stack } from '@mui/system'
import logo from './ytlogo.png'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'


const Navbar = () => (
    <>
        <Stack
            direction='row'
            alignItems='center'
            p={2}
            sx={{
                position: 'sticky',
                background: '#000',
                top: 0,
                justifyContent: 'space-between'
            }} >

{/* the button with the logo, on click which will take us to the home */}
            <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt='logo' height={45} />
            </Link>

            <SearchBar/>
        </Stack>
    </>
)


export default Navbar