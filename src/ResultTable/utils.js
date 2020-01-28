import json from '../Map/greece-prefectures.json';

/**
 * @returns Array<{name: string, name_created: string, EP_ID: string}>
 */

const createPrefectureList = () =>
    json.features.map(data => {
        return {
            EP_ID: data.properties.EP_ID,
            name: data.properties.name,
            name_greek: data.properties.name_greek
        };
    });

/**
 *
 * @param {number} id
 * @returns {string} - prefecture name
 */

const getPrefectureName = id =>
    createPrefectureList().map(pref => pref.EP_ID === id && pref.name);

/**
 *
 * @param {number} partyId
 * @returns {string} - party name
 */

const partyName = partyId => {
    switch (partyId) {
        case 2:
            return 'NEA DIMOKRATIA';
        case 4:
            return 'SYNASPISMOS RIZOSPASTIKIS ARISTERAS';
        case 106:
            return 'KINIMA ALLAGIS';
        case 108:
            return 'ELLINIKI LYSI';
        case 41:
            return 'CHRYSI AVGI';
        case 3:
            return 'KOMMOUNISTIKO KOMMA ELLADAS';
        case 122:
            return 'MERA25';
        case 15:
            return 'EN. KENTROON...';
        case 123:
            return 'PLEFSI EL...';
        case 60:
            return 'DIMIOURGIA...';
        default:
            return '';
    }
};

export { getPrefectureName, partyName };
