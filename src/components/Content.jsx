import styled from "styled-components"
import ToDoList from "./ToDoList"
import { FaSortDown } from "react-icons/fa"

import AddToDo from "./AddToDo";


function Content() {


    return (
        <Container>
            <p>To Do <FaSortDown /></p>
            <Main>
                <AddToDo />
                <ToDoList />
            </Main>

        </Container>
    )
}

export default Content


const Container = styled.div`
    width: 100%;
    overflow: hidden;
    p{
        color: #838383;
    }
`

const Main = styled.div`    
background-color: ${(props) => props.theme.body};
border-top: 1px solid #acacac6a;
border-right: 0px;
border-bottom: 0px;
border-left: 0px;
width: 100%;
height: 100%;

`


