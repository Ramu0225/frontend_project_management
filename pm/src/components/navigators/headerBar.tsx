import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
	pageHeader: {
		width: "80%",
		minHeight: "30px",
		backgroundColor: "black",
		margin: "0",
		padding: "0",
	}
})
function HeaderBar() {
		const classes = useStyles()
	return (
		<div className={classes.pageHeader}>
			<AppBar >
				<Toolbar>
					<Typography >
						Project Name
					</Typography>
					<Button>
						Login
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
export default HeaderBar;