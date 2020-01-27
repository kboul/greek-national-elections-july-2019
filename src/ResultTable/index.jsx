import React from 'react';
import { useParams } from 'react-router-dom';
import PartyLogo from '../Map/PartyLogo';
import Spinner from '../Map/Spinner';
import { usePartyResultFetcher } from './hooks';
import { roundDecimals, partyName } from '../utils';
import styles from './index.module.sass';
import getPrefectureName from './utils';

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
            <div className={styles.partyName}>
                <PartyLogo partyId={parseInt(id, 10)} forCards />
                {partyName(parseInt(id, 10))}
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
