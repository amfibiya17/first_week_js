const GitHubApi = require('./githubApi');

describe('GitHubApi', () => {

  describe('fetchRepositoryData', () => {
    it('fetches repository data from Github/s API', (done) => {
      const api = new GitHubApi();
      api.fetchRepositoryData('amfibiya17/first_week_js', (repositoryData) => {
        expect(repositoryData.id).toBe(495368921)
        done();
      })
    })
  });

});
