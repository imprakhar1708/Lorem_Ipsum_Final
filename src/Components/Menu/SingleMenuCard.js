import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { CardActionArea, Rating } from "@mui/material"
import image from "../../Assets/food.jpg"

const SingleMenuCard = ({ item }) => {
	return (
		<Card
			elevation={4}
			sx={{
				minWidth: {
					sm: "23%",
				},
				maxWidth: {
					xs: "29%",
				},
				margin: ".5rem",
				borderRadius: "0",
			}}
		>
			<CardActionArea>
				<CardMedia
					component='img'
					sx={{
						height: {
							sm: "200px",
							xs: "100px",
						},
					}}
					image={image}
					alt={item.name}
				/>
				<CardContent
					sx={{
						display: "flex",
						textAlign: "center",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Rating
						name='read-only'
						value={parseInt(item.rating)}
						sx={{
							fontSize: "1em",
						}}
						readOnly
					/>
					<Typography
						sx={{
							fontFamily: "Sofia Sans Extra Condensed",
						}}
						variant='h4'
						component='div'
						color='var(--primary_clr)'
					>
						{`₹${item.price}`}
					</Typography>
					<Typography
						sx={{
							fontFamily: "Sofia Sans Extra Condensed",
							letterSpacing: ".2rem",
							fontSize: "1.1rem",
						}}
						color='#9a9a9a'
					>
						{item.name.toUpperCase()}
					</Typography>

					<i
						class='fa-solid fa-circle'
						style={{
							fontSize: ".7rem",
							position: "absolute",
							padding: "0.125rem",
							border: `0.125rem solid ${
								item.veg === "true" ? "green" : "#a02929"
							}`,
							top: ".8rem",
							color: `${
								item.veg === "true" ? "green" : "#a02929"
							}`,
							left: ".6rem",
						}}
					></i>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default SingleMenuCard
