import { Stack } from "@mui/system"
import "./App.css"
import About from "./Components/About/About"
import Bookings from "./Components/Bookings"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero"
import Menu from "./Components/Menu/Menu"
import Navbar from "./Components/Navbar/Navbar"
import Payments from "./Components/Payments"
import Posts from "./Components/Posts"

function App() {
	return (
		<>
			<Stack direction='column' sx={{ backgroundColor: "beige" }}>
				<Navbar />
				<Hero />
				<About />
				<Menu />
				<Posts />
				<Bookings />
			</Stack>
			<Payments />
			<Footer />
		</>
	)
}

export default App
