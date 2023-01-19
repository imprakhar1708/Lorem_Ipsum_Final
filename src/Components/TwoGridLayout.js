import React from "react"
import { Typography } from "@mui/material"
import { Stack } from "@mui/system"
import Prim_btn from "./Prim_btn"

const TwoGridLayout = () => {
	return (
		<Stack
			direction='column'
			justifyContent='center'
			alignItems='center'
			spacing={4}
			flexWrap='wrap'
			sx={{
				textAlign: "center",
			}}
		>
			<Typography
				sx={{
					fontFamily: "Roboto",
					fontWeight: "700",
					fontSize: "4.3rem",
					lineHeight: "4.5rem",
					color: "var(--black)",
				}}
			>
				<span className='cursive'>Elevate Thy</span>
				<br />
				Dining Experience
			</Typography>
			<Typography
				variant='body2'
				sx={{
					fontFamily: "Poppins",
					color: "#9a9a9a",
					lineHeight: "1.7rem",
					width: "clamp(30ch,60ch,100%)",
				}}
			>
				Experience the intriguing mix of flavors to tingle your palate
				with the finest choice of delicacies. Connoisseurs will have an
				unique gastronomical endeavor setting foot in the posh ambience,
				where our chefs experiment unique styles to please your culinary
				senses.
			</Typography>
			<a href='#Menu' style={{ textDecoration: "none" }}>
				<Prim_btn title='EXPLORE MENU' width='12.5rem' />
			</a>
		</Stack>
	)
}

export default TwoGridLayout
