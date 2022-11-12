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

  const tableBody = results.map(({ EP_ID, VOTES, Perc, Rank, Edres, Name }) => (
    <Styled.Tr key={EP_ID}>
      <Styled.Td>{Name}</Styled.Td>
      <Styled.Td>{Rank}</Styled.Td>
      <Styled.Td>{`${roundDecimals(Perc)} %`}</Styled.Td>
      <Styled.Td>{VOTES.toLocaleString()}</Styled.Td>
      <Styled.Td>{Edres}</Styled.Td>
    </Styled.Tr>
  ));

  if (loading) return <Spinner fullHeight />;

  return (
    <Styled.Container>
      <Styled.PartyNameContainer>
        <PartyLogo partyId={parseInt(id, 10)} use="tables" />
        <Styled.PartyName>{partyName(parseInt(id, 10))}</Styled.PartyName>
        <Styled.GoBackContainer>
          <Link to="/">
            <Styled.Button>Go back</Styled.Button>
          </Link>
        </Styled.GoBackContainer>
      </Styled.PartyNameContainer>
      <Styled.Table>
        <Styled.THead>
          <Styled.Tr>
            <Styled.Th>Name</Styled.Th>
            <Styled.Th>Rank</Styled.Th>
            <Styled.Th>Percent</Styled.Th>
            <Styled.Th>Votes</Styled.Th>
            <Styled.Th>Seats</Styled.Th>
          </Styled.Tr>
        </Styled.THead>
        <Styled.TBody>{tableBody}</Styled.TBody>
      </Styled.Table>
    </Styled.Container>
  );
}
