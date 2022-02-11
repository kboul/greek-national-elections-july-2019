import { createContext, useContext, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';

const initialState = {
    hoveredFeature: null,
    x: null,
    y: null,
    prefectureId: null
};

const changeState = (type, payload) => ({
    type,
    payload
});

const types = {
    hoveredFeatureChanged: 'hoveredFeatureChanged',
    xChanged: 'xChanged',
    yChanged: 'yChanged',
    prefectureIdChanged: 'prefectureIdChanged'
};

const reducer = (state, action) => {
    switch (action.type) {
        case types.hoveredFeatureChanged:
            return { ...state, hoveredFeature: action.payload.hoveredFeature };
        case types.xChanged:
            return { ...state, x: action.payload.x };
        case types.yChanged:
            return { ...state, y: action.payload.y };
        case types.prefectureIdChanged:
            return { ...state, prefectureId: action.payload.prefectureId };
        default:
            return state;
    }
};

function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

    return <Context.Provider value={value}>{children}</Context.Provider>;
}

Provider.propTypes = {
    children: PropTypes.element.isRequired
};

const Context = createContext();

function useAppContext() {
    return useContext(Context);
}

export { changeState, types, Provider, useAppContext };
