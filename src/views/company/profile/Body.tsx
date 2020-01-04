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
import JobCard from '../../job/JobCard';

const useStyles = makeStyles((theme: Theme) => ({
	header: {
		backgroundColor: theme.palette.primary.main,
		color: '#fff',
		fontWeight: 'bold'
	}
}));

export default function Body() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<Grid container spacing={1}>
			<Grid item xs={12}>
				<Card>
					<CardHeader
						className={classes.header}
						title={
							<Typography variant="h5">Most wanted</Typography>
						}
					/>
					<CardContent>
						<Grid container spacing={2}>
							<Grid item xs={6}>
								<JobCard />
							</Grid>
							<Grid item xs={6}>
								<JobCard />
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Grid>
			<Grid item xs={12}>
				<Card>
					<CardHeader
						className={classes.header}
						title={
							<Typography variant="h5">Engineering</Typography>
						}
					/>
					<CardContent>
						<Grid container spacing={2}>
							<Grid item xs={6}>
								<JobCard />
							</Grid>
							<Grid item xs={6}>
								<JobCard />
							</Grid>
							<Grid item xs={6}>
								<JobCard />
							</Grid>
							<Grid item xs={6}>
								<JobCard />
							</Grid>
							<Grid item xs={6}>
								<JobCard />
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
}
