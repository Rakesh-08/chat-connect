import React from 'react';
import { Stack, Box } from "@mui/material";
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({ videos, direction }) => {
  
 
  return (
    <Stack direction={direction||"row"} flexWrap="wrap" justifyContent="center" gap={1.5}
    marginTop="2em">
      {videos.map((item, i) => (
        <Box key={i}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos