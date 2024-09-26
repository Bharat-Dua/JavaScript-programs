//*--- Get the current URL

//? To get the current URL in a web browser using javascript,you can use the window.location object.

function getCurrentUrl() {
  // get the domain
  let domain = window.location.hostname;
  // get the path
  let path = window.location.pathname;
  // get the query string
  let queryString = window.location.search;
  // get the hash
  let hash = window.location.hash;
  // return the current URL
  return `http://${domain}${path}${queryString}${hash}`;
}
getCurrentUrl();
