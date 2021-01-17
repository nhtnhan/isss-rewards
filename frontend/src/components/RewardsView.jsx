import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const RewardsView = () =>{
    const classes = useStyles();

    return (
    <Grid container spacing={4}>
        {cards.map((card) => (
        <Grid item key={card} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
            <CardMedia
                className={classes.cardMedia}
                image="https://company.timhortons.com/ca/images/section-tim-card-reload-card.png"
                title="Image title"
            />
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                Reward Name: Tim Horton Gift Card
                </Typography>
                <Typography>
                Reward Description: ___________ 
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" size="small" color="secondary">
                Redeem
                </Button>
                <Button variant="contained" size="small" color="primary">
                Detail
                </Button>
            </CardActions>
            </Card>
        </Grid>
        ))}
    </Grid>
    );
}



export default RewardsView;