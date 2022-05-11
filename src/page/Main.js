import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Logo from '../subComponents/Logo';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
import { YinYang } from '../components/AllSvgs';
import Intro from '../components/Intro';
import { motion } from 'framer-motion';

const TitleAnimate = {
	startX: {
		y: 200,
		transition: { type: 'spring', duration: 1.5, delay: 1 },
	},
	stopX: {
		y: 0,
		transition: { type: 'spring', duration: 1.5, delay: 1 },
	},
	startY: {
		y: -200,
		transition: { type: 'spring', duration: 1.5, delay: 1 },
	},
	stopY: {
		y: 0,
		transition: { type: 'spring', duration: 1.5, delay: 1 },
	},
	hover: { scale: 1.1 },
	tap: { scale: 0.9 },
};
const Main = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	return (
		<MainContainer>
			<Container>
				<PowerButton />
				<Logo click={click} />
				<SocialIcons click={click} />
				<Center click={click}>
					<YinYang
						onClick={() => handleClick()}
						width={click ? 80 : 150}
						height={click ? 80 : 150}
						fill="currentColor"
					/>
					<motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
						Explore
					</motion.span>
				</Center>
				<Contact target="_blank" to={{ pathname: 'mailto:luongkhanhvu1392@gmail.com' }}>
					<motion.h3
						variants={TitleAnimate}
						initial="startY"
						animate="stopY"
						whileHover="hover"
						whileTap="tap"
					>
						Contact Me ...
					</motion.h3>
				</Contact>
				<Blog to="/blog">
					<motion.h3
						variants={TitleAnimate}
						initial="startY"
						animate="stopY"
						whileHover="hover"
						whileTap="tap"
					>
						Blog
					</motion.h3>
				</Blog>
				<Work to="/work">
					<motion.h3
						variants={TitleAnimate}
						initial="startY"
						animate="stopY"
						whileHover="hover"
						whileTap="tap"
					>
						Work
					</motion.h3>
				</Work>
				<BottomBar>
					<About to="/about">
						<motion.h3
							variants={TitleAnimate}
							initial="startX"
							animate="stopX"
							whileHover="hover"
							whileTap="tap"
						>
							About
						</motion.h3>
					</About>
					<Skill to="/skills">
						<motion.h3
							variants={TitleAnimate}
							initial="startX"
							animate="stopX"
							whileHover="hover"
							whileTap="tap"
						>
							My Skills.
						</motion.h3>
					</Skill>
				</BottomBar>

				<DarkDiv click={click} />
			</Container>
			{click ? <Intro /> : undefined}
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
	color: ${(props) => props.theme.text};
	position: absolute;
	top: 2rem;
	right: calc(1rem + 2vw);
	text-decoration: none;
	z-index: 2;
`;

const Blog = styled(NavLink)`
	color: ${(props) => props.theme.text};
	position: absolute;
	top: 50%;
	right: calc(1rem + 2vw);
	transform: rotate(90deg) translate(-50%, -50%);
	text-decoration: none;
	z-index: 2;
`;

const Work = styled(NavLink)`
	color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
	position: absolute;
	top: 50%;
	left: 2rem;
	transform: translate(-50%, -50%) rotate(-90deg);
	text-decoration: none;
	z-index: 2;
`;

const BottomBar = styled.div`
	position: absolute;
	bottom: 1rem;
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

const About = styled(NavLink)`
	color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
	text-decoration: none;
	z-index: 2;
`;

const Skill = styled(NavLink)`
	color: ${(props) => props.theme.text};
	text-decoration: none;
	z-index: 2;
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
	top: ${(props) => (props.click ? '85%' : '50%')};
	left: ${(props) => (props.click ? '92%' : '50%')};
	transform: translate(-50%, -50%);

	border: none;
	outline: none;
	background-color: transparent;
	cursor: pointer;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: all 1s ease;

	& > :first-child {
		animation: ${rotateYing} infinite 1s linear;
	}
	& > :last-child {
		display: ${(props) => (props.click ? 'none' : 'inline-block')};
		padding-top: 1rem;
	}
`;

const DarkDiv = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 50%;

	width: ${(props) => (props.click ? '50%' : '0%')};
	height: ${(props) => (props.click ? '100%' : '0%')};
	z-index: 1;
	background-color: #000;

	transition: height 0.5s ease, width 1s ease 0.5s;
`;
