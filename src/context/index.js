import {createContext, useReducer} from 'react';

// IMPORTANT NOTES::
// create context
//initial state and rootreducer for as many contexts we need.

const Context = createContext();

let firstInitialState = {
    user: "default",
}

let firstRootReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {...state, user: action.payload};
            break;
        case "LOGOUT":
            return {...state, user: "logout"};
            break;
        default:
            return state;
            break;
    }
}


// another initial state and root reducer for the purpose of multiple context
let otherInitialState = {
    visibilty: "hide default",
}

let otherRootReducer = (state, action) => {
    switch (action.type) {
        case "SHOW":
            return {...state, visibilty: action.payload};
            break;
        case "HIDE":
            return {...state, visibilty: "hide it guys"};
            break;  
        default:
            return state;
            break;
    }
}

// context provider
const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(firstRootReducer, firstInitialState);
    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}

// context provider
const VisibleProvider = ({children}) => {
    const [state, dispatch] = useReducer(otherRootReducer, otherInitialState);
    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export {Context, AuthProvider, VisibleProvider};