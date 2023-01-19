import { Typography } from "@mui/material"
import { Stack } from "@mui/system"
import React, { useEffect, useState } from "react"
import SectionTag from "./SectionTag"
import Carousel from "react-material-ui-carousel"
import { Paper } from "@mui/material"
import SinglePost from "./SinglePost"
const Posts = () => {
	const [posts, setposts] = useState([])
	const [four4posts, setfour4posts] = useState([])

	useEffect(() => {
		fetchData()
	}, [])

	useEffect(() => {
		splitPosts()
		console.log(posts, four4posts)
	}, [posts])

	async function fetchData() {
		// const url =
		// 	"https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=IGQVJYVTZAPNmUwWVhRRllseWpDWnlRRkdGZAFRQWTgwenBRWWE3X3NmS2tfOUw4b0ZAjMVVFUU01ZAEMzS1hyb3BGZAzVtTW83RkNFN0IwUDBGRHhTYjBLc01KR3UxZAXp2Nm1za1RrUlc4REZArNDdnRmxXVQZDZD"
		const url = "./posts.json"
		const data1 = await fetch(url)
		const data2 = await data1.json()
		setposts(data2)
	}

	const splitPosts = () => {
		const res = []
		for (let i = 0; i < posts.length; i += 4) {
			const chunk = posts.slice(i, i + 4)
			res.push(chunk)
		}
		setfour4posts(res)
	}

	return (
		<Stack
			width='100%'
			bgcolor='#171717'
			sx={{
				position: "relative",
				display: {
					sm: "flex",
					xs: "none",
				},
			}}
		>
			<div id='Posts' style={{ position: "absolute", top: "0" }}></div>
			<Stack
				direction='column'
				width='1200px'
				sx={{ marginInline: "auto !important" }}
				padding='5rem 0'
				spacing={5}
			>
				<SectionTag title='SEE' color='#f2efeb' />
				<Typography
					variant='h3'
					sx={{
						fontWeight: "700",
						lineHeight: "2.5rem",
						color: "#f2efeb",
					}}
				>
					Instagram
					<span className='cursive'> Posts</span>
				</Typography>
				<Typography
					variant='body2'
					sx={{
						fontFamily: "Poppins",
						color: "#f2efeb",
					}}
				>
					Catch The Glimpses of Our Recent Events, New Recipes and
					Much More !
				</Typography>
				<Carousel>
					{four4posts.map((item) => (
						<Stack direction='row' spacing={2}>
							{item.map((post) => {
								return <SinglePost post={post} />
							})}
						</Stack>
					))}
				</Carousel>
			</Stack>
		</Stack>
	)
}

export default Posts
