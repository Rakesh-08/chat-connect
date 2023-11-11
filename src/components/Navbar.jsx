import React from 'react'
import { Stack } from "@mui/material";
import { Link } from "react-router-dom"
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky", background: "#000", top: 0, justifyContent: "space-between",zIndex: 100
        
      }}>
      <Link to="/">

        <Stack alignItems="center" direction={{md:"row",xs:"column"}}>

       
        <img style={{ borderRadius: "50%" }} src={logo} alt="logo" height={45} />
        <span style={{
          color: "#fff",
          fontSize: "1.2em",
          margin:"0.5em",
          
        }}>ViewTube</span> </Stack>
      </Link>

      <SearchBar/>
      
      </Stack>
  )
}

export default Navbar