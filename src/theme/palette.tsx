import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

export default {
	black,
	white,
	primary: {
		contrastText: white,
		main: colors.red[900]
	},
	secondary: {
		contrastText: white,
		main: colors.grey[100]
	},
	text: {
		primary: white,
		secondary: black,
		link: colors.blue[600]
	}
};
