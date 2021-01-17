import React from 'react';
import logo from '../images/isss_logo_no_words.png';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
      textAlign: "center"
    },
    logo: {
      maxWidth: 50,
      marginRight: '10px'
    },
    button: {
      textAlign: "center"
    }
  })
);

const CustomNavbar = (props) => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" className={classes.logo}>
          <img src={logo} alt="ISSS logo" width={30} height={30}/>
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          My Rewards
        </Typography>
        <Button color="inherit" className={classes.button}>by ISSS</Button>
      </Toolbar>
    </AppBar>
  )
}

export default CustomNavbar;