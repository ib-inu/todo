import styled from "styled-components"
import SideBar from "../components/SideBar"
import Content from "../components/Content"
import ToDoDetails from "../components/ToDoDetails"
import { useState } from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"


AppLayout.propTypes = {
    setIsMenuOpen: PropTypes.func.isRequired,
    isMenuOpen: PropTypes.bool.isRequired,
};

function AppLayout({ setIsMenuOpen, isMenuOpen }) {

    const [category, setCategory] = useState("All Tasks");
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    const navigate = useNavigate();


    const todo = useSelector((state) =>
        state.todos.todos.find((todo) => todo.id === parseInt(id))
    );
    const removeIdFromUrl = () => {
        searchParams.delete('id');
        navigate({
            pathname: location.pathname,
            search: searchParams.toString()
        });
    };

    return (
        <Container>
            {
                (isMenuOpen) &&
                <Overlay $type="mid" onClick={() => setIsMenuOpen(false)}  ></Overlay>
            }
            {
                (todo) &&
                <Overlay $type="sm" onClick={() => removeIdFromUrl()}  ></Overlay>
            }
            <SideBar isMenuOpen={isMenuOpen} setCategory={setCategory} />
            <Content category={category} />
            <ToDoDetails todo={todo} removeIdFromUrl={removeIdFromUrl} id={id} />
        </Container>
    )
}

export default AppLayout



const Container = styled.div` 
display: flex;
align-items: stretch;
gap: 1em;
padding: 2em;

`
const Overlay = styled.div` 
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
background-color: #80808057;
z-index: 2;
display: none;


@media (max-width:930px) {
display: ${props => props.$type === "mid" ? "block" : "none"};
}

@media (max-width:700px) {
    display: ${props => props.$type === "sm" && "block"};

}


`
