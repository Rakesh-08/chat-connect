import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Videos from "./Videos";
import ChannelCard from './ChannelCard';
import {fetchFromApi} from "../utils/fetchFromApi"


const ChannelDetail = () => {
  const { channelId } = useParams();
  let [channelDetail, setChannelDetail] = useState(null);
  let [videos, setVideos] = useState([]);

 

  useEffect(() => {
      fetchChannelDetail()
  }, [channelId])
  

  let fetchChannelDetail = async() => {
    await fetchFromApi(`channels?part=snippet& id=${channelId}`)
      .then((data) =>
        setChannelDetail(data?.items[0]))
      .catch(err => console.log(err));
    
    fetchVideosForChannel();
  }
    let fetchVideosForChannel = () => {
      fetchFromApi(`search?channelId=${channelId}&part=snippet&order=date`)
        .then((data) =>setVideos(data?.items))
        .catch((err) => console.log(err));
    };

  return (
    <Box
      sx={{
        minHeight: "95vh",
      }}
    >
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,30,36,1) 0%, rgba(59,39,121,1) 35%, rgba(0,212,55,1) 100%)",
            zIndex: 10,
            height: "250px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-80px"/>
      </Box>
      <Box
        display="flex" p="2">
          
        <Videos videos={videos}/>

      </Box>
    </Box>
  );
}

export default ChannelDetail