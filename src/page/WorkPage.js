import { ThemeProvider } from "styled-components";
import { darkTheme } from "../components/Themes";
import Logo from "../subComponents/Logo";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import styled from 'styled-components';

import { Work } from '../data/WorkData';
import Card from "../components/Card";
import { useRef, useEffect} from "react";
import { YinYang } from "../components/AllSvgs";
import BigTitle from "../subComponents/BigTitle";

const WorkPage = () => {
    const ref = useRef(null);
    const yingRef = useRef(null);

    let element = ref.current;
    let yingElement = yingRef.current;

    const rotate = () => {
        element.style.transform = `translateX(${-window.pageYOffset}px)`;
        yingElement.style.transform = `rotate(${-window.pageYOffset}deg)`;
    }

    useEffect(() => {
        window.addEventListener('scroll', rotate);
        return () => window.removeEventListener('scroll', rotate);
    }, [])
    return (
        <ThemeProvider theme={darkTheme}>
            <Box>
                <Logo click={false} />
                <SocialIcons click={true}/>
                <PowerButton />

                <Main ref={ref}>
                    {
                        Work && Work.map((item, index) => {
                            return <Card key={index} card={item} />
                        })
                    }
                </Main>
                <Rotate ref={yingRef}>
                    <YinYang width={80} height={80} fill={darkTheme.text} />
                </Rotate>
                <BigTitle text="WORK" top="10%" right="10%" />
            </Box>
        </ThemeProvider>
    )
}

export default WorkPage;

const Box = styled.div`
    background-color: ${props => props.theme.body};
    position: relative;
    height: 400vh;
`;

const Main = styled.ul`
    position: fixed;
    top: 12rem;
    left: calc(10rem + 15vw);
    height: 40vh;
    display: flex;
    align-items: center;
    color: white;
`;

const Rotate = styled.span`
    display: block;
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    width: 80px;
    height: 80px;
    z-index: 1;
`;