import Head from "next/head";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import { Grid, Card, Text } from "@nextui-org/react";
import SideMenu from "../sideMenu/SideMenu";
import styles from "../../styles/AppLayout.module.css";

const AppLayout = ({ children }: any) => {
	return (
		<>
			<Head>
				<title>Weather App 🌤</title>
				<meta name="Weather App" content="Weather App build with Next.JS" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			{/* <Navbar /> */}
			<div className={styles.appLayout_body_container}>
				<Grid.Container
					className={styles.appLayout_body_grid}
					justify="flex-start"
				>
					<Grid xs={3}>
						{/* <SideMenu /> */}
					</Grid>
					<Grid xs={6}>
						{/* <main> */}
						{children}
						{/* </main> */}
					</Grid>
				</Grid.Container>
			</div>
		</>
	);
};

export default AppLayout;
