import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Facebook, GitHub, Instagram } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles({
    bottomNavigation: {
        background: '#222'
    },
    root: {
        "& .MuiSvgIcon-root": {
            fill: "tan",
            "&:hover": {
                fill: "tomato",
                fontSize: "1.8rem"
            },
        },
    },
});
const Footer = () => {
    const classes = useStyles();

    return (
        <BottomNavigation className={classes.bottomNavigation} >
            <BottomNavigationAction icon={<GitHub />} className={classes.root} />
            <BottomNavigationAction icon={<Facebook />} className={classes.root} />
            <BottomNavigationAction icon={<Instagram />} className={classes.root} />
        </BottomNavigation>
    )
}

export default Footer;