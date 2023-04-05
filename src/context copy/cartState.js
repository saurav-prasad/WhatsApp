import { createContext, useContext, useReducer } from "react";

const cartContext = createContext()
export const CartState1 = ({ reducer, initialState, children }) => {
    return (
        <cartContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </cartContext.Provider>
    )
}

export const useCartState1 = () => useContext(cartContext);