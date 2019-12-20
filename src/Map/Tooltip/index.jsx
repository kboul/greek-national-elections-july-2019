import React, { useContext } from 'react';
import { Context } from '../../context';
import PartyLogo from '../PartyLogo';
import useEpsFetcher from './hooks';
import { partyName } from './utils';
import { roundDecimals } from '../utils';
import styles from './index.module.sass';

const Tooltip = () => {
    const { hoveredFeature, x, y, prefectureId } = useContext(Context);
    const [electionResults, loading] = useEpsFetcher(prefectureId);

    const table = (
        <table>
            <tbody>
                {electionResults &&
                    electionResults.data.party.map(
                        ({ Perc, PARTY_ID, Edres }) => {
                            if (Perc >= 1) {
                                return (
                                    <tr key={PARTY_ID}>
                                        <td className={styles.tdRightPadding}>
                                            <PartyLogo partyId={PARTY_ID} />
                                        </td>
                                        <td className={styles.tdRightPadding}>
                                            {partyName(PARTY_ID)}
                                        </td>
                                        <td className={styles.tdRightPadding}>
                                            {`${roundDecimals(Perc)} %`}
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

    return hoveredFeature && hoveredFeature.properties.EP_ID !== -1 ? (
        <div className={styles.tooltip} style={{ left: x, top: y }}>
            <h4>{hoveredFeature.properties.name}</h4>
            {loading ? 'Loading...' : table}
        </div>
    ) : null;
};

export default Tooltip;
