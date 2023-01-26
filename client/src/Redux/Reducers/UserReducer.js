import { IMPONEUSER, IMPUSERS } from "../ActionTypes/UsersTypes"

const initialState = {
    Usrs: [],
    Usr: []
}

const UserReducer = (State = initialState, action) => {
    switch (action.type) {
        case IMPUSERS: return { ...State, Usrs: action.payload }
        case IMPONEUSER: return { ...State, Usr: action.payload }

        default: return State
    }
}

export default UserReducer