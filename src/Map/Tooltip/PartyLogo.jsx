import React from 'react';
import PropTypes from 'prop-types';
import { partyLogo, partyLogoWidth } from './utils';

const PartyLogo = ({ partyId }) => {
    return (
        <img
            width={partyLogoWidth(partyId)}
            height="20"
            src={partyLogo(partyId)}
            alt={partyLogo(partyId)}
        />
    );
};

PartyLogo.propTypes = {
    partyId: PropTypes.string.isRequired
};

export default PartyLogo;
