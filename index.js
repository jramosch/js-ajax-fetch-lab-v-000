const baseURL = 'https://api.github.com';
const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
const user_repo = 'jramosch/js-ajax-fetch-lab';


function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  fetch(`${baseURL}/repos/${repo}/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(response => response.json())
    .then(json => showResults(json));
}

function showResults(json) {
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`;
}

function createIssue() {
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }
  fetch(`${baseURL}/repos/${user_repo}/issues`, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(response => response.json())
    .then(json => getIssues());
}

function getIssues() {
  fetch(`${baseURL}/repos/${user_repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(response => response.json())
    .then(json => console.log(json));
}
