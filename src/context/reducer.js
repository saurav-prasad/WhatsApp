export const initialState = {
    cardDisplay: {
        display: 'none'
    },
    dpImg: null,
    dpName: null,
    appContainer: { filter: 'brightness(100%)' }
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_CARD':
            console.log("object");
            return {
                cardDisplay: { display: 'block' }
                , dpImg: action.dpImg, dpName: action.dpName, appContainer: { filter: 'brightness(20%)', transition: 'filter 0.35s ease' }
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