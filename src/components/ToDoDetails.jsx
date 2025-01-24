import styled from "styled-components";
import { useState } from "react"
import { useDispatch } from "react-redux";
import ToDoItem from "./ToDoItem";
import { GoPlus } from "react-icons/go";
import { CiBellOn, CiCalendar, CiRepeat } from "react-icons/ci";
import { Icon } from "./SideBar";
import { RxCross2 } from "react-icons/rx";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { removeToDo } from "../store/todos/todosSlice";
import { formatDate } from "../helper/formatDate.js";
import DatePicker from "react-datepicker";
import WeatherCard from "./Weather.jsx";
import PropTypes from "prop-types";


ToDoDetails.propTypes = {
    todo: PropTypes.object,
    removeIdFromUrl: PropTypes.func.isRequired,
    id: PropTypes.string,
};

function ToDoDetails({ todo, removeIdFromUrl, id }) {

    const dispatch = useDispatch();
    const [isDateOpen, setIsDateOpen] = useState(false);

    if (!todo) return;

    const date = formatDate(todo.date);



    const handleRemoveToDo = () => {
        dispatch(removeToDo({ id: parseInt(id) }));
        removeIdFromUrl();
    };

    return (
        <Container>
            {
                todo.completed ?
                    <h2>Congrats 🎉</h2>
                    :
                    <h2>You Can🏆</h2>
            }
            <ToDoItem
                id={todo.id}
                name={todo.name}
                completed={todo.completed}
                important={todo.important}
                color={"transparent"}
            />
            <Item>
                <Icon>
                    <GoPlus />
                </Icon>
                <p>Add Step</p>
            </Item>
            <Item>
                <Icon>
                    <CiBellOn />
                </Icon>
                <p>Set Reminder</p>
            </Item>
            <Item >
                <Icon >
                    <CiCalendar />
                </Icon>
                <p onClick={() => setIsDateOpen(!isDateOpen)}>Add Due Date</p>
                {isDateOpen && <DatePicker
                    inline
                />}
            </Item>
            <Item>
                <Icon>
                    <CiRepeat />
                </Icon>
                <p>Repeat</p>
            </Item>

            <WeatherCard />

            <Info>
                <Icon onClick={removeIdFromUrl}>
                    <RxCross2 />
                </Icon>
                <p>Created &nbsp;
                    {(date === "Today" || date === "Yesterday") ? date : `on ${date}`} </p>
                <Icon onClick={handleRemoveToDo}>
                    <RiDeleteBin5Fill />
                </Icon>
            </Info>
        </Container>
    );
}

export default ToDoDetails;

const Container = styled.div`
    background-color: ${(props) => props.theme.container};
    width: 30%;
    padding: 3em 0;
    display: flex;
    flex-direction: column;

    h2{
        margin-left:auto;
        margin-right:auto;
        margin-bottom:25px;
    }

    @media (max-width: 700px) {
        position: absolute;
        z-index: 5;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60%;
        height: 500px;
        overflow-y: scroll;
    }
    @media (max-width: 390px) {
        width: 80%;
    }
`;

const Item = styled.div`
    display: flex;
    gap: 0.6em;
    padding: 1em 1em 0.5em 1em;
    border-top: 1px solid #acacac6a;
    border-right: 0px;
    border-bottom: 0px;
    border-left: 0px;
    position:relative;
    flex-wrap:wrap;
    p{
        cursor:pointer;
    }

    textarea {
        background-color: inherit;
        border: none;
        padding: 1em;
        &:focus {
            border: 1px solid #acacac9d;
            outline: none;
        }
    }
`;

const Info = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1em;
    border-top: 1px solid #acacac6a;
    margin-top: 100px;
`;
