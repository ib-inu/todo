import styled from "styled-components"
import Logo from "../components/Logo"
import NavRightItems from "../components/NavRightItems"
import { IoIosMenu } from "react-icons/io";
import PropTypes from "prop-types";


Nav.propTypes = {
    setIsMenuOpen: PropTypes.func.isRequired,
};

function Nav({ setIsMenuOpen }) {


    return (
        <NavContainer>
            <Menu onClick={() => setIsMenuOpen(true)}><IoIosMenu /></Menu>
            <Logo />
            <NavRightItems />
        </NavContainer>
    )
}

export default Nav


const NavContainer = styled.nav`  
display: flex;
padding: .5em 1em;
gap: 16px;
`
const Menu = styled.div`
font-size:2em;
transform: translateY(3px);
display: none;
cursor: pointer;
@media (max-width:930px) {
    display: block;
}
`