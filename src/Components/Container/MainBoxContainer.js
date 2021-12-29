import styled from "styled-components"
import MainTopNavContainer from "./MainTopNavContainer"
import MainLeftNavContainer from "./MainLeftNavContainer"
import MainChannelNavContainer from "./MainChannelNavContainer"

const UnderDiv = styled.div`
    display:flex;

    width: 100%;
    height: 100%;
`

const MainBoxContainer = () => {
    return (
        <>
            <MainTopNavContainer />
            <UnderDiv>
                <MainLeftNavContainer />
                <MainChannelNavContainer />
            </UnderDiv>
        </>
    )
}

export default MainBoxContainer;