import styled from 'styled-components';

const Logo = ({click}) => {
    return (
        <LogoTitle click={click}>
            V2VBRO
        </LogoTitle>
    );
}

export default Logo;

const LogoTitle = styled.h1`
    display: inline-block;
    color: ${props => props.click ? props.theme.body : props.theme.text};
    font-family: 'Pacifico', cursive;

    position: fixed;
    left: 2rem;
    top: 2rem;
    z-index: 10;
`;