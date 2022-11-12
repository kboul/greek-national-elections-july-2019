import client from './client';

const prefix = '/current/dyn/v';

const getResultsPerPerfecture = () => client.get('/current/dyn1/v/epik_1.js');

const getPartyPercentages = () => client.get(`${prefix}/eps.js`);

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
