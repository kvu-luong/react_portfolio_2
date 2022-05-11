import { useRef, useState } from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

import audio from '../assets/audio/u-said-it-v13-1167.mp3';

const Sound = () => {
    const audioRef = useRef(null);
    const [click, setClick] = useState(false);
    const handleClick = ( )=> {
        setClick(!click);
        if(!click){
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }
    return (
        <Box  onClick={() => handleClick()}>
            {
            [...Array(5)].map( (number, index) => {
                return <Line click={click} key={index} num={number}/>
            }) 
            }
            <audio src={audio} loop ref={audioRef} >Show</audio>
        </Box>
    );
}

export default Sound;

const Box = styled.div`
    display: flex;
    cursor: pointer;
    position: fixed;
    left: 2rem;
    top: 6rem;
    z-index: 10;

    &>*:nth-child(1){
        animation-delay: 0.2s;
    }
    &>*:nth-child(2){
        animation-delay: 0.3s;
    }
    &>*:nth-child(3){
        animation-delay: 0.4s;
    }
    &>*:nth-child(4){
        animation-delay: 0.5s;
    }
    &>*:nth-child(5){
        animation-delay: 0.8s;
    }
`;

const play = keyframes`
    0%{
        transform: scaleY(1);
    }
    50%{
        transform: scaleY(2);
    }
    100%{
        transform: scaleY(3);
    }
`;

const Line = styled.span`
    background: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.body};
    animation: ${play} 1s ease infinite;
    animation-play-state: ${props => props.click ? 'running' : 'paused'};
    height: 1rem;
    width: 2px;
    margin: 0 0.1rem;
`;