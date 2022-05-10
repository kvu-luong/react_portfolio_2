import styled from 'styled-components';
import Particles from 'react-particles-js';
import configDark from '../config/particlesjs-config.json';
import configLight from '../config/particlesjs-config-light.json';

const ParticleComponent = ({theme}) => {
    return (
        <Box>
            <Particles 
            style={{position: 'absolute', top: 0}}
            params={theme === 'light' ? configLight : configDark} />
        </Box>
    )
}

export default ParticleComponent;

const Box = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
`;