import * as Styled from './styles';
import { PartyLogo, Spinner } from '../../components';
import useResultsPerPerfecture from './hooks';
import { borderColor } from './utils';
import { roundDecimals } from '../../utils';

export default function PartyCards() {
  const [data, loading] = useResultsPerPerfecture();

  const cards = (
    <>
      {data &&
        data.party.map(({ Perc, PARTY_ID, Edres, EdresEpik }, index) => {
          if (index < 6)
            return (
              <Styled.LinkWithoutUnderline
                key={PARTY_ID}
                to={`parties/${PARTY_ID}`}>
                <Styled.Card
                  style={{
                    border: borderColor(PARTY_ID)
                  }}>
                  <Styled.PartyLogoContainer>
                    <PartyLogo partyId={PARTY_ID} useFor="cards" />
                  </Styled.PartyLogoContainer>
                  <Styled.PercentageContainer>
                    {roundDecimals(Perc)}
                  </Styled.PercentageContainer>
                  <Styled.SeatsContainer>
                    {Edres + EdresEpik}
                  </Styled.SeatsContainer>
                </Styled.Card>
              </Styled.LinkWithoutUnderline>
            );
          return null;
        })}
      <Styled.LinkWithoutUnderline to="/">
        <Styled.Card style={{ border: borderColor() }}>
          <Styled.OtherContainer>Other</Styled.OtherContainer>
          <Styled.PercentageContainer>8.08</Styled.PercentageContainer>
        </Styled.Card>
      </Styled.LinkWithoutUnderline>
    </>
  );

  const spinner = (
    <Styled.SpinnerContainer>
      <Spinner fullHeight />
    </Styled.SpinnerContainer>
  );

  return <Styled.Container>{loading ? spinner : cards}</Styled.Container>;
}
