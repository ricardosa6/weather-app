import Head from "next/head";
// import Header from "../customNavbar/CustomNavbar";
// import SideMenu from "../sideMenu/SideMenu";
import styles from "../../styles/AppLayout.module.css";
import CustomNavbar from "../customNavbar/CustomNavbar";

const AppLayout = ({ children }: any) => {
	return (
		<>
			<Head>
				<title>Weather App 🌤</title>
				<meta name="Weather App" content="Weather App build with Next.JS" />
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<CustomNavbar />
			<div className={styles.appLayout_body_container}>{children}</div>
		</>
	);
};

export default AppLayout;
