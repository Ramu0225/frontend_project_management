import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
	sideMenu: {
		minHeight: "200px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-between",
	},
	sideMenuItem: {
		
		cursor: "pointer",
		marginTop: "100px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-between",
	},
	link: {
		margin: "2px",
		textDecoration: "none",
		color: "black",
		fontSize: "15px",
		fontFamily: "Roboto",
	},
	btn: {
		marginTop: "120px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
});

function SideMenuItems() {
	const classes = useStyles();

	return (
		<section className={classes.sideMenuItem}>
			<div>LOGO</div>
			<div className={classes.sideMenuItem}>
        <Link to="/user/project" className={classes.link}>
          +Add Project
        </Link>
				<Link to="/user/member" className={classes.link}>
					+Invite Member
				</Link>
			</div>
		</section>
	);
}
export default SideMenuItems;
