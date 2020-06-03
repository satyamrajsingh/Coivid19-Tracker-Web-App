import React from 'react'
import { Card,CardContent,Typography,Grid } from "@material-ui/core";

import CountUp from "react-countup";
import cx from 'classnames' ;
import styles from "./Cards.module.css";


//as we send the total data,we destructure imp keys from it,as present in api
const Cards = ({data :{confirmed,recovered,deaths,lastUpdate}}) =>{

if(!confirmed)
{
return 'Loading!!!';
}


return (
<div className={styles.container}>
    <Grid container spacing={3} variant="outlined" justify="center"  >


        <Grid item component={Card}  xs={12} md={3} className={cx(styles.card,styles.infected)} >
            <CardContent >
                <Typography className={cx(styles.display)} gutterBottom>Infected</Typography>

                <Typography variant="h5">
                    <CountUp start={0} end={confirmed.value} duration={3} seperator=',' />
                </Typography>

                <Typography className={cx(styles.display)} >
                    {new Date(lastUpdate).toDateString()}
                </Typography>

                <Typography className={cx(styles.fontText)} variant="body2">Number of Active cases of COVID-19</Typography>
            </CardContent>
        </Grid>


        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
            <CardContent>
                <Typography className={cx(styles.display)}  gutterBottom>Recovered</Typography>

                <Typography variant="h5">
                    <CountUp start={0} end={recovered.value} duration={3} seperator=',' />
                </Typography>

                <Typography className={cx(styles.display)} >
                    {new Date(lastUpdate).toDateString()}
                </Typography>

                <Typography className={cx(styles.fontText)}  variant="body2">Number of Recoveries from COVID-19</Typography>
            </CardContent>
        </Grid>


        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
            <CardContent>
                <Typography className={cx(styles.display)} gutterBottom>Deaths</Typography>

                <Typography variant="h5">
                    <CountUp start={0} end={deaths.value} duration={3} seperator=',' />
                </Typography>

                <Typography className={cx(styles.display)} >
                    {new Date(lastUpdate).toDateString()}
                </Typography>

                <Typography className={cx(styles.fontText)}  variant="body2">Number of Deaths due to COVID-19</Typography>
            </CardContent>
        </Grid>


    </Grid>

</div>
)
}


export default Cards