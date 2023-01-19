import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Typography,
} from "@mui/material"
import { Stack } from "@mui/system"
import React from "react"
import qr from "../Assets/qr.jpeg"

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"

const Payments = () => {
	const [open, setOpen] = React.useState(false)
	const [fullWidth, setFullWidth] = React.useState(true)
	const [maxWidth, setMaxWidth] = React.useState("sm")

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const handleMaxWidthChange = (event) => {
		setMaxWidth(event.target.value)
	}

	const handleFullWidthChange = (event) => {
		setFullWidth(event.target.checked)
	}

	return (
		<Stack
			justifyContent='center'
			className='book_container'
			sx={{ backgroundColor: "var(--primary_clr)", position: "relative" }}
			alignItems='center'
			padding={5}
			spacing={1}
		>
			<div id='Payments' style={{ position: "absolute", top: "0" }}></div>
			<Stack direction='column' spacing={0.5}>
				<div
					style={{
						height: "1.5px",
						backgroundColor: "#dedede",
						width: "20px",
						marginInline: "auto",
					}}
				></div>
				<Typography
					variant='subtitle2'
					sx={{
						fontSize: "1rem",
						color: "white",
						fontFamily: "Sofia Sans Extra Condensed",
					}}
				>
					THANKS
				</Typography>
			</Stack>
			<Stack justifyContent='center' alignItems='center' spacing={4}>
				<Typography
					variant='h3'
					sx={{
						fontWeight: "700",
						textAlign: "center",
						lineHeight: "2.5rem",
						color: "white",
					}}
				>
					<span className='cursive black'>Done</span>
					<br />
					With Your Order ?
				</Typography>
				<Typography
					variant='body2'
					sx={{
						fontFamily: "Poppins",
						color: "#9a9a9a",
					}}
				>
					Click to Pay !
				</Typography>
				<Button
					variant='contained'
					onClick={() => {
						window.open(
							"upi://pay?pa=digipeispl@icici&pn=FarmToTable&tr=MNO8733029901&am=0&cu=INR&mc=5411"
						)
					}}
					sx={{
						background: "white",
						color: "var(--primary_clr)",
						width: "120px",
						borderRadius: "0",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-evenly",
						fontSize: "1rem",
						fontWeight: "700",
						padding: ".8em 1.7em",
						marginTop: "2em",
						":hover": {
							bgcolor: "#dedede",
						},
					}}
				>
					<div>Pay</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
						}}
					>
						<ArrowForwardRoundedIcon />
					</div>
				</Button>
				<Dialog
					fullWidth={fullWidth}
					maxWidth={maxWidth}
					open={open}
					onClose={handleClose}
				>
					<DialogContent>
						<Box
							noValidate
							component='form'
							sx={{
								display: "flex",
								flexDirection: "column",
								m: "auto",
								width: "fit-content",
							}}
						>
							<img src={qr} alt='qr' style={{ width: "100%" }} />
						</Box>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose}>Close</Button>
					</DialogActions>
				</Dialog>
			</Stack>
		</Stack>
	)
}

export default Payments
