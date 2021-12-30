const ADD_ROOM = 'store/ADD_ROOM';

export const addRoom = roomName => ({
    type: ADD_ROOM,
    room: {
        id: nextRoomId++,
        name: roomName,
        channels: [],
    },
})

let nextRoomId = 3;
const initialState = {
    rooms: [
        {
            id: 1,
            name: 'first room',
            channels: [
                {
                    id: 1,
                    name: 'first channel'
                },
                {
                    id: 2,
                    name: 'second channel'
                },
            ]
        },
        {
            id: 2,
            name: 'second room',
            channels: [
                {
                    id: 1,
                    name: 'first channel'
                },
                {
                    id: 2,
                    name: 'second channel'
                },
            ]
        },
    ],

};

export default function roomAndChannel(state = initialState, action) {
    switch (action.type) {
        case ADD_ROOM:
            return { ...state, rooms: state.rooms.concat(action.room) };
        default:
            return state;
    }
}