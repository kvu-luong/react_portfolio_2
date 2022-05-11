import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyles';
import { lightTheme } from './components/Themes';
import { Route, Switch, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { Suspense, lazy } from 'react';
import  DotLoader from 'react-spinners/DotLoader';
import Sound from './subComponents/Sound';
const AboutPage = lazy(() => import('./page/AboutPage'));
const BlogPage = lazy(() => import('./page/BlogPage'));
const Main = lazy(() => import('./page/Main'));
const WorkPage = lazy(() => import('./page/WorkPage'));
const MySkillsPage = lazy(() => import('./page/MySkillsPage'));

function App() {
	const location = useLocation();
	return (
		<>
			<Suspense
				fallback={
					<CenterLoading>
						<DotLoader color={'#7ED321'} loading={true} size={150} />
					</CenterLoading>
				}
			>
				<GlobalStyle />
				<ThemeProvider theme={lightTheme}>
				<Sound />
					<AnimatePresence existBeforeEnter>
						<Switch location={location} key={location.pathname}>
							<Route exact path="/" component={Main} />
							<Route exact path="/about" component={AboutPage} />
							<Route exact path="/blog" component={BlogPage} />
							<Route exact path="/work" component={WorkPage} />
							<Route exact path="/skills" component={MySkillsPage} />
						</Switch>
					</AnimatePresence>
				</ThemeProvider>
			</Suspense>
		</>
	);
}

export default App;

const CenterLoading = styled.div`
	width: 100%;
	height: 100vh;
	overflow: hidden;
	background-color: #fcf6f4;
	display: flex;
	justify-content: center;
	align-items: center;
`;
