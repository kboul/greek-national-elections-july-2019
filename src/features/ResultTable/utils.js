import { greekPrefectures } from '../../geoJson';

/**
 * @returns {Array<{name: string, name_created: string, EP_ID: string}>}
 */

const createPrefectureList = () => {
  return greekPrefectures.features.map(data => ({
    EP_ID: data.properties.EP_ID,
    name: data.properties.name,
    name_greek: data.properties.name_greek
  }));
};

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

export { createPrefectureList, partyName };
