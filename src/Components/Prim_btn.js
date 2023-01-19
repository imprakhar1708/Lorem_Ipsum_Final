import { Button } from "@mui/material";
import React from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
const Prim_btn = ({ title, width, clickFn }) => {
	return (
		<Button
			variant='contained'
			onClick={clickFn}
			sx={{
				background: "var(--primary_clr)",
				color: "alicawhite",
				width: `${width}`,
				borderRadius: "0",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				fontSize: ".8rem",
				fontWeight: "700",
				padding: "1em 2em",
				marginTop: "2em",
				":hover": {
					bgcolor: "#095f52",
				},
			}}
		>
			<div style={{}}>{title}</div>
			<div
				style={{
					display: "flex",
					alignItems: "center",
				}}
			>
				<ArrowForwardRoundedIcon />
			</div>
		</Button>
	);
};

export default Prim_btn;
