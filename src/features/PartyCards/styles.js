import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const blue = css`
    color: #0a0a0a;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: lightblue;
`;

const Card = styled.div`
    width: 92px;
    height: 130px;
    border-radius: 0.25rem;
    border-width: 2px;
    background-color: #ffffff;
    margin: 10px 0px;
    margin-right: 0.75rem;
    text-align: center;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px 0px;
    }
`;

const OtherContainer = styled.div`
    margin-top: 40px;
    margin-bottom: 30px;
    ${blue};
    font-weight: 600;
    font-family: Arial, Helvetica, sans-serif;
`;

const PartyLogoContainer = styled.div`
    margin-top: 10px;
`;

const PercentageContainer = styled.div`
    font-size: 1.125rem;
    font-weight: 600;
    margin-top: 0.75rem;
    ${blue};
`;

const SeatsContainer = styled.div`
    font-size: 0.875rem;
    margin-top: 0.25rem;
    ${blue};
`;

const SpinnerContainer = styled.div`
    margin-top: 50px;
`;

const LinkWithoutUnderline = styled(Link)`
    text-decoration: none;
`;

export {
    Card,
    Container,
    LinkWithoutUnderline,
    OtherContainer,
    PartyLogoContainer,
    PercentageContainer,
    SeatsContainer,
    SpinnerContainer
};
