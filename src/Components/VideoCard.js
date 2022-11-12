import { Link } from 'react-router-dom';
import { Typography, Card, CardMedia, CardContent } from "@mui/material";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    
    return (
        <Card sx={{
                width:{md:'300px', xs:'100%'}, 
                boxShadow:'none', 
                borderRadius:'none'}}
        >
            <Link to={`/video/${videoId}`}>
                <CardMedia 
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{width: '358px' ,height: '180px'}}
                />
                <CardContent sx={{backgroundColor:'#1e1e1e',height:'106px'}}> 
                    <Link to={`/video/${videoId}`}>
                        <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>
                            {snippet?.title.slice(0,60)}
                        </Typography>
                    </Link>
                    <Link to={`/channel/${snippet?.channelId}`}>
                        <Typography variant='subtitle2' fontWeight='bold' color='gray'>
                            {snippet?.channelTitle.slice(0,60)}
                        </Typography>
                    </Link>
                </CardContent>
            </Link>
        </Card>
    );
}

export default VideoCard