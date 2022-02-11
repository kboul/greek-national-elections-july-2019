import { PartyLogo, Spinner } from '../../../components';
import { useAppContext } from '../../../context';
import useEpsFetcher from './hooks';
import { tooltipY, partyAbbreviation } from './utils';
import { roundDecimals } from '../../../utils';
import styles from './index.module.sass';

export default function Tooltip() {
    const {
        state: { hoveredFeature, x, y, prefectureId }
    } = useAppContext();
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
                                            {partyAbbreviation(PARTY_ID)}
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
        <div className={styles.tooltip} style={{ left: x, top: tooltipY(y) }}>
            <h4>{hoveredFeature.properties.name}</h4>
            {loading ? <Spinner /> : table}
        </div>
    ) : null;
}
