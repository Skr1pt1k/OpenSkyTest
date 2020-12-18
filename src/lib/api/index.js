import requestManager from './requestManager';
import openSkyRequestManager from './openSkyRequestManager';

export default {
  Session: {
    create: params => requestManager.post('/auth', params),
    delete: () => requestManager.delete('/auth'),
    restore: () => requestManager.get('/auth')
  },
  Flights: {
    fetch: () => openSkyRequestManager.get('/states/all'),
  },
};
