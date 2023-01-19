import { Stack, Typography } from "@mui/material"
import React from "react"

const SectionTag = ({ title, center, color }) => {
	return (
		<Stack direction='column' spacing={0.5}>
			<div
				style={{
					height: "1.5px",
					backgroundColor: `${color}`,
					width: "20px",
					marginInline: `${center}`,
				}}
			></div>
			<Typography
				variant='subtitle2'
				sx={{
					fontSize: "1rem",
					color: `${color}`,
					fontFamily: "Sofia Sans Extra Condensed",
				}}
			>
				{title}
			</Typography>
		</Stack>
	)
}

export default SectionTag
