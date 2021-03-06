import styled from 'styled-components';
import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg';
import BlogComponent from '../components/BlogComponent';
import Logo from '../subComponents/Logo';
import PowerButton from '../subComponents/PowerButton';
import SocialIcon from '../subComponents/SocialIcons';

import { Blogs } from '../data/BlogData';
import AnchorComponent from '../subComponents/Anchor';
import { useState, useEffect } from 'react';
import BigTitle from '../subComponents/BigTitle';
import { motion } from 'framer-motion';
import TransitionPage from '../components/TransitionPage';

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.5,
			duration: 0.5,
		},
	},
};

const BlogPage = () => {
	const [number, setNumber] = useState(1);

	useEffect(() => {
		let num = (window.innerHeight - 70) / 30;
		setNumber(parseInt(num));
		// console.log({num, windowHeight: window.innerHeight});
	}, []);
	return (
		<TransitionPage>
			<WrapContainer>
				<Container>
					<Logo click={false} />
					<PowerButton />
					<SocialIcon click={false} />
					<Center>
						<Grid variants={container} initial="hidden" animate="show">
							{Blogs && Blogs.map((item) => <BlogComponent key={item.id} blog={item} />)}
						</Grid>
					</Center>
					<AnchorComponent number={number} />
					<BigTitle text="BLOG" top="10%" left="10%" />
				</Container>
			</WrapContainer>
		</TransitionPage>
	);
};

export default BlogPage;

const WrapContainer = styled.div`
	background-image: url(${img});
	background-size: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center;
`;

const Container = styled.div`
	background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.8)`};
	width: 100%;
	min-height: 100vh;
	height: auto;
	position: relative;
	padding-bottom: 5rem;
`;

const Center = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 10rem;
`;

const Grid = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
	grid-gap: calc(1rem + 2vw);
`;
