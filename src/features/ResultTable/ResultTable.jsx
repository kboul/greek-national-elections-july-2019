import { useParams, Link } from 'react-router-dom';
import orderBy from 'lodash.orderby';

import * as Styled from './styles';
import { PartyLogo, Spinner } from '../../components';
import usePartyResultFetcher from './hooks';
import { roundDecimals } from '../../utils';
import { partyName, createPrefectureList } from './utils';

export default function ResultTable() {
    const { id } = useParams();
    const [partyResults, loading] = usePartyResultFetcher(id);

    let results =
        partyResults &&
        partyResults.ep.map(partyRes => {
            let name = null;
            createPrefectureList().find(pref => {
                if (pref.EP_ID === partyRes.EP_ID) name = pref.name;
                return name;
            });
            return { ...partyRes, Name: name };
        });

    results = orderBy(results, ['Name'], 'asc');

    const tableBody = results.map(
        ({ EP_ID, VOTES, Perc, Rank, Edres, Name }) => (
            <Styled.Tr key={EP_ID}>
                <Styled.Td>{Name}</Styled.Td>
                <Styled.Td>{Rank}</Styled.Td>
                <Styled.Td>{`${roundDecimals(Perc)} %`}</Styled.Td>
                <Styled.Td>{VOTES.toLocaleString()}</Styled.Td>
                <Styled.Td>{Edres}</Styled.Td>
            </Styled.Tr>
        )
    );

    if (loading)
        return (
            <Styled.SpinnerContainer>
                <Spinner />
            </Styled.SpinnerContainer>
        );

    return (
        <Styled.Container>
            <Styled.PartyNameContainer>
                <PartyLogo partyId={parseInt(id, 10)} useFor="tables" />
                <Styled.PartyName>
                    {partyName(parseInt(id, 10))}
                </Styled.PartyName>
                <Styled.GoBackContainer>
                    <Link to="/">
                        <button type="button">Go back</button>
                    </Link>
                </Styled.GoBackContainer>
            </Styled.PartyNameContainer>
            <Styled.Table>
                <thead>
                    <Styled.Tr>
                        <Styled.Th>Name</Styled.Th>
                        <Styled.Th>Rank</Styled.Th>
                        <Styled.Th>Percent</Styled.Th>
                        <Styled.Th>Votes</Styled.Th>
                        <Styled.Th>Seats</Styled.Th>
                    </Styled.Tr>
                </thead>
                <tbody>{tableBody}</tbody>
            </Styled.Table>
        </Styled.Container>
    );
}
