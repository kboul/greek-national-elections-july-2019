import mera25 from './assets/mera25.png';
import syriza from './assets/syriza.png';
import nd from './assets/nd.svg';
import kke from './assets/kke.svg';
import enwsikntrwwn from './assets/enwsikntrwwn.svg';
import pleusi from './assets/pleusi.svg';
import xrysiaugi from './assets/xrysiaugi.png';
import kinal from './assets/kinal.png';
import ellysi from './assets/ellysi.png';
import dimiourgia from './assets/dimiourgia.png';

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
            return 'Syriza';
        case 106:
            return 'KINAL';
        case 108:
            return 'Elliniki Ly...';
        case 41:
            return 'Xrysi Augi';
        case 3:
            return 'KKE';
        case 122:
            return 'Mera25';
        case 15:
            return 'En. Kentrwwn';
        case 123:
            return 'Pleusi Ele...';
        case 60:
            return 'Dimiourgia ...';
        default:
            return '';
    }
};

/**
 *
 * @param {number} partyId
 * @returns {string} - img src
 */

export const partyLogo = partyId => {
    switch (partyId) {
        case 2:
            return nd;
        case 4:
            return syriza;
        case 106:
            return kinal;
        case 108:
            return ellysi;
        case 41:
            return xrysiaugi;
        case 3:
            return kke;
        case 122:
            return mera25;
        case 15:
            return enwsikntrwwn;
        case 123:
            return pleusi;
        case 60:
            return dimiourgia;
        default:
            return null;
    }
};

/**
 *
 * @param {number} partyId
 * @returns {number} - party logo width
 */

export const partyLogoWidth = partyId => {
    switch (partyId) {
        case 2:
            return 32;
        case 4:
            return 24;
        case 106:
            return 20;
        case 108:
            return 32;
        case 41:
            return 19;
        case 3:
            return 23;
        case 122:
            return 32;
        case 15:
            return 20;
        case 123:
            return 16;
        case 60:
            return 32;
        default:
            return null;
    }
};
