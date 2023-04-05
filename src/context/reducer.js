export const initialState = {
    cardDisplay: {
        display: 'none'
    },
    dpImg: null,
    dpName: null,
    appContainer: { filter: 'brightness(100%)' },
    chatImg: null,
    chatName: null,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_CARD':
            return {
                ...initialState,
                chatImg: action.chatImg, chatName: action.chatName,
                cardDisplay: { display: 'block' }
                , dpImg: action.dpImg, dpName: action.dpName, appContainer: { filter: 'brightness(20%)', transition: 'filter 0.35 s ease' },

            }
        case 'SET_CHAT':
            return {
                chatName: action.chatName, chatImg: action.chatImg,
            }
        case 'UNSET_CARD':
            return {
                cardDisplay: { display: 'none' }, appContainer: { filter: 'brightness(100%)', transition: 'filter 0.3s ease' }
            }
        default:
            return state
    }
}
export default reducer