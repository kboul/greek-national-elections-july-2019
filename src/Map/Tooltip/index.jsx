import React, { useContext } from 'react';
import { Context } from '../../context';
import useResultFetcher from './useResultsFetcher';
import styles from './index.module.sass';

const Tooltip = () => {
    const { hoveredFeature, x, y, prefectureId } = useContext(Context);
    const [electionResults, loading] = useResultFetcher(prefectureId);

    const table = (
        <table>
            <tbody>
                {electionResults &&
                    electionResults.data.party.map(
                        ({ Perc, PARTY_ID, Edres }, index) => {
                            if (index < 8) {
                                return (
                                    <tr key={PARTY_ID}>
                                        <td>party logo</td>
                                        <td>party name</td>
                                        <td>
                                            {`${Math.round(Perc * 100) /
                                                100} %`}
                                        </td>
                                        <td>{Edres > 0 ? Edres : ''}</td>
                                    </tr>
                                );
                            }
                            return null;
                        }
                    )}
            </tbody>
        </table>
    );

    return hoveredFeature ? (
        <div className={styles.tooltip} style={{ left: x, top: y }}>
            <h4>{hoveredFeature.properties.name}</h4>
            {loading ? 'Loading...' : table}
        </div>
    ) : null;
};

export default Tooltip;
