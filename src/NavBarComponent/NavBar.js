import { NavLink } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    AppBar: {
        backgroundColor: "black",
        padding: "10px",
    },
    navlinks: {
        marginLeft: theme.spacing(40),
        display: "flex",
    },
    logo: {
        flexGrow: "",
        cursor: "pointer",
        color: "yellow",
        fontFamily:"fantasy",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "15px",
        padding: '5px',
        
        marginLeft: theme.spacing(5),

        "&:hover": {
            color: "black",
            textDecoration: "none",
            border: "1px solid wheat",
            backgroundColor:"yellow",
            fontSize: "15px",
            padding: '5px',


        },
    },
}));

let NavBar = () => {
    const classes = useStyles();
    return (
        <>

            <AppBar position="static" className={classes.AppBar}>
                <CssBaseline />
                <Toolbar>
                    <Typography variant="h4" className={classes.logo}>
                        Student Management System
                    </Typography>
                    <div className={classes.navlinks}>
                        <NavLink to="/home" className={classes.link}>HOME</NavLink>
                        <NavLink to="/students/showall" className={classes.link}>SHOW</NavLink>
                        <NavLink to="/students/add" className={classes.link}>ADD</NavLink>
                        <NavLink to="/student/search" className={classes.link}>SEARCH</NavLink>
                    </div>
                </Toolbar>
            </AppBar>

        </>
    )
}


export default NavBar;
