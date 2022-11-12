/**
 *
 * @param {number or null} partyId
 * @returns {string} - border style
 */

const borderColor = (partyId = null) => {
  let border = '2px solid ';
  switch (partyId) {
    case 2:
      border += 'rgb(26, 92, 198)';
      return border;
    case 4:
      border += 'rgb(238, 129, 143)';
      return border;
    case 106:
      border += 'rgb(23, 144, 70)';
      return border;
    case 108:
      border += 'rgb(84, 147, 206)';
      return border;
    case 3:
      border += 'rgb(227, 1, 1)';
      return border;
    case 122:
      border += 'rgb(195, 52, 29)';
      return border;
    default:
      border += '#dae0e5';
      return border;
  }
};

export { borderColor };
