import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PartyLogo from '../PartyLogo';
import Spinner from '../Map/Spinner';
import { usePartyResultFetcher } from './hooks';
import { roundDecimals } from '../utils';
import { getPrefectureName, partyName } from './utils';
import styles from './index.module.sass';

const ResultTable = () => {
    const { id } = useParams();
    const [partyResults, loading] = usePartyResultFetcher(id);

    const results =
        partyResults &&
        partyResults.ep.map(({ EP_ID, VOTES, Perc, Rank, Edres }) => (
            <tr className={styles.tr} key={EP_ID}>
                <td>{getPrefectureName(EP_ID)}</td>
                <td>{Rank}</td>
                <td>{`${roundDecimals(Perc)} %`}</td>
                <td>{VOTES}</td>
                <td>{Edres}</td>
            </tr>
        ));

    if (loading)
        return (
            <div className={styles.spinner}>
                <Spinner />
            </div>
        );

    return (
        <div className={styles.container}>
            <div className={styles.partyNameContainer}>
                <PartyLogo partyId={parseInt(id, 10)} useFor="tables" />
                <span className={styles.partyName}>
                    {partyName(parseInt(id, 10))}
                </span>
                <div className={styles.goBackContainer}>
                    <Link to="/">
                        <button type="button">Go back</button>
                    </Link>
                </div>
            </div>
            <table className={styles.results}>
                <thead>
                    <tr className={styles.tr}>
                        <th>Name</th>
                        <th>Rank</th>
                        <th>Percent</th>
                        <th>Votes</th>
                        <th>Seats</th>
                    </tr>
                </thead>
                <tbody>{results}</tbody>
            </table>
        </div>
    );
};

export default ResultTable;
