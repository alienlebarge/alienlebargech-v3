// attach a click handler to the search link
var btn = document.querySelector('#js-search-link');
btn.addEventListener('click', function(event) {

  // don't navigate to that page. Stay put.
  event.preventDefault();

  // make search magic happen instead...

}, false);
