import MainChannelNavPresenter from "../Presenter/MainChannelNavPresenter";
import MainRoomNameContainer from "./MainRoomNameContainer";
import MainChannelsContainer from "./MainChannelsContainer";
import { useSelector, useDispatch } from "react-redux";

const MainChannelNavContainer = () => {

    const store = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <MainChannelNavPresenter>
            <MainRoomNameContainer selectRoom={store.selectRoom}></MainRoomNameContainer>
            <MainChannelsContainer rooms={store.rooms[store.selectRoom - 1]}></MainChannelsContainer>
        </MainChannelNavPresenter>
    )
}

export default MainChannelNavContainer;