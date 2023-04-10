import { createContext, useContext, useReducer } from "react";

const LoginContext = createContext()

export const LoginState = ({ reducer, initialState, children }) => {

    return (
        <LoginContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLoginState = () => useContext(LoginContext);