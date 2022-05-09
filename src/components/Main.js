import { NavLink } from 'react-router-dom';
import  styled, { keyframes } from 'styled-components';
import Logo from '../subComponents/Logo';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
import { YinYang } from './AllSvgs';

const Main = () => {
	return (
		<MainContainer>
			<Container>
                <PowerButton/>
                <Logo />
                <SocialIcons />
                <Center>
                    <YinYang width={200} height={200} fill="currentColor" />
                    <span>Discover</span>
                </Center>
                <Contact target="_blank" to={{pathname: "mailto:luongkhanhvu1392@gmail.com"}}>
                    <h3>Contact Me ...</h3>
                </Contact>
                <Blog to="/blog">
                    <h3>
                        Blog
                    </h3>
                </Blog>
                <Work to="/work">
                    <h3>
                        Work
                    </h3>
                </Work>
                <BottomBar>
                    <About to="/about">
                        <h3>About</h3>
                    </About>
                    <Skill to="/skills">
                        <h3>My Skills.</h3>
                    </Skill>
                </BottomBar>
            </Container>
		</MainContainer>
	);
};

export default Main;

const MainContainer = styled.div`
	background: ${(props) => props.theme.body};
	width: 100vw;
	height: 100vh;
	overflow: hidden;

	position: relative;

	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: 'Karla', sans-serif;
		font-weight: 500;
	}
`;

const Container = styled.div`
	padding: 2rem;
`;

const Contact = styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 2rem;;
    right: calc(1rem + 2vw);
    text-decoration: none;
    z-index: 1;
`

const Blog = styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 50%;;
    right: calc(1rem + 2vw);
    transform: rotate(90deg) translate(-50%, -50%);
    text-decoration: none;
    z-index: 1;
`

const Work = styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 50%;;
    left: 2rem;
    transform: rotate(-90deg) translate(-50%, -50%);
    text-decoration: none;
    z-index: 1;
`

const BottomBar = styled.div`
    position: absolute;
    bottom: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const About = styled(NavLink)`
    color: ${props => props.theme.text};
    text-decoration: none;
    z-index: 1;
`;

const Skill = styled(NavLink)`
    color: ${props => props.theme.text};
    text-decoration: none;
    z-index: 1;
`;

const rotateYing = keyframes`
    from {
       transform: rotate(0); 
    }
    to{
        transform: rotate(360deg);
    }
`;

const Center = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &>:first-child{
        animation: ${rotateYing} infinite 1s linear;
    }
    &>:last-child{
        padding-top: 1rem;
    }
`;

