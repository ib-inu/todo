import { useState } from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { setName } from '../store/user/userSlice';





export default function Authentication() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = () => {
        if (!username.length || !password.length) return;
        if (password === "password") {
            dispatch(setName(username))
            navigate("/")
        } else {
            alert("Invalid Password")
        }

    };





    if (isAuthenticated) {
        return <Navigate to="/" />;
    }

    return (
        <Container>
            <h1>Welcome </h1>
            <AuthContainer>
                <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <Button onClick={handleLogin}>Login</Button>
            </AuthContainer>
        </Container>
    );
}



const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 3em;
gap: 2em;
width: 100%;
animation: comingUp 1s .2s ease;
transition: all 2s;

@media (max-width:400px) {
    padding: 3em 1em;
}

@keyframes comingUp {
    0%{
        transform: translateY(30px);
        opacity: 0;
    }
    100%{
        transform: translateY(0);
        opacity: 1;
    }
}
`;


const AuthContainer = styled.div`
background-color: #ffffff;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
width: 80%;
display: flex;
justify-content: center;
flex-direction: column;
border-radius: 18px;
max-width: 40rem;
min-height: 25rem;

@media (max-width:550px) {
    width: 100%;
}

@media (max-width:320px) {
    justify-content:center;
    min-height: 20rem;
}
`;

const Input = styled.input`
padding: 1em;
margin: 1em;
border-radius: 4px;
border: 1px solid #ccc;
`;

const Button = styled.button`
padding: 1em;
margin: 1em;
background-color: #000000;
color: white;
border: none;
border-radius: 4px;
cursor: pointer;
`;