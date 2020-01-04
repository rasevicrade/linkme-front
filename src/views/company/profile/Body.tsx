import React from 'react';
import {
	Grid,
	Box,
	Avatar,
	makeStyles,
	CardHeader,
	Card,
	CardContent,
	useTheme,
	Theme
} from '@material-ui/core';
import { css } from '@emotion/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		height: '100vh',
		backgroundColor: theme.palette.secondary.main
	},
	header: {
		backgroundColor: theme.palette.primary.main
	},
	body: {
		backgroundColor: theme.palette.secondary.main
	}
}));

export default function Body() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<Card className={classes.root}>
			<CardHeader
				className={classes.header}
				title={
					<Typography variant="h5" component="h5">
						Test
					</Typography>
				}
			/>
			<CardContent className={classes.body}>wd</CardContent>
		</Card>
	);
}
