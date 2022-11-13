import client from './client';

const prefix = '/current/dyn/v';

// fetches total party results
const getResultsPerPerfecture = () => client.get('/current/dyn1/v/epik_1.js');

const getPartyPercentages = () => client.get(`${prefix}/eps.js`);

// election results per prefecture
const getTooltipResults = prefectureId =>
  client.get(`${prefix}/ep_${prefectureId}.js`);

const getResultsPerParty = partyId =>
  client.get(`${prefix}/party_${partyId}.js`);

export default {
  getPartyPercentages,
  getResultsPerPerfecture,
  getTooltipResults,
  getResultsPerParty
};
