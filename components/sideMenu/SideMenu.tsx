import { Card, Text } from "@nextui-org/react";
import styles from "../../styles/SideMenu.module.css";

const SideMenu = () => {
	return (
		<div className={styles.sidemenu_container}>
			<Card className={styles.sidemenu_item}>
				<Card.Body>
					<Text>Menu 1</Text>
				</Card.Body>
			</Card>
			<Card className={styles.sidemenu_item}>
				<Card.Body>
					<Text>Menu 2</Text>
				</Card.Body>
			</Card>
			<Card className={styles.sidemenu_item}>
				<Card.Body>
					<Text>Menu 3</Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default SideMenu;
