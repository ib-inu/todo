import { useState } from "react";
import { CiBellOff, CiBellOn, CiCalendar, CiRepeat } from "react-icons/ci"
import { TbRepeatOff } from "react-icons/tb";
import { useDispatch } from "react-redux";
import styled from "styled-components"
import { addToDo } from "../store/todos/todosSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddToDo() {
    const dispatch = useDispatch();
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [isReminderOn, setIsReminderOn] = useState(false);
    const [isRepeat, setIsRepeat] = useState(false);
    const [date, setDate] = useState(new Date());
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.length) return;
        dispatch(addToDo({
            name,
            date,
            id: Date.now()
        }));
        setName("");
        setDate(new Date());
        setIsCalendarOpen(false);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <textarea
                placeholder="Add Text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            ></textarea>
            {isCalendarOpen && (
                <DatePicker
                    selected={date}
                    onChange={(date) => setDate(date)}
                    inline
                />
            )}
            <Item>
                <div>
                    <span onClick={() => setIsReminderOn(!isReminderOn)}>
                        {
                            isReminderOn ? <CiBellOn fill="#8B8000" /> : <CiBellOff />
                        }
                    </span>
                    <span onClick={() => setIsRepeat(!isRepeat)}>
                        {
                            isRepeat ? <CiRepeat /> : <TbRepeatOff />
                        }
                    </span>
                    <span>
                        <CiCalendar onClick={() => setIsCalendarOpen(!isCalendarOpen)} />
                    </span>
                </div>
                <div>
                    <button type="submit">Add Task</button>
                </div>
            </Item>
        </Form>
    );
}

export default AddToDo;

const Form = styled.form` 
    padding: 2em;
background-color: ${(props) => props.theme.main};
    textarea{
        padding: 1em;
        background-color: transparent;
        border: none;
        width: 100%;
        font-size: 1.5em;
        color: ${(props) => props.theme.text};
        font-weight: 400;
        margin-bottom: 1em;
        &:focus{
            outline: none;
        }
        &::placeholder{
        color: ${(props) => props.theme.text};
        }
    }
`;

const Item = styled.div`   
    display: flex;
    justify-content: space-between;
    margin-top: 42px;

    div{
        display: flex;
        gap: 1em;
        font-size: 28px;
        span{
            cursor: pointer;
            transition: all .3s;
            &:hover{
        color: green;

            }
        }


        button{
            background-color: ${(props) => props.theme.btnBg};
            color: ${(props) => props.theme.btnColor};
            padding: .5em 1em;
            border: none;
            border-radius: 5px;
            cursor: pointer;        
        }
    }
`;
