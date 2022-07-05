import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppLayout from "../components/appLayout/AppLayout";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
	type: "light",
	theme: {
		colors: { primary: "#fff" }, // optional
	},
});

const darkTheme = createTheme({
	type: "dark",
	theme: {
		colors: {
			background: "#363449"
		},
	},
});

function MyApp({ Component, pageProps }: AppProps) {
	return (   
		<NextThemesProvider
			defaultTheme="dark"
			attribute="class"
			value={{
				light: lightTheme.className,
				dark: darkTheme.className,
			}}
		>
			<NextUIProvider>      
				<AppLayout>
					<Component {...pageProps} />
				</AppLayout>          
			</NextUIProvider>
		</NextThemesProvider>
	);
}

export default MyApp;
