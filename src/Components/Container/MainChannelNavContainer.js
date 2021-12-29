import MainChannelNavPresenter from "../Presenter/MainChannelNavPresenter";
import MainRoomNameContainer from "./MainRoomNameContainer";

const MainChannelNavContainer = () => {
    return (
        <MainChannelNavPresenter>
            <MainRoomNameContainer></MainRoomNameContainer>
        </MainChannelNavPresenter>
    )
}

export default MainChannelNavContainer;