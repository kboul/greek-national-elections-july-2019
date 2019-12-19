import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Context } from './context';

const Provider = ({ children }) => {
    const [hoveredFeature, setHoveredFeature] = useState(null);
    const [x, setX] = useState(null);
    const [y, setY] = useState(null);
    const [prefectureId, setPrefectureId] = useState(null);

    const hoveredFeatureProvider = useMemo(
        () => ({ hoveredFeature, setHoveredFeature }),
        [hoveredFeature, setHoveredFeature]
    );
    const xProvider = useMemo(() => ({ x, setX }), [x, setX]);
    const yProvider = useMemo(() => ({ y, setY }), [y, setY]);
    const prefectureIdProvider = useMemo(
        () => ({ prefectureId, setPrefectureId }),
        [prefectureId, setPrefectureId]
    );

    return (
        <Context.Provider
            value={{
                ...hoveredFeatureProvider,
                ...xProvider,
                ...yProvider,
                ...prefectureIdProvider
            }}>
            {children}
        </Context.Provider>
    );
};

Provider.propTypes = {
    children: PropTypes.element.isRequired
};

export default Provider;
