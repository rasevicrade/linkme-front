import { Props } from 'react';
import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Header from './Header';
import Body from './Body';
import { css } from '@emotion/core';
import { makeStyles, CssBaseline, Grid } from '@material-ui/core';
import NavBar from '../NavBar/NavBar';
import ElevationScroll from '../../../common/ElevationScroll';
import SideBar from '../SideBar/SideBar';

const useStyles = makeStyles(theme => ({
	root: {
		height: '100vh',
		paddingTop: '20px'
	}
}));

export default function Profile() {
	const classes = useStyles();

	return (
		<div>
			<NavBar />
			<SideBar />
			<Container maxWidth="lg" className={classes.root}>
				<Grid container={true} spacing={1}>
					<Grid item={true} xs={12}>
						<Header />
					</Grid>
					<Grid item={true} xs={12}>
						<Body />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
