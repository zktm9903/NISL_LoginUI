import styled from "styled-components";
import LoginBoxContainer from "./Components/Container/LoginBoxContainer";

const BackDiv = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    height:100vh;
    background: linear-gradient(to right top,#3399FF,#1D41F0);
    
`

const Login = () => {
    return (
        <BackDiv>
            <LoginBoxContainer></LoginBoxContainer>
        </BackDiv>
    )
}

export default Login;