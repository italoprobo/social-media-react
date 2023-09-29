import "./post.scss"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbDownAltRoundedIcon from '@mui/icons-material/ThumbDownAltRounded';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import { useState } from "react";
import Perfil from "./../../assets/italofoto.jpg"

interface PostProps {
    post: Topico;
    key: number;
}

const Post: React.FC<PostProps> = ({post}) => {

    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)

    let liked = false
    let disliked = false

    const handleLike = () => {
        liked = true
        setLikes(likes + 1)
    }

    const handleDislike = () => {
        disliked = true
        setDislikes(dislikes + 1)
    }


    const data_string = post.create_at.toLocaleString()

    return(
        <div className="post">
            <div className="container">
          <div className="autor">
            <div className="autorInfo">
                <img src={Perfil}/>
                <div className="details">
                    <span className="name">{post.autor.nome}</span>
                    <span className="date">{data_string}</span>
                </div>
            </div> 
                <MoreHorizIcon />
          </div>  
          <div className="content">
            <p>{post.descricao}</p>
          </div>  
          <div className="info" style={{display: "flex", alignItems: "center", gap: "20px"}}>
                <div className="item" style={{display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", fontSize: "14px"}} onClick={handleLike}>
                {liked ? <ThumbUpRoundedIcon /> : <ThumbUpOutlinedIcon />}
                {likes} Likes
                </div>
                <div className="item" style={{display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", fontSize: "14px"}} onClick={handleDislike}>
                {disliked ? <ThumbDownAltRoundedIcon />  : <ThumbDownAltOutlinedIcon />}
                {dislikes} Dislikes
                </div>
            </div>  
            </div>
        </div>
    )
}

export default Post