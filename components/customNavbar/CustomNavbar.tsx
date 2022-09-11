import styles from "../../styles/CustomNavbar.module.css";
import { useTheme as useNextTheme } from "next-themes";
import {
	Container,
	Switch,
	useTheme,
	Navbar,
	Text,
	Button,
} from "@nextui-org/react";
// import { SunIcon } from "../sunIcon/SunIcon";
// import { MoonIcon } from "../moonIcon/MoonIcon";

const CustomNavbar = () => {
	// const { setTheme } = useNextTheme();
	// const { isDark, type } = useTheme();

	const handleScroll = () => {
		console.log("window.scrollY", window.scrollY);
		const customNavbar = document.getElementById("custom-navbar");
		if (window.scrollY <= 15) {
			customNavbar.style.boxShadow = "0 0px 0px 0px rgb(104 112 118 / 0.08)";
			customNavbar.style.transition = "box-shadow 0.2s ease-in-out";
			console.log(customNavbar.style);
		} else {
			customNavbar.style.boxShadow = "0 12px 20px 4px rgb(104 112 118 / 0.08)";
			customNavbar.style.transition = "box-shadow 0.2s ease-in-out";
			console.log(customNavbar.style);
		}
	};

	if (typeof window !== "undefined") {
		window.addEventListener("scroll", handleScroll);
	}

	return (
		<Navbar
			id={"custom-navbar"}
			className={styles.customNavbar_container}
			height={"70px"}
			variant={"sticky"}
			isCompact
			disableShadow
		>
			<Navbar.Brand>
				<span className={styles.header_title}>Weather App</span>
			</Navbar.Brand>
			<Navbar.Content hideIn="xs">
				<Navbar.Link href="#">Features</Navbar.Link>
				<Navbar.Link isActive href="#">
					Customers
				</Navbar.Link>
				<Navbar.Link href="#">Pricing</Navbar.Link>
				<Navbar.Link href="#">Company</Navbar.Link>
			</Navbar.Content>
			<Navbar.Content>
				{/* <Navbar.Item>
				<Switch
						size="xs"
						iconOn={<SunIcon filled />}
						iconOff={<MoonIcon filled />}
						checked={!isDark}
						onChange={(e) => setTheme(e.target.checked ? "light" : "dark")}
					/>
				</Navbar.Item> */}
				{/* <Navbar.Item>
						<Button auto flat as={Link} href="#">
							Sign Up
						</Button>
					</Navbar.Item> */}
			</Navbar.Content>
		</Navbar>
	);
};

export default CustomNavbar;
