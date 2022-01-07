import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SideMenuItems from "../components/sidemenu/sideMenuItems";
import HeaderBar from "../components/navigators/headerBar";

const useStyles = makeStyles({
	page: {
		width: "100%",
		minHeight: "100%",
		backgroundColor: "snow",
		margin: "0",
		padding: "0",
		display: "flex",
		flexDirection: "row",
	},
	sideMenu: {
		width: "20%",
		minHeight: "850px",
		backgroundColor: "#2aa4c6",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	pageMenu: {
		width: "80%",
		minHeight: "100%",
		margin: "0",
		padding: "0",
		backgroundColor: "#2aa4c6",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
	sideMenuHeader: {
		width: "100%",
		position: "sticky",
		top: "0",
		margin: "0",
		padding: "0",
	},
	login: {
		minHeight: "50vh",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
});

function HomePage() {
	const classes = useStyles();
	
	return (
		<section className={classes.page}>
      <section className={classes.pageMenu}>
        <HeaderBar />
      </section>
			<section className={classes.sideMenu}>
				<SideMenuItems />
			</section>
		</section>
	);
}

export default HomePage;
