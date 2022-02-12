import styled from 'styled-components';

import loader from './spinner.gif';

export default function Spinner() {
    return (
        <Container>
            <Img src={loader} alt="loader" />
        </Container>
    );
}

const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100vh;
`;

const Img = styled.img`
    width: 40px;
    height: 40px;
`;
