import * as React from "react"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import MenuSharpIcon from "@mui/icons-material/MenuSharp"

const options = ["About", "Menu", "Reservations", "Posts", "Payments"]

const ITEM_HEIGHT = 48

export default function Nav_Menu() {
	const [anchorEl, setAnchorEl] = React.useState(null)
	const open = Boolean(anchorEl)
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = (e) => {
		setAnchorEl(null)
	}

	return (
		<div>
			<IconButton
				aria-label='more'
				id='long-button'
				aria-controls={open ? "long-menu" : undefined}
				aria-expanded={open ? "true" : undefined}
				aria-haspopup='true'
				onClick={handleClick}
			>
				<MenuSharpIcon sx={{ color: "#f2efeb", fontSize: "2rem" }} />
			</IconButton>
			<Menu
				id='long-menu'
				MenuListProps={{
					"aria-labelledby": "long-button",
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				PaperProps={{
					style: {
						maxHeight: "400px",
						width: "300px",
						backgroundColor: "var(--primary_clr)",
						color: "white",
					},
				}}
			>
				{options.map((option) => (
					<a
						style={{
							textDecoration: "none",
							color: "white",
						}}
						href={`#${option}`}
					>
						<MenuItem
							sx={{
								padding: "2rem 0.5rem",
								justifyContent: "center !important",
								fontSize: "1.5rem",
								fontFamily: "Sofia Sans Extra Condensed",
								":hover": {
									backgroundColor: "white",
									color: "var(--primary_clr)",
								},
							}}
							key={option}
							onClick={handleClose}
						>
							{option}
						</MenuItem>
					</a>
				))}
			</Menu>
		</div>
	)
}
