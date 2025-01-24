import styled from "styled-components";
import ToDoItem from "./ToDoItem";
import { useSelector } from "react-redux";

function ToDo() {
    const filter = useSelector((state) => state.user.filter);
    const todos = useSelector((state) => state.todos.todos);
    const filteredTodos = todos.filter((todo) => {
        if (filter === 'All Tasks') {
            return true;
        } else if (filter === 'Today') {
            const today = new Date().toDateString();
            const todoDate = new Date(todo.date).toDateString();
            return today === todoDate;
        } else if (filter === 'Important') {
            return todo.important;
        }
        return false;
    });

    return (
        <Container>
            {
                filteredTodos.map((todo, i) => {
                    return todo.completed === false ? (
                        <ToDoItem
                            id={todo.id}
                            key={i}
                            important={todo.important}
                            completed={todo.completed}
                            name={todo.name}
                        />
                    ) : null;
                })
            }
            <Completed>
                <h3>Completed</h3>
                {
                    filteredTodos.map((todo, i) => {
                        return todo.completed === true ? (
                            <ToDoItem
                                id={todo.id}
                                key={i}
                                important={todo.important}
                                completed={todo.completed}
                                name={todo.name}
                            />
                        ) : null;
                    })
                }
            </Completed>
        </Container>
    );
}

export default ToDo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Completed = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    padding: 1em;
  }
`;
