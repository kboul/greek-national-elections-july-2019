/**
 *
 * @param {number} partyId
 * @returns {string} - party name abbreviation
 */

const partyAbbreviation = partyId => {
  switch (partyId) {
    case 2:
      return 'ND';
    case 4:
      return 'SYRIZA';
    case 106:
      return 'KIN.AL.';
    case 108:
      return 'ELLINIKI LYSI';
    case 41:
      return 'CHRYSI AVGI';
    case 3:
      return 'KKE';
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

/**
 *
 * @param {number} mapY - map y coordinate
 * @returns {number} - tooltip y coordinate on map
 */

const tooltipY = mapY => (mapY > 700 ? mapY - 300 : mapY);

export { partyAbbreviation, tooltipY };
