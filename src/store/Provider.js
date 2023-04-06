import { context as Context } from "./store";

export const Provider = ({ store, children }) => {
    return <Context.Provider value={{ store }}> { children } </Context.Provider>
}