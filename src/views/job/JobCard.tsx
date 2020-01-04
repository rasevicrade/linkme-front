import React from 'react';
import {
	CardContent,
	Card,
	CardHeader,
	Grid,
	Divider,
	Chip
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export default function JobCard() {
	return (
		<Card>
			<CardContent>
				<Grid container={true} spacing={2}>
					<Grid item xs={12}>
						<Typography variant="h5" color="textSecondary">
							Frontend developer
						</Typography>
						<Typography
							variant="body2"
							color="textSecondary"
							component="p"
						>
							Senior - Sydney, Australia - Full Time
						</Typography>
						<Divider variant="middle" />
					</Grid>
					<Grid item={true} xs={12}>
						<Typography
							variant="h6"
							component="h2"
							color="textSecondary"
						>
							Required
						</Typography>
						<Chip label="React" />
						<Chip label="CSS" />
						<Chip label="Html" />
						<Chip label="Bachelor's degree" />
						<Typography
							variant="h6"
							component="h2"
							color="textSecondary"
						>
							Optional
						</Typography>
						<Chip label="Node" />
						<Chip label="Java" />
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
}
