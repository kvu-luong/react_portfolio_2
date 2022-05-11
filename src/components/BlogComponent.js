import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Item = {
    hidden:{
        scale: 0
    },
    show: {
        scale: 1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}
const BlogComponent = ({blog}) => {
    const {name, tags, date, imgSrc, link} = blog;
    return (
        <Box 
        variants={Item}
        target="_blank" to={{pathname: link}}>
            <Image img={imgSrc} alt="blog"/>
            <Title>{name}</Title>
            <HashTags>
                {tags && tags.map((tag, id) => {
                    return <Tag key={id}>#{tag}</Tag>
                })}
            </HashTags>
            <Date>{date}</Date>
        </Box>
    )
}

export default BlogComponent;
// need to use responsive image with padding bottom here
// trip text
// infinite scroll
// loading: page transition
// surpen lazy loading

const Box = styled(motion(NavLink))`
    width: calc(10rem + 15vw);
    text-decoration: none;
    height: 20rem;
    padding: 1rem;
    color: ${props => props.theme.text};
    border: 2px solid ${props => props.theme.text};
    backdrop-filter: blur(2px);
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;

    display: flex;
    flex-direction: column;
    z-index: 5;

    &:hover{
        color: ${props => props.theme.body};
        background-color: ${props => props.theme.text};
        transition: all 0.3s ease;
    }
`;

const Image = styled.div`
    background-image: ${props => `url(${props.img})`};
    width: 100%;
    height: 60%;
    background-size; cover;
    border: 1px solid transparent;
    background-position: center center;

    ${Box}:hover &{
        border: 1px solid ${props => props.theme.body};
    }

`;

const Title = styled.h3`
    color: inherit;
    padding: 0.5rem 0;
    padding-top: 1rem;
    font-family: 'Karla', san-serif;
    font-weight: 700;
    border-bottom: 1px solid ${props => props.theme.text};

    ${Box}:hover &{
        border-bottom: 1px solid ${props => props.theme.body};
    }
`;

const HashTags = styled.div`
    padding: 0.5rem 0;
`;

const Tag = styled.span`
padding-right: 0.5rem;
`;

const Date = styled.span`
    padding: 0.5rem 0;
`;