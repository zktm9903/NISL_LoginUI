import { RoomButton, RoomPlusButton } from "../Presenter/RoomButtonPresenter";
import PlusRoomContainer from "./PlusRoomContainer";
import { useState } from "react";

const RoomButtonsConatiner = ({ store, RoomPlus, show, handleClose, addRoomFunc }) => {
    const [roomName, setRoomName] = useState('');

    const InputRoomName = (e) => {
        setRoomName(e.target.value)
    }

    const InsertRoom = () => {
        console.log(roomName);
        addRoomFunc(roomName);
    }

    return (
        <>
            {
                store.rooms.map(room => (
                    <RoomButton variant="light" roomID={room.id}>{room.name[0]}</RoomButton>
                ))
            }
            <RoomPlusButton variant="light" onClick={RoomPlus}>+</RoomPlusButton>
            <PlusRoomContainer set={show} setShow={handleClose} InsertRoom={InsertRoom} InputRoomName={InputRoomName} />
        </>
    )
}

export default RoomButtonsConatiner;