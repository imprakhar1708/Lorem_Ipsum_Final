import { Container, Stack } from "@mui/system"
import React from "react"
import logo from "../../Assets/logo.png"
import "./navbar.css"
import Nav_Menu from "../Nav-Menu"

const Navbar = () => {
	return (
		<Container maxWidth='xl' sx={{ bgcolor: "#171717" }}>
			<Stack
				maxWidth='1200px'
				direction='row'
				justifyContent='space-between'
				alignItems='center'
				padding='1em 0'
				sx={{ position: "sticky", marginInline: "auto" }}
			>
				<a href=''>
					<img className='logo' src={logo} />
				</a>
				<Nav_Menu />
			</Stack>
		</Container>
	)
}

export default Navbar
