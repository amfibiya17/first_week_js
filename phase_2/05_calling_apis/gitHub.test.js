const GitHub = require('./gitHub');

describe('GitHub', () => {

  it('gets the repo data fetched by the Api class', () => {
    const mockedApi = {
      fetchRepositoryData: (repo, callback) => callback({
          name: 'amfibiya17/first_week_js',
          description: 'js repo'
        })
    };
    const github = new GitHub(mockedApi);
    
    github.fetch('amfibiya17/first_week_js');
    
    expect(github.getRepoData()).toEqual({
      name: 'amfibiya17/first_week_js',
      description: 'js repo'
    })
  })

});
