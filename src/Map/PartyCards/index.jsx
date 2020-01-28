import React from 'react';
import { Link } from 'react-router-dom';
import PartyLogo from '../../PartyLogo';
import Spinner from '../Spinner';
import useEpik1Fetcher from './hooks';
import { borderColor } from './utils';
import { roundDecimals } from '../../utils';
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
                                <Link
                                    key={PARTY_ID}
                                    className={styles.link}
                                    to={`parties/${PARTY_ID}`}>
                                    <div
                                        className={styles.card}
                                        style={{
                                            border: borderColor(PARTY_ID)
                                        }}>
                                        <div className={styles.logo}>
                                            <PartyLogo
                                                partyId={PARTY_ID}
                                                useFor="cards"
                                            />
                                        </div>
                                        <div className={styles.percentage}>
                                            {roundDecimals(Perc)}
                                        </div>
                                        <div className={styles.seats}>
                                            {Edres + EdresEpik}
                                        </div>
                                    </div>
                                </Link>
                            );
                        return null;
                    }
                )}
            <Link className={styles.link} to="/">
                <div className={styles.card} style={{ border: borderColor() }}>
                    <div className={styles.other}>Other</div>
                    <div className={styles.percentage}>8.08</div>
                </div>
            </Link>
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
