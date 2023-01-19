import * as React from "react"
import { styled } from "@mui/material/styles"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardActions from "@mui/material/CardActions"
import TimeAgo from "timeago-react"
import image from "../Assets/post.jpg"
import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import about_img_2 from "../Assets/About_img/about_img_2.jpg"
import FavoriteIcon from "@mui/icons-material/Favorite"
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined"
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined"

export default function SinglePost({ post }) {
	return (
		<Card
			className='card'
			sx={{ width: 300, cursor: "pointer" }}
			elevation={5}
			onClick={() => {
				window.open(post.permalink)
			}}
		>
			<CardHeader
				avatar={<Avatar src={about_img_2} />}
				title='Farm To Table'
				subheader={<TimeAgo datetime={post.timestamp} />}
			/>
			<CardMedia component='img' height='300' image={image} />
			<CardActions disableSpacing>
				<IconButton aria-label='add to favorites'>
					<FavoriteIcon sx={{ color: "red" }} />
				</IconButton>
				<IconButton aria-label='share'>
					<ShareOutlinedIcon />
				</IconButton>
				<CommentOutlinedIcon
					sx={{
						display: "inline-block",
						marginLeft: "auto",
						marginRight: "10px",
					}}
				/>
			</CardActions>
		</Card>
	)
}
