const got = require('got');

class GitHubApi {

  fetchRepositoryData(repo, callback) {
    got(`https://api.github.com/repos/${repo}`)
      .then((response) => JSON.parse(response.body))
      .then(callback);
  }

}

const api = new GitHubApi();

api.fetchRepositoryData('amfibiya17/first_week_js', (repositoryData) => {
  console.log(repositoryData);
});

module.exports = GitHubApi;
