import { NavLink } from "react-router-dom";
import styled from "styled-components"

const StyledHeader = styled.nav`
    padding: 10px 20px;
    position: relative;

    &:after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: #000;
    }
`;

const NavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
    list-style: none;
`;

const NavItem = styled(NavLink)`
    color: #000;
`;

export default function Header(){
    return(
        <StyledHeader>
            <NavList>
                <NavItem to={'/'}><h1>Home</h1></NavItem>
                <NavItem to={'/movies'}><h1>Movies</h1></NavItem>
            </NavList>
        </StyledHeader>
    )
}