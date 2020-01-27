/**
 *
 * @param {GeoJson} featureCollection
 * @param {Object} epsData
 * @returns {GeoJson} - with winning party id injected
 */

export const updateGeoJson = (featureCollection, epsData) => {
    const { features } = featureCollection;

    features.forEach(feature => {
        epsData.forEach(eps => {
            const newFeature = feature;
            if (feature.properties.EP_ID === -1) {
                // Agio Oros
                newFeature.properties.win_party = 0;
            }
            if (feature.properties.EP_ID === eps.EP_ID) {
                newFeature.properties.win_party = eps.PARTY_ID;
            }
        });
    });
};
