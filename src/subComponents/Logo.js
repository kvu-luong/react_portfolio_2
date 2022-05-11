import styled from 'styled-components';
import { motion } from 'framer-motion';

const Logo = ({click}) => {
    return (
        <LogoTitle click={click}
        initial={{transform: 'translateY(-100px)'}}
        animate={{transform: 'translateY(0)'}}
        transition={{type: 'spring', duration: 1, delay: 1}}
        >
            V2VBRO
        </LogoTitle>
    );
}

export default Logo;

const LogoTitle = styled(motion.h1)`
    display: inline-block;
    color: ${props => props.click ? props.theme.body : props.theme.text};
    font-family: 'Pacifico', cursive;

    position: fixed;
    left: 2rem;
    top: 2rem;
    z-index: 10;
`;