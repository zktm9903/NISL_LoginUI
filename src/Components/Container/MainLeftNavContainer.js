import MainLeftNavPresenter from "../Presenter/MainLeftNavPresenter";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import PlusRoomContainer from "./PlusRoomContainer";
import { useState } from "react";

const RoomButton = styled(Button)`
    width: 40px;
    height: 40px;

    border:solid 0px white;
    background-color: #545865;
    margin-top:20px;
`

const RoomPlusButton = styled(Button)`
    width: 40px;
    height: 40px;

    border:solid 0px white;
    background-color: #545865;
    margin-top:20px;
`

const MainLeftNavContainer = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const RoomPlus = () => {
        console.log('click')
        setShow(true);
        console.log(show);
    }

    return (
        <MainLeftNavPresenter>
            <RoomButton variant="light">A</RoomButton>
            <RoomButton variant="light">B</RoomButton>
            <RoomButton variant="light">C</RoomButton>
            <RoomPlusButton variant="light" onClick={RoomPlus}>+</RoomPlusButton>
            <PlusRoomContainer set={show} setShow={handleClose} />
        </MainLeftNavPresenter>
    )
}

export default MainLeftNavContainer;