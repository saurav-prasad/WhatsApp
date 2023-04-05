export const initialState1 = {
    chatImg: null,
    chatName: 'User',
    chatDisplay:{},
}

const reducer1 = (state, action) => {
    switch (action.type) {
        case 'SET_CHAT':
            return {
                chatName: action.chatName, chatImg: action.chatImg,
            }
        default:
            return state
    }
}
export default reducer1
