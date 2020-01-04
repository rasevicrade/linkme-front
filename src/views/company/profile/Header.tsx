import React from 'react';
import {
	Grid,
	Box,
	Avatar,
	Button,
	makeStyles,
	Theme,
	CardContent,
	Card,
	CardMedia,
	Typography,
	useTheme,
	Paper,
	Divider
} from '@material-ui/core';

import { css } from '@emotion/core';

const useStyles = makeStyles((theme: Theme) => {
	return {
		root: {
			position: 'relative',
			height: '250px',
			backgroundImage: `url('http://placecorgi.com/1300/250')`,
			backgroundColor: theme.palette.secondary.main
		},
		avatar: {
			width: '100px',
			height: '100px',
			marginLeft: 'auto',
			marginRight: 'auto'
		},
		companyInfo: {
			padding: '5px',
			width: '450px',
			height: '100px'
		}
	};
});

export default function Header() {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardContent>
				<Paper elevation={3} className={classes.companyInfo}>
					<Grid container>
						<Grid item xs={12}>
							<Typography variant="h5">
								Microsoft Corp.
							</Typography>
							<Typography color="textSecondary" variant="body2">
								Redmond, WA
							</Typography>
							<Divider variant="middle" />
							<Typography
								color="textSecondary"
								variant="body2"
								align="center"
							>
								<i>
									We’re on a mission to empower every person
									and every organization on the planet to
									achieve more.
								</i>
							</Typography>
						</Grid>
					</Grid>
				</Paper>
			</CardContent>
		</Card>
	);
}
