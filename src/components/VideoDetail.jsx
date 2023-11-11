import React,{useState,useEffect} from 'react'
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { fetchFromApi } from "../utils/fetchFromApi";
import Videos from "./Videos"


const VideoDetail = () => {
  let [recommendedVideos,setRecommendedVideos]=useState([])
  let [videoDetail, setVideoDetail] = useState({});
  let { videoId } = useParams();
  let [showDescription, setShowDescription] = useState(false);
  
  useEffect(() => {
    fetchVideoDetail();
    
  }, [videoId]);

  let fetchVideoDetail = async() => {
   await fetchFromApi(`videos?part=snippet,statistics&id=${videoId}`)
      .then((data) => setVideoDetail(data?.items[0]))
      .catch((err) => console.error(err));
    
    fetchRecommendedVideos();
    
  }

  let fetchRecommendedVideos = () => {
     fetchFromApi(`search?part=snippet&relatedToVideoId=${videoId}&type=video`)
       .then((data) => setRecommendedVideos(data?.items))
       .catch((err) => console.error(err));
  }

  if (!videoDetail) {
    return <h1>....Loading</h1>
  }


  let { snippet, statistics } = videoDetail;

  return (
    <Box minHeight="95vh" pb={4}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box
            sx={{
              width: "100%",
              position: "sticky",
              top: "86px",
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h6" p={2} fontStyle="italic">
              {snippet?.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${snippet?.channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {snippet?.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(statistics?.viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(statistics?.likeCount).toLocaleString()} likes
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(statistics?.commentCount).toLocaleString()} comments
                </Typography>
              </Stack>
            </Stack>
            <Typography
              borderRadius="1%"
              backgroundColor="lightGray"
              color=""
              m={2}
              p={2}
            >
              <p style={{ color: "black", fontWeight: "bold" }}>Description</p>
              {showDescription ? (
                <>
                  {snippet?.description}{" "}
                  <span
                    onClick={() => setShowDescription(false)}
                    style={{ color: "blue", cursor: "pointer" }}
                  >
                    less
                  </span>
                </>
              ) : (
                <>
                  {snippet?.description.slice(0, 200)}.........
                  <span
                    onClick={() => setShowDescription(true)}
                    style={{ color: "blue", cursor: "pointer" }}
                  >
                    more
                  </span>
                </>
              )}
            </Typography>
          </Box>
        </Box>
        <Stack>
          <Box
            px={2}
            py={{ md: 1, xs: 5 }}
            justifyContent="center"
            alignItems="center"
          >
            <Videos direction="column" videos={recommendedVideos} />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}

export default VideoDetail