import styled from 'styled-components';

const Logo = () => {
    return (
        <LogoTitle>
            V2VBRO
        </LogoTitle>
    );
}

export default Logo;

const LogoTitle = styled.h1`
    display: inline-block;
    color: ${props => props.theme.text};
    font-family: 'Pacifico', cursive;

    position: fixed;
    left: 2rem;
    top: 2rem;
    z-index: 3;
`;