import produce from 'immer';

const ADD_ROOM = 'roomAndChannel/ADD_ROOM';
const SELECT_ROOM = 'roomAndChannel/SELECT_ROOM';
const ADD_CHANNEL = 'roomAndChannel/ADD_CHANNEL';
const SELECT_CHANNEL = 'roomAndChannel/SELECT_CHANNEL';

export const addRoom = roomName => ({
    type: ADD_ROOM,
    room: {
        id: nextRoomId++,
        name: roomName,
        channels: [],
    },
})

export const selectRoom = roomId => ({
    type: SELECT_ROOM,
    id: roomId,
})

export const addChannel = (id, channelName) => ({
    type: ADD_CHANNEL,
    channel: {
        id: id,
        name: channelName,
    }
})

export const selectChannel = channelId => ({
    type: SELECT_CHANNEL,
    id: channelId,
})

let nextRoomId = 1;

const initialState = {
    selectRoom: 0,
    selectChannel: 0,
    rooms: [
        // {
        //     id: 1,
        //     name: 'first room',
        //     channels: [
        //         {
        //             id: 1,
        //             name: '1-1 channel'
        //         },
        //         {
        //             id: 2,
        //             name: '1-2 channel'
        //         },
        //     ]
        // },
        // {
        //     id: 2,
        //     name: 'second room',
        //     channels: [
        //         {
        //             id: 1,
        //             name: '2-1 channel'
        //         },
        //         {
        //             id: 2,
        //             name: '2-2 channel'
        //         },
        //     ]
        // },
    ],
};

export default function roomAndChannel(state = initialState, action) {
    switch (action.type) {
        case ADD_ROOM:
            return { ...state, rooms: state.rooms.concat(action.room) };
        case SELECT_ROOM:
            return { ...state, selectRoom: action.id, selectChannel: 0 };
        case ADD_CHANNEL:
            return produce(state, draft => {
                draft.rooms[state.selectRoom - 1].channels.push(action.channel);
            })
        case SELECT_CHANNEL:
            return { ...state, selectChannel: action.id };
        default:
            return state;
    }
}