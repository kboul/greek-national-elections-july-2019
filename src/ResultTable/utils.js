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

export default getPrefectureName;
