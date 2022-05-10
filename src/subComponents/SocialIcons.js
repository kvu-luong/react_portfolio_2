import { NavLink } from "react-router-dom";
import { Facebook, Github, Twitter, YouTube } from "../components/AllSvgs";
import styled from 'styled-components';
import { darkTheme } from "../components/Themes";

const SocialIcons = ({click}) => {
    return (
        <Icons>
           <div>
               <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname: "https://google.com"}}>
                   <Github with={25} height={25} fill={click ? darkTheme.text : darkTheme.body} />
               </NavLink>
           </div>
           <div>
               <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname: "https://google.com"}}>
                   <Twitter with={25} height={25} fill={click ? darkTheme.text : darkTheme.body} />
               </NavLink>
           </div>
           <div>
               <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname: "https://google.com"}}>
                   <Facebook with={25} height={25} fill={click ? darkTheme.text : darkTheme.body} />
               </NavLink>
           </div>
           <div>
               <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname: "https://google.com"}}>
                   <YouTube with={25} height={25} fill={click ? darkTheme.text : darkTheme.body} />
               </NavLink>
           </div>

           <Line click={click}/>
        </Icons>
    );
}

export default SocialIcons;

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 2rem;

    z-index: 3;

    &>*:not(:last-child){
        margin: 0.5rem 0;
    }
`;

const Line = styled.span`
    width: 2px;
    height: 8rem;
    background-color: ${props => props.click ? darkTheme.text :darkTheme.body}
`;