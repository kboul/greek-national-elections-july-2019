import React from 'react';
import PropTypes from 'prop-types';
import { partyLogo, partyLogoWidth } from './utils';

const PartyLogo = ({ partyId, forCards }) => {
    return (
        <img
            width={partyLogoWidth(partyId, forCards)}
            height={forCards ? 56 : 20}
            src={partyLogo(partyId)}
            alt={partyLogo(partyId)}
        />
    );
};

PartyLogo.defaultProps = {
    forCards: false
};

PartyLogo.propTypes = {
    partyId: PropTypes.number.isRequired,
    forCards: PropTypes.bool
};

export default PartyLogo;
