/**
 *
 * @param {number} mapY - map y coordinate
 * @returns {number} - tooltip y coordinate on map
 */

export const tooltipY = mapY => (mapY > 700 ? mapY - 300 : mapY);
