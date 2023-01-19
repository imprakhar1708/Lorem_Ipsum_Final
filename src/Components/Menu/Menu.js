import {
	Chip,
	FormControl,
	InputLabel,
	MenuItem,
	Pagination,
	Paper,
	Rating,
	Select,
	Typography,
} from "@mui/material"
import { Stack } from "@mui/system"
import React, { useEffect, useState } from "react"
import SectionTag from "../SectionTag"
import "./Menu.css"
import SingleMenuCard from "./SingleMenuCard"

const Menu = () => {
	const [filters, setfilters] = useState({
		active: "Starters",
		veg: true,
		rating: false,
	})
	const [reg, setreg] = useState(null)
	const [main, setmain] = useState(null)
	const [soup, setsoup] = useState(null)
	const [start, setstart] = useState(null)
	const [vol, setvol] = useState(null)
	const [bread, setbread] = useState(null)
	const [extra, setextra] = useState(null)
	const [sort, setsort] = useState(true)
	const [displaydata, setdisplaydata] = useState(null)
	const [activedata, setactivedata] = useState(null)
	const lists = [
		"Starters",
		"Regulars",
		"Soups",
		"Main Course",
		"Vol-au-Vent",
		"Breads",
		"Extras",
	]
	const fetchData = async () => {
		const reg1 = await fetch("./reg.json")
		const reg2 = await reg1.json()
		const main1 = await fetch("./mainC.json")
		const main2 = await main1.json()
		const soup1 = await fetch("./soup.json")
		const soup2 = await soup1.json()
		const start1 = await fetch("./starters.json")
		const start2 = await start1.json()
		const vol1 = await fetch("./vol.json")
		const vol2 = await vol1.json()
		const bread1 = await fetch("./breads.json")
		const bread2 = await bread1.json()
		const extra1 = await fetch("./extras.json")
		const extra2 = await extra1.json()
		setreg(reg2)
		setmain(main2)
		setsoup(soup2)
		setstart(start2)
		setbread(bread2)
		setextra(extra2)
		setvol(vol2)
		setactivedata(reg2)
	}

	useEffect(() => {
		fetchData()
	}, [])

	useEffect(() => {
		setactivedata(
			filters.active === "Soups"
				? soup
				: filters.active === "Regulars"
				? reg
				: filters.active === "Main Course"
				? main
				: filters.active === "Starters"
				? start
				: filters.active === "Vol-au-Vent"
				? vol
				: filters.active === "Breads"
				? bread
				: filters.active === "Extras"
				? extra
				: null
		)
	}, [filters])

	useEffect(() => {
		setdisplaydata(
			activedata
				?.filter((item) => {
					return filters.rating === true
						? parseInt(item.rating) >= 4
						: true
				})
				?.filter((item) => {
					return filters.veg === true
						? item.veg === "true"
						: item.veg === "false"
				})
				?.sort((a, b) => {
					return sort ? a.price - b.price : b.price - a.price
				})
		)
		console.log(sort)
	}, [filters, activedata, sort])

	return (
		<Stack
			bgcolor='beige'
			className='menu'
			sx={{
				position: "relative",
				width: {
					sm: "1200px",
					xs: "100vw",
				},
				marginInline: "auto !important",
				padding: {
					sm: ".7rem 0",
					xs: ".7rem",
				},
				gap: {
					sm: "3em",
					xs: "2em",
				},
			}}
			direction='column'
			flexWrap='wrap'
		>
			<div id='Menu' style={{ position: "absolute", top: "0" }}></div>
			<SectionTag title='EXPLORE' color='#171717' />
			<Stack
				sx={{
					gap: {
						sm: "0",
						xs: "1.5rem",
					},
					flexDirection: {
						sm: "row",
						xs: "column",
					},
					alignItems: {
						sm: "flex-end",
						xs: "flex-start",
					},
				}}
				justifyContent='space-between'
				flexWrap='wrap'
			>
				<Stack direction='column' spacing={3}>
					<Typography
						sx={{
							fontFamily: "Roboto",
							fontWeight: "700",
							fontSize: "3.7rem",
							lineHeight: "3.5rem",
							color: "var(--black)",
						}}
					>
						<span className='cursive'>Hot</span>
						<br />
						Selling Recipes
					</Typography>
					<Typography
						variant='body2'
						sx={{
							fontFamily: "Poppins",
							color: "#9a9a9a",
						}}
					>
						Discover our Innovative and Exclusive Dishes !
					</Typography>
				</Stack>
				<Stack direction='row'>
					{lists.map((item, i) => {
						return (
							<li
								key={i}
								onClick={() =>
									setfilters({ ...filters, active: item })
								}
								className={`li ${
									filters.active === item && "active"
								}`}
							>
								{item}
							</li>
						)
					})}
				</Stack>
			</Stack>
			<Stack
				alignItems='center'
				spacing={2}
				justifyContent='space-between'
				sx={{
					flexDirection: {
						sm: "row",
						xs: "column",
					},
				}}
			>
				<Stack spacing={3} direction='row'>
					<Chip
						variant='filled'
						onClick={() => {
							setfilters({ ...filters, rating: !filters.rating })
						}}
						className={`${
							filters.rating === true && "active-chip"
						}`}
						label='Rating: 4+'
					/>
					<Chip
						label='Pure Veg'
						onClick={() => {
							setfilters({ ...filters, veg: true })
						}}
						className={`${filters.veg === true && "active-chip"}`}
						sx={{
							":hover": {
								backgroundColor: "var(--primary_clr)",
								color: "white",
							},
						}}
					/>
					<Chip
						label='Non Veg'
						onClick={() => {
							setfilters({ ...filters, veg: false })
						}}
						className={`${filters.veg === false && "active-chip"}`}
						sx={{
							":hover": {
								backgroundColor: "var(--primary_clr)",
								color: "white",
							},
						}}
					/>
				</Stack>
				<FormControl
					sx={{
						minWidth: 80,
					}}
				>
					<InputLabel id='demo-simple-select-autowidth-label'>
						Sort By
					</InputLabel>
					<Select
						defaultValue={true}
						labelId='demo-simple-select-autowidth-label'
						id='demo-simple-select-autowidth'
						autoWidth
						label='Sort By'
						size='small'
						onChange={(e) => {
							setsort(e.target.value)
						}}
					>
						<MenuItem
							sx={{
								fontFamily: "Sofia Sans Extra Condensed",
								":hover": {
									backgroundColor: "var(--primary_clr)",
									color: "white",
								},
								":focus": {
									backgroundColor: "var(--primary_clr)",
									color: "white",
								},
							}}
							value={false}
						>
							Price High to Low
						</MenuItem>
						<MenuItem
							sx={{
								fontFamily: "Sofia Sans Extra Condensed",
								":hover": {
									backgroundColor: "var(--primary_clr)",
									color: "white",
								},
								":focus": {
									backgroundColor: "var(--primary_clr)",
									color: "white",
								},
							}}
							value={true}
						>
							Price Low to High
						</MenuItem>
					</Select>
				</FormControl>
			</Stack>
			<Stack
				direction='row'
				overflow='scroll'
				sx={{
					maxHeight: {
						sm: "700px",
						xs: "520px",
					},
				}}
				flexWrap='wrap'
			>
				{displaydata === null || displaydata?.length === 0 ? (
					<Typography>No Results for Selected Filters...</Typography>
				) : (
					displaydata?.map((item, index) => {
						return <SingleMenuCard item={item} />
					})
				)}
			</Stack>
		</Stack>
	)
}

export default Menu
