import React from 'react'
import { Box, CardContent, CardMedia, Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";



const ChannelCard = ({ channelDetail, marginTop }) => {
    
    let channelId = typeof (channelDetail?.id) == "object" ? channelDetail?.id?.channelId : channelDetail?.id
    
  console.log(channelDetail)
    

  return (
      <Box
          sx={{
              boxShadow: "none",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "356px", md: "300px" },
              height: "240px",
              margin: "auto",
              marginTop
              
          }}>
          <Link to={`/channel/${channelId}`}>
               
              <CardContent
                  sx={{
                  display: "flex",
                 flexDirection:"column",
                  justifyContent: "center", textAlign:"center", color: "#fff"
              }}>
                  <CardMedia
                      image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}

                      alt={channelDetail?.snippet?.title}
                      sx={{
                          borderRadius:"50%",height:"180px",width:"180px",mb:2,border:"1px solid #e3e3e3"
                      }}
                      
                  />
                  <Typography variant="h6">
                      {channelDetail?.snippet?.title}
                      
                      <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }}></CheckCircle>
                    
                  </Typography>
                  <span style={{color:"gray"}}>
                       {channelDetail?.statistics?.subscriberCount} Subscribers
                  </span>
                 
              </CardContent> 
          </Link>
          
   </Box>
  )
}

export default ChannelCard