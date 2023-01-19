import { Stack } from "@mui/system"
import React from "react"
import hero_bg from "../Assets/hero_bg.png"
import TwoGridLayout from "./TwoGridLayout"
const Hero = () => {
	return (
		<Stack
			direction='row'
			justifyContent='center'
			alignItems='center'
			width='100%'
			height='75vh'
			flexWrap='wrap'
			padding={2}
			sx={{
				marginInline: "auto !important",
				marginTop: "0 !important",
				backgroundImage: `url(${hero_bg})`,
				backgroundPosition: "center",
			}}
		>
			<TwoGridLayout />
		</Stack>
	)
}

export default Hero
