import { useQuery } from '@tanstack/react-query';

import { Container, Td } from './styles';
import { PartyLogo, Spinner } from '../../../components';
import { useAppContext } from '../../../context';
import { tooltipY, partyAbbreviation } from './utils';
import { roundDecimals } from '../../../utils';
import electionsApi from '../../../api/electionsApi';

export default function Tooltip() {
  const {
    state: { hoveredFeature, x, y, prefectureId }
  } = useAppContext();

  const { data: electionResults, isLoading } = useQuery({
    queryKey: ['electionResults', prefectureId],
    queryFn: () => electionsApi.getTooltipResults(prefectureId),
    enabled: !!prefectureId && prefectureId > -1 // equals to !prefectureId || prefectureId === -1
  });

  const table = (
    <table>
      <tbody>
        {electionResults &&
          electionResults.data.party.map(({ Perc, PARTY_ID, Edres }) => {
            if (Perc >= 1) {
              return (
                <tr key={PARTY_ID}>
                  <Td>
                    <PartyLogo partyId={PARTY_ID} />
                  </Td>
                  <Td>{partyAbbreviation(PARTY_ID)}</Td>
                  <Td>{`${roundDecimals(Perc)} %`}</Td>
                  <td>{Edres > 0 ? Edres : ''}</td>
                </tr>
              );
            }
            return null;
          })}
      </tbody>
    </table>
  );

  return hoveredFeature && hoveredFeature.properties.EP_ID !== -1 ? (
    <Container style={{ left: x, top: tooltipY(y) }}>
      <h4>{hoveredFeature.properties.name}</h4>
      {isLoading ? <Spinner /> : table}
    </Container>
  ) : null;
}
