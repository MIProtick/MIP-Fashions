import { UserActionType } from './User.actiontype';

export const setCurrentUser = user => ({
    type: UserActionType.SET_CURRENT_USER,
    payload:user,
});