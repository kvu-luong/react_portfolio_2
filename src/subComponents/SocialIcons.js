import { NavLink } from 'react-router-dom';
import { Facebook, Github, Twitter, YouTube } from '../components/AllSvgs';
import styled from 'styled-components';
import { darkTheme } from '../components/Themes';
import { motion } from 'framer-motion';

const socialAnimate = {
	start: { transform: 'scale(0)' },
	stop: { scale: [0, 1, 1.5, 1] },
};
const SocialIcons = ({ click }) => {
	return (
		<Icons>
			<motion.div
				variants={socialAnimate}
				initial="start"
				animate="stop"
				transition={{ type: 'spring', duration: 1, delay: 1 }}
			>
				<NavLink
					style={{ color: 'inherit' }}
					target="_blank"
					to={{ pathname: 'https://google.com' }}
				>
					<Github with={25} height={25} fill={click ? darkTheme.text : darkTheme.body} />
				</NavLink>
			</motion.div>
			<motion.div
				variants={socialAnimate}
				initial="start"
				animate="stop"
				transition={{ type: 'spring', duration: 1, delay: 1.3 }}
			>
				<NavLink
					style={{ color: 'inherit' }}
					target="_blank"
					to={{ pathname: 'https://google.com' }}
				>
					<Twitter with={25} height={25} fill={click ? darkTheme.text : darkTheme.body} />
				</NavLink>
			</motion.div>
			<motion.div
				variants={socialAnimate}
				initial="start"
				animate="stop"
				transition={{ type: 'spring', duration: 1, delay: 1.6 }}
			>
				<NavLink
					style={{ color: 'inherit' }}
					target="_blank"
					to={{ pathname: 'https://google.com' }}
				>
					<Facebook with={25} height={25} fill={click ? darkTheme.text : darkTheme.body} />
				</NavLink>
			</motion.div>
			<motion.div
				variants={socialAnimate}
				initial="start"
				animate="stop"
				transition={{ type: 'spring', duration: 1, delay: 1.9 }}
			>
				<NavLink
					style={{ color: 'inherit' }}
					target="_blank"
					to={{ pathname: 'https://google.com' }}
				>
					<YouTube with={25} height={25} fill={click ? darkTheme.text : darkTheme.body} />
				</NavLink>
			</motion.div>

			<Line
				click={click}
				initial={{ height: 0 }}
				animate={{ height: '8rem' }}
				transition={{ type: 'spring', duration: 1, delay: 0.8 }}
			/>
		</Icons>
	);
};

export default SocialIcons;

const Icons = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	position: fixed;
	bottom: 0;
	left: 2rem;

	z-index: 3;

	& > *:not(:last-child) {
		margin: 0.5rem 0;
	}
`;

const Line = styled(motion.span)`
	width: 2px;
	height: 8rem;
	background-color: ${(props) => (props.click ? darkTheme.text : darkTheme.body)};
`;
