/** @jsx jsx */
import { jsx } from '@emotion/core';
import ReactDOM from 'react-dom';
import Profile from './views/company/profile/Profile';
import theme from './theme/Theme';
import 'typeface-roboto';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { MuiThemeProvider } from 'material-ui/styles';
import { ThemeProvider } from '@material-ui/core';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Profile />
		</ThemeProvider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
