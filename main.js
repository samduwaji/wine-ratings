// define a variable for the user input (seach term)
var input = document.getElementById("searchTerm");

// define a variable for the selectAll and clearAll buttons by their id
var selectAll = document.getElementById("selectAll");
var clearAll = document.getElementById("clearAll");

// define a variable for all the checkboxes
var checkboxes = document.querySelectorAll(".checks");

// add a click event listener to the selectAll button
selectAll.addEventListener("click", function() {
    // whent he button is clicked - loop through the checkboxes and set their checked property to true
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = true;
    }
});
// add a click event listener to the clearAll button
clearAll.addEventListener("click", function() {
    // when the button is clicked - loop through the checkboxes and set their checked property to false
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }
});

// Add ability to use "Enter" key to execute search.  Executes a "click" function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
		// Cancel the default action, if needed
        event.preventDefault();
		// Trigger the button element with a click
        document.getElementById("myButton").click();
    }
});

// define the main function, which takes the input, replaces spaces with "+"
function searchFields (){
    let searchVal = input.value.replace(/ /g, '+');
    let linkquery = encodeURI(searchVal);
    
// then creates an list of objects with the name and link of each website
    let websites = [
        {name: 'wineSearcher', link: `https://www.wine-searcher.com/find/${linkquery}/-/usa/-/ndp`},
        {name: 'wineSpectator', link: `https://www.winespectator.com/wine/search?submitted=Y&scope=ratings&winery=${linkquery}`},
        {name: 'wineAdvocate', link: `https://www.robertparker.com/search/wines?q=${linkquery}`},
        {name: 'wineEnthusiast', link: `https://www.wineenthusiast.com/?s=${linkquery}&search_type=ratings`},
        {name: 'jamesSuckling', link: `https://www.jamessuckling.com/?s=${linkquery}&content_all=All&contents%5B0%5D=Tasting+Reports&contents%5B1%5D=Tasting+Notes&contents%5B2%5D=Videos&contents%5B3%5D=Events&SelectedContents=Tasting%20Notes`},
        {name: 'vinous', link: `https://v1.vinous.com/wines?utf8=%E2%9C%93&search-filter=reviews&query=${linkquery}`},
        {name: 'jebDunnuck', link: `https://jebdunnuck.com/wines/?keyword=${linkquery}`},
        {name: 'decanter', link: `https://www.decanter.com/wine-reviews/search?query=${linkquery}`},
        {name: 'wineIndependent', link: `https://thewineindependent.com/tasting-notes/`},
	{name: 'janeAnson', link: `https://janeanson.com/search?search=${linkquery}`},
        {name: 'falstaff', link: `https://www.falstaff.com/en/search/wine?searchTerm=`},
        {name: 'guiaPenin', link: `https://guiapenin.wine/guide/wines/en?winename=${linkquery}&vino=1`}, 
        {name: 'lucaMaroni', link: `http://www.lucamaroni.com/index.php/en/best-tastings/tastings/en/luca-maroni-eng`},
        {name: 'vivino', link: `https://www.vivino.com/search/wines?q=${linkquery}`},
        {name: 'wineCom', link: `https://www.wine.com/search/${linkquery}/0`},
        {name: 'totalWine', link: `https://www.totalwine.com/search/all?text=${linkquery}&pageSize=24&aty=0,0,0,1`}
		// {name: 'jancisRobinson', link: `https://www.jancisrobinson.com/tastings?search-full=%22${linkquery}%22`}
    ];
    
// then loops through the array and opens a new window for each website if the checkbox with the corresponding name is checked
    for (let website of websites) {
        let checkbox = document.getElementById(website.name);
        if (checkbox.checked) {
            window.open(website.link,'_blank');
        }
    }
}
