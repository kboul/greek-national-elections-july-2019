import React from 'react';
import PropTypes from 'prop-types';
import { partyLogo, partyLogoWidth } from './utils';

const PartyLogo = ({ partyId, useFor }) => {
    return (
        <img
            width={partyLogoWidth(partyId, useFor)}
            height={useFor === 'cards' || useFor === 'tables' ? 56 : 20}
            src={partyLogo(partyId)}
            alt={partyLogo(partyId)}
        />
    );
};

PartyLogo.defaultProps = {
    useFor: ''
};

PartyLogo.propTypes = {
    partyId: PropTypes.number.isRequired,
    useFor: PropTypes.string
};

export default PartyLogo;
