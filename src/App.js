import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyles';
import { lightTheme } from './components/Themes';
import { Route, Switch } from 'react-router-dom';
import AboutPage from './page/AboutPage';
import BlogPage from './page/BlogPage';
import Main from './page/Main';
import WorkPage from './page/WorkPage';
import MySkillsPage from './page/MySkillsPage';

function App() {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={lightTheme}>
				<Switch>
					<Route exact path="/" component={Main} />
					<Route exact path="/about" component={AboutPage} />
					<Route exact path="/blog" component={BlogPage} />
					<Route exact path="/work" component={WorkPage} />
					<Route exact path="/skills" component={MySkillsPage} />
				</Switch>
			</ThemeProvider>
		</>
	);
}

export default App;
