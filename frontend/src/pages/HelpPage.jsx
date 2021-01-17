import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Link from '@material-ui/core/Link';

import CustomNavbar from '../common/CustomNavbar';
import PointsView from '../components/PointsView';

const useStyles = makeStyles({
  root: {
    marginTop: "20px",
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  para: {
    textAlign: 'center',
    marginTop: '10px',
    marginBottom: 12,
    fontSize: '1rem',
  },
  socials: {
    justifyContent: 'center',
  },
});

const HelpPage = (props) => {
  const classes = useStyles();
  return (
    <div>
      <CustomNavbar/>
      <PointsView/>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h4" component="h2" className={classes.title}>
            Help
          </Typography>
          <Typography variant="body2" component="p" className={classes.para}>
            Email us at abc@isss.ca if you have issues with redeeming your link and for other concerns.
            <br />
            Feel free to DM us on ISSS Socials as well.
          </Typography>
        </CardContent>
        <CardActions className={classes.socials}>
          <Link href="https://www.instagram.com/isss_ualberta/?hl=en">
            <InstagramIcon fontSize="large"></InstagramIcon>
          </Link>
          <Link href="https://www.facebook.com/ISSSUAlberta/">
            <FacebookIcon fontSize="large"></FacebookIcon>
          </Link>
          <Link href="https://twitter.com/isss_uofa?lang=en">
            <TwitterIcon fontSize="large"></TwitterIcon>
          </Link>  
        </CardActions>
      </Card>
    </div>
  )
}

export default HelpPage;