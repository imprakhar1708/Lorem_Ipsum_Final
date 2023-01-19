import { ImageList, ImageListItem, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import React from "react"
import "./About.css"
import about_vid from "../../Assets/about_video.mp4"
import SectionTag from "../../Components/SectionTag"
import about_img_1 from "../../Assets/About_img/about_img_1.jpg"
import about_img_2 from "../../Assets/About_img/about_img_2.jpg"
import about_img_4 from "../../Assets/About_img/about_img_4.jpg"
import about_img_5 from "../../Assets/About_img/about_img_5.jpg"
import about_img_6 from "../../Assets/About_img/about_img_6.jpg"
import about_img_7 from "../../Assets/About_img/about_img_7.jpg"
import about_img_8 from "../../Assets/About_img/about_img_8.jpg"
import about_img_9 from "../../Assets/About_img/about_img_9.jpg"
import Prim_btn from "../../Components/Prim_btn"

function srcset(image, size, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${
			size * rows
		}&fit=crop&auto=format&dpr=1 1x`,
	}
}

const itemData = [
	{
		img: `${about_img_1}`,
	},
	{
		img: `${about_img_2}`,
	},
	{
		img: `${about_img_4}`,
	},
	{
		img: `${about_img_5}`,
	},
	{
		img: `${about_img_6}`,
	},
	{
		img: `${about_img_7}`,
	},
	{
		img: `${about_img_8}`,
	},
	{
		img: `${about_img_9}`,
	},
]

const About = () => {
	return (
		<Stack
			sx={{ position: "relative" }}
			maxWidth='xl'
			className='about_container'
			direction='row'
			spacing={0.5}
			padding='6em 2em'
			bgcolor='#171717'
		>
			<div id='About' style={{ position: "absolute", top: "0" }}></div>
			<Stack
				direction='row'
				width='66%'
				spacing={0.5}
				className='overlay'
				sx={{ marginRight: "3em !important" }}
			>
				<video
					className='vid'
					src={about_vid}
					width='45%'
					style={{ objectFit: "contain" }}
					autoPlay
					muted
					loop
				/>
				<ImageList
					sx={{ width: "60%", height: "700px", opacity: "0.7" }}
					cols={2}
					rowHeight={350}
				>
					{itemData.map((item) => (
						<ImageListItem key={item.img}>
							<img
								src={`${item.img}?w=300&h=350&fit=crop&auto=format`}
								srcSet={`${item.img}?w=300&h=350&fit=crop&auto=format&dpr=2 2x`}
								loading='lazy'
							/>
						</ImageListItem>
					))}
				</ImageList>
			</Stack>
			<Stack
				direction='column'
				justifyContent='center'
				spacing={3.5}
				flexWrap='wrap'
				className='about_content'
				width='40%'
			>
				<SectionTag title='WELCOME' color='#f2efeb' />
				<Typography
					sx={{
						fontFamily: "Roboto",
						fontWeight: "700",
						fontSize: "3.7rem",
						lineHeight: "3.5rem",
						color: "#f2efeb",
					}}
				>
					<span className='cursive'>About</span>
					<br />
					Cafe & Restro
				</Typography>
				<Typography
					variant='body2'
					sx={{
						fontFamily: "Poppins",
						color: "#9a9a9a",
						lineHeight: "1.7rem",
						color: "#f2efeb",
					}}
				>
					We are an open air garden restaurant serving you Chinese ,
					Indian & Italian in a Green lush ambiance with comfortable
					seating in the posh area of Vesu ,Surat
				</Typography>
				<Prim_btn
					title='GET DIRECTIONS'
					width='11.6rem'
					clickFn={() => {
						window.open("https://goo.gl/maps/YmvtXtAsDJ56ViCaA")
					}}
				/>
			</Stack>
		</Stack>
	)
}

export default About
