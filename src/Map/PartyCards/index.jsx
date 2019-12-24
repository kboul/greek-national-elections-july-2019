import React from 'react';
import PartyLogo from '../PartyLogo';
import Spinner from '../Spinner';
import useEpik1Fetcher from './hooks';
import { roundDecimals } from '../utils';
import { borderColor } from './utils';
import styles from './index.module.sass';

const PartyCards = () => {
    const [epik1Data, loading] = useEpik1Fetcher();

    const cards = (
        <>
            {epik1Data &&
                epik1Data.party.map(
                    ({ Perc, PARTY_ID, Edres, EdresEpik }, index) => {
                        if (index < 6)
                            return (
                                <div
                                    className={styles.card}
                                    key={PARTY_ID}
                                    style={{
                                        border: borderColor(PARTY_ID)
                                    }}>
                                    <div className={styles.logo}>
                                        <PartyLogo
                                            partyId={PARTY_ID}
                                            forCards
                                        />
                                    </div>
                                    <div className={styles.percentage}>
                                        {roundDecimals(Perc)}
                                    </div>
                                    <div className={styles.seats}>
                                        {Edres + EdresEpik}
                                    </div>
                                </div>
                            );
                        return null;
                    }
                )}
            <div className={styles.card} style={{ border: borderColor(null) }}>
                <div className={styles.other}>Other</div>
                <div className={styles.percentage}>8.08</div>
            </div>
        </>
    );

    const spinner = (
        <div className={styles.spinner}>
            <Spinner />
        </div>
    );

    return (
        <div className={styles.cardContainer}>{loading ? spinner : cards}</div>
    );
};

export default PartyCards;
