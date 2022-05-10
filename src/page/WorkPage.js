import { ThemeProvider } from "styled-components";
import { darkTheme } from "../components/Themes";
import Logo from "../subComponents/Logo";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import styled from 'styled-components';

import { Work } from '../data/WorkData';
import Card from "../components/Card";

const WorkPage = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Box>
                <Logo click={false} />
                <SocialIcons click={true}/>
                <PowerButton />

                <Main>
                    {
                        Work && Work.map((item, index) => {
                            return <Card key={index} card={item} />
                        })
                    }
                </Main>
            </Box>
        </ThemeProvider>
    )
}

export default WorkPage;

const Box = styled.div`
    background-color: ${props => props.theme.body};
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
`;

const Main = styled.ul`
    position: fixed;
    top: 12rem;
    left: calc(10rem + 15vw);
    height: 40vh;
    display: flex;
    color: white;
`;