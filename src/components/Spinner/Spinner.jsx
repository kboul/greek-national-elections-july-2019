import styled from 'styled-components';
import PropTypes from 'prop-types';

import loader from './spinner.gif';

export default function Spinner({ fullHeight = false }) {
    return (
        <Container fullHeight={fullHeight}>
            <Img src={loader} alt="loader" />
        </Container>
    );
}

Spinner.propTypes = {
    fullHeight: PropTypes.bool
};

const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    height: ${({ fullHeight }) => (fullHeight ? '100vh' : 'auto')};
`;

const Img = styled.img`
    width: 40px;
    height: 40px;
`;
