// attach a click handler to the search link
var btn = document.querySelector('#js-search-link');
btn.addEventListener('click', function(event) {

    // don't navigate to that page. Stay put.
    event.preventDefault();

    // make search magic happen instead...

    // get the data
    const searchIndex;
    fetch('/search.json').then(function(response) {
        return response.json();
    }).then(function(response) {
        searchIndex = response.search;
    });

    // look for matches in each item in the JSON
    var results = [];
    for(var item in searchIndex ) {
        var found = searchIndex[item].text.indexOf(searchString);
        if(found != -1 ) {
            results.push(searchIndex[item])
        }
    }

    // now display the items in our results array...

}, false);
