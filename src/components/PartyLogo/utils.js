import mera25 from './assets/mera25.png';
import syriza from './assets/syriza.png';
import nd from './assets/nd.svg';
import kke from './assets/kke.svg';
import enwsikntrwwn from './assets/enwsikntrwwn.svg';
import pleusi from './assets/pleusi.svg';
import xrysiaugi from './assets/xrysiaugi.png';
import kinal from './assets/kinal.png';
import ellysi from './assets/ellysi.jpg';
import dimiourgia from './assets/dimiourgia.png';

/**
 *
 * @param {number} partyId
 * @returns {string} - img src
 */

const partyLogo = partyId => {
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

const partyLogoWidth = (partyId, useFor) => {
  const forCards = useFor === 'cards';
  const forTables = useFor === 'tables';
  switch (partyId) {
    case 2:
      if (forCards) return 68;
      if (forTables) return 64;
      return 32;
    case 4:
      if (forCards) return 68;
      if (forTables) return 64;
      return 24;
    case 106:
      if (forCards || forTables) return 56;
      return 20;
    case 108:
      if (forCards) return 68;
      if (forTables) return 64;
      return 32;
    case 41:
      return 19;
    case 3:
      if (forCards) return 65.5;
      if (forTables) return 64;
      return 23;
    case 122:
      if (forCards) return 68;
      if (forTables) return 64;
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

export { partyLogo, partyLogoWidth };
