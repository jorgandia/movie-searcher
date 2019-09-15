import React from 'react';
import { Card, Grid, Typography, Button } from '@material-ui/core';
import {withRouter} from 'react-router-dom';

import style from './style';

const MovieResult = ({ Title, Poster, Type, Year, imdbID, history }) => {
    const classes = style();

    const handleViewMore = () => {
        history.push(`/movie/${imdbID}`);
    }

    return (
        <Card className={classes.cardContainer}>
            <Grid container>
                <Grid item>
                    <img src={Poster} alt={Title} className={classes.poster} />
                </Grid>
                <Grid item className={classes.titleGrid}>
                    <Typography>{Title}</Typography>
                    <Typography>{Year}</Typography>
                    <Typography>{Type}</Typography>
                    <Button color="primary" variant="contained" onClick={handleViewMore}>Ver más</Button>
                </Grid>
            </Grid>
        </Card>
    )
}


export default withRouter(MovieResult);