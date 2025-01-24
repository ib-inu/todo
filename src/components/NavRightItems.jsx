import styled from "styled-components"
import { CiSearch } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";
import { GoSun } from "react-icons/go";
import { BsMoonStars } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter, toggleTheme } from "../store/user/userSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function NavRightItems() {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.user.theme);
    const todos = useSelector((state) => state.todos.todos);
    const [searchTerm, setSearchTerm] = useState("");
    const [isSearchBarOn, setIsSearchBarOn] = useState(false);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };
    const handleTodoClick = (todoId) => {
        setSearchTerm("");
        navigate(`${location.pathname}?id=${todoId}`);
    };
    const handleToggleSearchBar = () => {
        setSearchTerm("");
        setIsSearchBarOn(!isSearchBarOn)
    }

    const filteredTodos = todos.filter(todo =>
        todo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container>
            {
                isSearchBarOn &&
                <div>

                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Search todos..."
                    />
                    {searchTerm && (
                        <Datas>
                            {filteredTodos.map(todo => (
                                <div key={todo.id} onClick={() => handleTodoClick(todo.id)}>
                                    {todo.name}
                                </div>
                            ))}
                        </Datas>
                    )}
                </div>
            }
            <Item onClick={handleToggleSearchBar}><CiSearch /></Item>
            <Item
                onClick={() => dispatch(toggleFilter())}
            >
                <CiGrid41 />
            </Item>
            <Item onClick={() => dispatch(toggleTheme())}>
                {theme === "light" ? <BsMoonStars /> : <GoSun />}
            </Item>
        </Container>
    )
}

export default NavRightItems



const Container = styled.div`
display: flex;
gap: 14px;
align-items: center;
font-size: 1.3em;
font-weight: 600;
font-family: "Sen", serif;
margin-left: auto;

input{
    padding: .2em;
}


`

const Datas = styled.div`
width: 100%;
font-size: 12px;

div{
    background-color: ${(props) => props.theme.main};
    padding: .3em;
    border-top: 1px solid ${(props) => props.theme.body};
    cursor: pointer;
    transition: all .4s ease;

    &:hover{
    background-color: ${(props) => props.theme.todos};

    }
}
`

const Item = styled.div` 
cursor: pointer;
color: ${(props) => props.theme.text};
`