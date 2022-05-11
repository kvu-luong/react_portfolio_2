import styled, { ThemeProvider } from 'styled-components';
import { Design } from '../components/AllSvgs';
import { lightTheme } from '../components/Themes';
import TransitionPage from '../components/TransitionPage';
import BigTitle from '../subComponents/BigTitle';
import Logo from '../subComponents/Logo';
import ParticleComponent from '../subComponents/ParticleComponent';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';

const MySkillsPage = () => {
	return (
		<TransitionPage>
			<ThemeProvider theme={lightTheme}>
				<Box>
					<Logo click={false} />
					<PowerButton />
					<SocialIcons click={false} />
					<ParticleComponent theme="light" />

					<Main>
						<Title>
							<Design width={40} height={40} />
							Front-end
						</Title>
						<Description>
							I love to create beautiful website, keep it clean, minimal and simple
						</Description>
						<Description>
							<strong>I like to design</strong>
							<ul>
								<li>Web Design</li>
								<li>Mobile Apps</li>
							</ul>
						</Description>
						<Description>
							<strong>Tools</strong>
							<ul>
								<li>figma</li>
							</ul>
						</Description>
					</Main>
					<Main>
						<Title>
							<Design width={40} height={40} />
							Back-end
						</Title>
						<Description>
							I love to create beautiful website, keep it clean, minimal and simple
						</Description>
						<Description>
							<strong>Skills</strong>
							<p>Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase, etc.</p>
						</Description>
						<Description>
							<strong>Tools</strong>
							<p>VScode, Github, Codepen, etc.</p>
						</Description>
					</Main>
					<BigTitle text="SKILLS" top="80%" right="30%" />
				</Box>
			</ThemeProvider>
		</TransitionPage>
	);
};

export default MySkillsPage;

const Box = styled.div`
	background-color: ${(props) => props.theme.body};
	width: 100vw;
	height: 100vh;
	position: relative;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

const Main = styled.div`
	border: 2px solid ${(props) => props.theme.text};
	color: ${(props) => props.theme.text};
	background-color: ${(props) => props.theme.body};
	padding: 2rem;
	width: 30vw;
	height: 50vh;
	z-index: 3;
	line-height: 1.5;

	font-family: 'Ubuntu Momo', monospace;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	&:hover {
		color: ${(props) => props.theme.body};
		background-color: ${(props) => props.theme.text};
	}
`;

const Title = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: calc(1em + 1vw);

	${Main}:hover & {
		& > * {
			fill: ${(props) => props.theme.body};
		}
	}
`;

const Description = styled.div`
	color: ${(props) => props.theme.text};
	font-size: calc(0.6em + 1vw);
	padding: 0.5rem 0;
	${Main}:hover & {
		color: ${(props) => props.theme.body};
	}
	strong {
		margin-bottom: 1rem;
		text-transform: uppercase;
	}
	ul,
	p {
		margin-left: 2rem;
	}
`;
