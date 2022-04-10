import { Avatar, Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Typed from 'react-typed'
import React from "react";

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    title: {
        color: "tomato",
    },
    subtitle: {
        color: "tan",
        textTransform: "uppercase",
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "tanslate(-50%,-50%)",
        width: "100vw",
        textAlign: "center"
    },
}));
const Header = () => {

    const classes = useStyles();
    return (
        <Box className={classes.typedContainer} >
            <Grid container justify="center" >
                <Avatar className={classes.avatar} src="" alt="Anuj Kumar" />
            </Grid>
            <Typography className={classes.title} variant="h4" >
                <Typed strings={["Anuj Kumar"]} typeSpeed={40} />
            </Typography>
            <Typography className={classes.subtitle} variant="h5" >
                <Typed
                    strings={[
                        "Frontend Developer",
                        "Cyber Security Enhausiast"
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
            </Typography>
        </Box>
    )
}


export default Header;