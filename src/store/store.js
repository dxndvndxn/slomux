import React, { useState, useContext, useRef, useEffect } from "react";

export const context = React.createContext(null);

export const createStore = (reducer, initialState) => {
    let currentState = initialState;
    let listeners = [];

    const getState = () => currentState;
    const dispatch = action => {
        currentState = reducer(currentState, action);
        listeners.forEach(listener => listener());
    }

    const subscribe = listener => {
        listeners.push(listener);

        return () => {
            const index = listeners.indexOf(listener);
            console.log('index', index)
            if (index > 0) {
                console.log('unsubscribe success')
                listeners.splice(index, 1);
            }

            console.log('listeners', listeners);
        }
    }

    return { getState, dispatch, subscribe };
}

export const useSelector = (
    selector,
    customDiff = (a, b) => a === b
) => {
    const { store = null } = useContext(context);
    const [, forceUpdate] = useState();
    const prevValue = useRef(selector(store.getState()));

    if (!store || !selector) {
        return;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            const current = selector(store.getState());

            const someDiff = !customDiff(prevValue.current, current);

            if (someDiff) {
                forceUpdate(current);
                prevValue.current = current;
            }
        });

        return () => {
            unsubscribe();
        }
    }, [store])

    return selector(store.getState());
}

export const useDispatch = () => {
    const ctx = useContext(context);

    if (!ctx) {
        return () => {};
    }

    return ctx.store.dispatch;
}