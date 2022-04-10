import { AppBar, Avatar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { Apps, ArrowBack, AssignmentInd, ContactMail, Home } from '@material-ui/icons';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const useStyles = makeStyles((theme) => ({
    appbar: {
        background: "#222",
        margin: 0
    },
    arrow: {
        color: "tomato",
    },
    title: {
        color: "tan",
    },
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: "tan"
    }
}))

const menuItems = [
    { listIcon: <Home />, listText: "Home", listPath: "/" },
    { listIcon: <AssignmentInd />, listText: "Resume", listPath: "/resume" },
    { listIcon: <Apps />, listText: "Portfolio", listPath: "/portfolio" },
    { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" }
]
const NavigationBar = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const sideList = () => (
        <Box className={classes.menuSliderContainer} component="div">
            <Avatar className={classes.avatar} src='' alt="Anuj Kumar" />
            <Divider />
            <List>
                {menuItems && menuItems.map((item, i) => (
                    <ListItem
                        button
                        key={i}
                        className={classes.listItem}
                        onClick={() => setOpen(false)}
                        component={Link}
                        to={item.listPath}
                    >
                        <ListItemIcon className={classes.listItem}>{item.listIcon}</ListItemIcon>
                        <ListItemText primary={item.listText} />
                    </ListItem>
                ))}
            </List>
        </Box>
    )
    return (
        <>
            {console.log("Open", open)}
            <Box component="nav">
                <AppBar position='static' className={classes.appbar}>
                    <Toolbar>
                        <IconButton onClick={() => setOpen(true)} >
                            <ArrowBack className={classes.arrow} />
                        </IconButton>
                        <Typography variant='h5' className={classes.title}>
                            Portfolio
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer open={open} anchor="right" onClose={() => setOpen(false)} >
                {sideList()}
                <Footer />
            </Drawer>
        </>
    )
}

export default NavigationBar;