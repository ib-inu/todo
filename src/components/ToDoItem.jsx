import { useDispatch } from "react-redux";
import { toggleComplete, toggleImportant } from "../store/todos/todosSlice";
import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import { Icon } from "./SideBar";
import { useNavigate } from "react-router-dom";



function ToDoItem({ id, color, name, completed, important }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleToggleComplete = () => {
        dispatch(toggleComplete({ id }));
    };

    const handleToggleImportant = () => {
        dispatch(toggleImportant({ id }))
    }
    const handleShowIdInUrl = () => {
        navigate(`${location.pathname}?id=${id}`);
    };

    return (
        <Container $color={color} onClick={handleShowIdInUrl}>
            <div>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={handleToggleComplete}
                />
                <span style={{ textDecoration: completed ? "line-through" : "none" }}
                    onClick={
                        handleToggleComplete
                    }
                >
                    {name}
                </span>
            </div>
            <Icon onClick={handleToggleImportant}>
                {important ? <FaStar color="yellow" /> : <CiStar />}
            </Icon>
        </Container>
    );
}

export default ToDoItem;



ToDoItem.propTypes = {
    id: PropTypes.number.isRequired,
    color: PropTypes.string,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    important: PropTypes.bool.isRequired,
}




const Container = styled.div`   
    display: flex;
    justify-content: space-between;
    padding: 1em 1.3em .5em 1.3em;
    border-top: 1px solid #acacac6a;
    border-right: 0px;
    border-bottom: 0px;
    border-left: 0px;
    background-color: ${(props) => props.$color || props.theme.todos};

    div {
        display: flex;
        gap: .6em;
        border: 0px;

        input {
            background-color: green;
            transform: translateY(-5px);
        }
    }
`;