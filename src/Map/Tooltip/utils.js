/**
 *
 * @param {number} partyId
 * @returns {string} - party name
 */

export const partyName = partyId => {
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
