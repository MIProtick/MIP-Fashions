import { UserActionType } from './User.actiontype';

const initiaState = {
    currentUser: null,
}

const userReducer = (state=initiaState, action) => {
    switch (action.type) {
        case UserActionType.SET_CURRENT_USER:
            return{
                ...state,
                currentUser: action.payload
            };
    
        default:
            return state;
    }
}

export default userReducer;