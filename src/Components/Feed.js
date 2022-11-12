import { useState, useEffect } from "react";
import { Box, Stack, Typography} from "@mui/material";
import { SideBar, Videos } from "./";
import { fetchData } from "../utils/fetchData";

const Feed = () => {

  const [selectedCategory, setselectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect( () => {
    fetchData(`search?part=snippet&q=${selectedCategory}`).then((data)=>setVideos(data.items));
  },[selectedCategory]);

  return (
    <Stack sx={{flexDirection: {xs:"column", md:"row"}}}>
      <Box sx={{
          height:{xs: "auto", md: "92vh"},
          borderRight: "1px solid #3d3d3d",
          px:{xs: 0, md: 2}}}
      >
        <SideBar 
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
        />
        <Typography 
          className="copyright" 
          variant="body2"
          color="white" 
          sx={{mt: 1.5}}  
        >
          Copyright 2022 Eray Aynacı
        </Typography>
      </Box>
      <Box 
        p={2} 
        sx={{
            overflowY:"auto",
            height:"90vh",
            flex:2
        }}
      >
        <Typography 
          variant="h4"
          fontWeight="bold"
          color="white"
          mb="2"
        >
            {selectedCategory} <span style={{color:"red"}}>videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed