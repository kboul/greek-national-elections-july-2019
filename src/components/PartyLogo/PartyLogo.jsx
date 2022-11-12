import PropTypes from 'prop-types';

import { partyLogo, partyLogoWidth } from './utils';

export default function PartyLogo({ partyId, use = '' }) {
  return (
    <img
      width={partyLogoWidth(partyId, use)}
      height={use === 'cards' || use === 'tables' ? 56 : 20}
      src={partyLogo(partyId)}
      alt={partyLogo(partyId)}
    />
  );
}

PartyLogo.propTypes = {
  partyId: PropTypes.number.isRequired,
  use: PropTypes.string
};
