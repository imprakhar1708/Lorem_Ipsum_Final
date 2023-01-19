import {
	FormControl,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	Typography,
} from "@mui/material"
import { Stack } from "@mui/system"
import React, { useState } from "react"
import Prim_btn from "./Prim_btn"
import SectionTag from "./SectionTag"
import { DatePicker } from "react-trip-date"
import dayjs from "dayjs"
import TextField from "@mui/material/TextField"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { TimePicker } from "@mui/x-date-pickers"
import toast, { Toaster } from "react-hot-toast"

const Bookings = () => {
	const [date, setDate] = useState(new Date().toISOString())
	const [time, settime] = useState(null)
	const [timeval, settimeval] = useState(null)
	const [guest, setguest] = useState("")

	const theme = {
		primary: {
			main: "#097969",
		},
		background: {
			default: "#dedede",
		},
		text: {
			disabled: "#BABABA",
		},
	}
	return (
		<Stack
			justifyContent='center'
			alignItems='center'
			sx={{ position: "relative" }}
			backgroundColor='beige'
			padding={2}
			minHeight='80vh'
		>
			<div
				id='Reservations'
				style={{ position: "absolute", top: "0" }}
			></div>
			<Toaster />
			<Paper
				className='card'
				sx={{
					maxWidth: "650px",
					padding: {
						sm: "4rem 10em",
						xs: "2rem 3rem",
					},
				}}
			>
				<Stack
					justifyContent='center'
					className='book_container'
					alignItems='center'
					spacing={3}
				>
					<SectionTag
						title='ADVANCE BOOKING'
						center='auto'
						color='#171717'
					/>
					<Stack
						justifyContent='center'
						alignItems='center'
						spacing={4}
					>
						<Typography
							variant='h3'
							sx={{
								fontWeight: "700",
								textAlign: "center",
								lineHeight: "2.5rem",
								color: "var(--black)",
							}}
						>
							<span className='cursive'>Make</span>
							<br />
							Reservations
						</Typography>
						<Typography
							variant='body2'
							sx={{
								fontFamily: "Poppins",
								color: "#9a9a9a",
							}}
						>
							We Will Get Back to You Soon !
						</Typography>
						<Stack
							className='book_select'
							sx={{
								display: "flex",
								justifyContent: "space-between",
								width: "150%",
							}}
							direction='row'
						>
							<FormControl sx={{ width: "120px" }}>
								<InputLabel id='date-label'>Date</InputLabel>
								<Select
									labelId='date-label'
									id='date-label'
									value={0}
									label='date'
								>
									<MenuItem
										sx={{ display: "none" }}
										value={0}
									>
										{date}
									</MenuItem>
									<DatePicker
										disabledBeforeToday
										numberOfMonths={2}
										numberOfSelectableDays={1}
										theme={theme}
										onChange={(date) => {
											setDate(date[0])
										}}
									/>
								</Select>
							</FormControl>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<TimePicker
									value={timeval}
									label='Time'
									onChange={(obj) => {
										console.log(`${obj.$H}:${obj.$m}`)
										settimeval(obj)
										settime(`${obj.$H}%3A${obj.$m}`)
									}}
									renderInput={(params) => (
										<TextField {...params} />
									)}
								/>
							</LocalizationProvider>
							<FormControl sx={{ width: "120px" }}>
								<InputLabel id='guest-label'>Guests</InputLabel>
								<Select
									labelId='guest-label'
									id='guest-label'
									small
									value={guest}
									label='Guests'
									onChange={(e) => {
										setguest(e.target.value)
									}}
								>
									<MenuItem value={1}>1</MenuItem>
									<MenuItem value={2}>2</MenuItem>
									<MenuItem value={3}>3</MenuItem>
									<MenuItem value={4}>4</MenuItem>
									<MenuItem value={5}>5</MenuItem>
									<MenuItem value={6}>6</MenuItem>
									<MenuItem value={7}>7</MenuItem>
									<MenuItem value={8}>8</MenuItem>
									<MenuItem value={9}>9</MenuItem>
									<MenuItem value={10}>10</MenuItem>
									<MenuItem value={11}>11</MenuItem>
									<MenuItem value={12}>12</MenuItem>
									<MenuItem value={13}>13</MenuItem>
									<MenuItem value={14}>14</MenuItem>
									<MenuItem value={15}>15</MenuItem>
								</Select>
							</FormControl>
						</Stack>
					</Stack>
				</Stack>
			</Paper>
			<Prim_btn
				title='Check Availability'
				time={time}
				date={date}
				guest={guest}
				clickFn={() => {
					guest !== null && time !== null
						? window.open(
								`https://wa.me/917974935668?text=Seats%20For%20${guest}%20People%20Available%20on%20${dayjs(
									date
								).format("DD%20MMM")}%20at%20${time}%20%3F`
						  )
						: toast.error("Time and No. of Guests are Required !")
				}}
				width='13.2rem'
			/>
		</Stack>
	)
}

export default Bookings
