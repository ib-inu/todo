import styled from "styled-components"
import { LuClipboardList } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiMap } from "react-icons/ci";
import { FaUserClock } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { IoIosInformationCircle } from "react-icons/io";
import TaskChart from "./Chart";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../store/user/userSlice";
import PropTypes from "prop-types";

const items = [{
    name: "All Tasks",
    icon: LuClipboardList
}, {
    name: "Today",
    icon: CiCalendar
}, {
    name: "Important",
    icon: CiStar
}, {
    name: "Planned",
    icon: CiMap
}, {
    name: "Assigned to me",
    icon: FaUserClock
}];

SideBar.propTypes = {
    isMenuOpen: PropTypes.bool.isRequired,
};


function SideBar({ isMenuOpen }) {
    console.log(isMenuOpen);

    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);
    const total = todos.length;
    const user = useSelector((state) => state.user);

    return (
        <Container $open={isMenuOpen}>
            <TopDiv>
                <Image><img src="profile.png" alt="" /></Image>
            </TopDiv>
            <ItemsContainer>
                <h2>Hey, {user.name}</h2>
                <Items>
                    {items.map((item, index) => (
                        <Item
                            $isActive={item.name === user.filter}
                            key={index} onClick={() => dispatch(setFilter(item.name))}>
                            <Icon>
                                <item.icon />
                            </Icon>
                            <span>{item.name}</span>
                        </Item>
                    ))}
                </Items>
                <Items>
                    <Item>
                        <Icon>
                            <GoPlus />
                        </Icon>
                        <span>Add list</span>
                    </Item>
                </Items>
                <Items>
                    <Item>
                        <div>
                            <h4>Today&apos;s Task</h4>
                            <Icon>
                                <IoIosInformationCircle />
                            </Icon>
                        </div>
                    </Item>
                    <h3>{total}</h3>
                    <hr />
                    <div>
                        <TaskChart />
                    </div>
                </Items>
            </ItemsContainer>
        </Container >
    );
}

export default SideBar;

const Container = styled.div`
display: flex;
flex-direction: column;
width: 420px;
z-index: 100;
@media (max-width:930px) {
  position: absolute;
  border: 1px solid gray;
  background-color: ${(props) => props.theme.body};
  top: 0;
  left: 0;
  display: flex;
  width: 80%;
  transform: ${(props) => props.$open ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.4s ease-in-out;
  box-shadow: ${(props) => props.$open ? "0 2px 10px rgba(0, 0, 0, 0.3)" : "none"};
}

`;

const TopDiv = styled.div`
position: relative;
height: 100px;
@media (max-width:930px) {
    background-color: ${(props) => props.theme.container};
}
`;

const Image = styled.div`
overflow: hidden;
height: 100px;
width: 100px;
position: absolute;
top: 100%;
left: 50%;
transform: translate(-50%, -50%);
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`;

const ItemsContainer = styled.div`
background-color: ${(props) => props.theme.container};
height: 100%;
display: flex;
flex-direction: column;
gap: 1em;
padding: 5em 1em;
h2 {
    font-size: 18px;
    text-align: center;
    font-weight: 400;
}
`;

const Items = styled.div`
background-color:  ${(props) => props.theme.body};
border: 8px;
padding: 1em 0;
display: flex;
flex-direction: column;
gap: 1em;
h3 {
    padding: 1em;
}
`;

const Item = styled.div`
display: flex;
gap: 8px;
padding: 1em 1em 0.2em 1em;
background-color: ${(props) =>
        props.$isActive ? props.theme.isActive : "inherit"};
cursor: pointer;
div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    span {
        color: #acacac;
    }
}
`;

export const Icon = styled.span`
transform: translateY(-3px);
font-size: clamp(18px, 3vw, 24px);
cursor: pointer;
`;