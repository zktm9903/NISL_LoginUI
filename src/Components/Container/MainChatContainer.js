import styled from "styled-components";
import MainChatChannelNameContainer from "./MainChatChannelNameContainer";
import { useSelector } from "react-redux";
import MainChatLogContainer from "./MainChatLogContainer";
const BackDiv = styled.div`
    width: 100%;
    height: 100%;
`

const MainChatContainer = () => {

    const store = useSelector(state => state);

    return (
        <BackDiv>
            <MainChatChannelNameContainer room={store.selectRoom} channel={store.selectChannel} />
            <MainChatLogContainer></MainChatLogContainer>
        </BackDiv>
    )
}

export default MainChatContainer;