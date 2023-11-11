import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from './Sidebar';
import Videos from './Videos';
import { fetchFromApi } from '../utils/fetchFromApi';



const Feed = () => {
  
  let [selectedCategory, setSelectedCategory] = useState("New");
  let [videos, setVideos] = useState([]);

  useEffect(() => {
   
    fetchFeedData();
   
  },[selectedCategory])
 

  let fetchFeedData = () => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
             setVideos(data.items)
      })
      .catch((err) =>
      { console.log(err) });
  }

  return (
    <Stack
      sx={{
        flexDirection: {
          sx: "column",
          md: "row",
        },
      }}
    >
      <Box
        sx={{
          height: {
            sx: "auto",
            md: "92vh",
          },
          borderRight: "1px solid #3d3d3d",
          px: 0,
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>

      <Box p={2} sx={{ minHeight: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "orange" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
        <Typography
          className="copyright"
          variant="body2"
          sx={{
            mt: 1.5,
            color: "#fff",
          }}
        >
          Copyrights 2023 Rakesh Mandal
        </Typography>
      </Box>
    </Stack>
  );
}

export default Feed