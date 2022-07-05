import styles from "../../styles/Header.module.css";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";
import { SunIcon } from "../sunIcon/SunIcon";
import { MoonIcon } from "../moonIcon/MoonIcon";

const Header = () => {
	const auz = "";

	const asdfasd = "";
	const { setTheme } = useNextTheme();
	const { isDark, type } = useTheme();

	return (
		<div className={styles.header}>
			<div className={styles.header_container}>
				<div className={styles.header_title}>Weather App</div>
				<div className={styles.header_switch_darkmode}>
					<Switch
						size="xs"
						iconOn={<SunIcon filled />}
						iconOff={<MoonIcon filled />}
						checked={!isDark}
						onChange={(e) => setTheme(e.target.checked ? "light" : "dark")}
					/>
				</div>
			</div>
			<div className={styles.divider} />
		</div>
	);
};

export default Header;
