var input = document.getElementById("searchTerm");
// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("myButton").click();
    }
});
function searchFields (){

    let searchVal = inputss.value.replace(' ', '+');
    let linkquery = encodeURI(searchVal)

//  define links
	let wineSearcherLink = `https://www.wine-searcher.com/find/${linkquery}/-/usa/-/ndp`;
	let wineSpectatorLink = `https://www.winespectator.com/wine/search?submitted=Y&scope=ratings&winery=${linkquery}`;
    let wineAdvocateLink = `https://www.robertparker.com/search/wines?q=${linkquery}`;
    let jamesSucklingLink = `https://www.jamessuckling.com/?s=${linkquery}&content_all=All&contents%5B0%5D=Tasting+Reports&contents%5B1%5D=Tasting+Notes&contents%5B2%5D=Videos&contents%5B3%5D=Events&SelectedContents=Tasting%20Notes`;
    let wineEnthusiastLink = `https://www.winemag.com/?s=${linkquery}&search_type=all`;
	let vinousLink = `https://vinous.com/wines?term=${linkquery}&sort=vintage&sortDirection=true&page=1&per_page=25&displayType=reviews`;
    let decanterLink = `https://www.decanter.com/wine-reviews/search?query=${linkquery}`;
    let jebDunnuckLink = `https://jebdunnuck.com/wines/?keyword=${linkquery}`;
    let falstaffLink = `https://www.falstaff.com/wine/tastings-scores/#${linkquery};default;entity:wine`;
	let guiaPeninLink = `https://guiapenin.wine/guide/wines/en?winename=${linkquery}&vino=1`
    let lucaMaroniLink = `http://www.lucamaroni.com/index.php/en/best-tastings/tastings/en/luca-maroni-eng`;
    let vivinoLink = `https://www.vivino.com/search/wines?q=${linkquery}`;
   	let wineComLink = `https://www.wine.com/search/${linkquery}/0`;
	let totalWineLink = `https://www.totalwine.com/search/all?text=${linkquery}&pageSize=24&aty=0,0,0,1`;
//  let jancisRobinsonLink = `https://www.jancisrobinson.com/tastings?search-full=%22${linkquery}%22`;

//  define checkboxes
	let wineSearcher = document.getElementById('wineSearcher');
	let wineSpectator = document.getElementById('wineSpectator');
	let wineAdvocate = document.getElementById('wineAdvocate');
	let wineEnthusiast = document.getElementById('wineEnthusiast');
	let jamesSuckling = document.getElementById('jamesSuckling');
	let vinous = document.getElementById('vinous');
	let jebDunnuck = document.getElementById('jebDunnuck');
	let decanter = document.getElementById('decanter');
	let falstaff = document.getElementById('falstaff');
	let guiaPenin = document.getElementById('guiaPenin');
	let lucaMaroni = document.getElementById('lucaMaroni');
	let vivino = document.getElementById('vivino');    
	let wineCom = document.getElementById('wine.com');
	let totalWine = document.getElementById('totalWine');

//if checkbox checked open corresponding link in new tab
if(wineSearcher.checked) {
	window.open(wineSearcherLink,'_blank');
};

if(wineSpectator.checked) {
	window.open(wineSpectatorLink,'_blank');
};

if(wineAdvocate.checked) {
    window.open(wineAdvocateLink,'_blank');
}

if(wineEnthusiast.checked) {
	window.open(wineEnthusiastLink,'_blank');
}

if(jamesSuckling.checked) {
    window.open(jamesSucklingLink,'_blank');
}

if(vinous.checked) {
	window.open(vinousLink,'_blank');
}

if(jebDunnuck.checked) {
	window.open(jebDunnuckLink,'_blank');
}

if(decanter.checked) {
	window.open(decanterLink,'_blank');
}

if(falstaff.checked) {
	window.open(falstaffLink,'_blank');
}

if(guiaPenin.checked) {
	window.open(guiaPeninLink,'_blank');
}

if(lucaMaroni.checked) {
	window.open(lucaMaroniLink,'_blank');
}

if(vivino.checked) {
	window.open(vivinoLink,'_blank');
}

if(wineCom.checked) {
	window.open(wineComLink,'_blank');
}

if(totalWine.checked) {
	window.open(totalWineLink,'_blank');
}

}