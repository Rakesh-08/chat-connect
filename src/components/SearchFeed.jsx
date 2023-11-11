import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { fetchFromApi } from "../utils/fetchFromApi";
import Videos from "./Videos";

const SearchFeed = () => {
  let [videos, setVideos] = useState([])
  let { searchTerm } = useParams();
 

  useEffect(() => {
    fetchSearchedFeed();

  }, [searchTerm]);

  let fetchSearchedFeed = () => {

    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data?.items))
      .catch(err => console.log(err));
  }

  return (
    <Box p={2} sx={{
      overflowY:"auto",height:"90vh"
    }}>
      <Typography variant="h5" fontWeight="bold" mb={2} sx={{
        color:"white"
      }}>
        Search Results for: <span style={{ color: "red" }}>{searchTerm}</span> videos
      </Typography>
       
      <Videos videos={videos}/>
    </Box>
   
  )
}

export default SearchFeed