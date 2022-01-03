import MainRoomNamePresenter from "../Presenter/MainRoomNamePresenter";
import { useSelector } from "react-redux";

const MainRoomNameContainer = ({ selectRoom }) => {
    const store = useSelector(state => state);

    return (
        <MainRoomNamePresenter>{selectRoom !== 0 && store.rooms[selectRoom - 1].name}</MainRoomNamePresenter>
    )
}

export default MainRoomNameContainer;