import styled from 'styled-components';

import loader from './spinner.gif';

export default function Spinner() {
    return <Img src={loader} alt="loader" />;
}

const Img = styled.img`
    width: 40px;
    height: 40px;
    position: absolute;
`;
