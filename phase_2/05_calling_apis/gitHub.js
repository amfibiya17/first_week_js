const got = require('got');
const GitHubApi = require('./githubApi');

class GitHub {

  constructor(api) {
    this.api = api;
    this.repoData = {};
  }
  
  fetch(repo) {
    this.api.fetchRepositoryData(repo, (repositoryData) => {
      this.repoData = repositoryData;
    });
  }
  
  getRepoData() {
    return this.repoData;
  }

}

const api = new GitHubApi();
const github = new GitHub(api);

github.fetch('amfibiya17/first_week_js');
github.getRepoData();

module.exports = GitHub;
