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

    let searchVal = input.value.replace(' ', '+');
    let linkquery = encodeURI(searchVal)

//  define links
	let wineSearcherLink = `https://www.wine-searcher.com/find/${linkquery}/-/usa/-/ndp`;
	let wineSpectatorLink = `https://www.winespectator.com/wine/search?submitted=Y&scope=ratings&winery=${linkquery}`;
   	let wineAdvocateLink = `https://www.robertparker.com/search/wines?q=${linkquery}`;
   	let jamesSucklingLink = `https://www.jamessuckling.com/?s=${linkquery}&content_all=All&contents%5B0%5D=Tasting+Reports&contents%5B1%5D=Tasting+Notes&contents%5B2%5D=Videos&contents%5B3%5D=Events&SelectedContents=Tasting%20Notes`;
   	let wineEnthusiastLink = `https://www.winemag.com/?s=${linkquery}&search_type=all`;
	let vinousLink = `https://v1.vinous.com/wines?utf8=%E2%9C%93&search-filter=reviews&query=${linkquery}`;
   	let decanterLink = `https://www.decanter.com/wine-reviews/search?query=${linkquery}`;
   	let jebDunnuckLink = `https://jebdunnuck.com/wines/?keyword=${linkquery}`;
	let wineIndependentLink = `https://thewineindependent.com/tasting-notes/`;
    	let falstaffLink = `https://www.falstaff.com/en/search/wine?searchTerm=${linkquery}`;
	let guiaPeninLink = `https://guiapenin.wine/guide/wines/en?winename=${linkquery}&vino=1`; 
    	let lucaMaroniLink = `http://www.lucamaroni.com/index.php/en/best-tastings/tastings/en/luca-maroni-eng`;
    	let vivinoLink = `https://www.vivino.com/search/wines?q=${linkquery}`;
   	let wineComLink = `https://www.wine.com/search/${linkquery}/0`;
	let totalWineLink = `https://www.totalwine.com/search/all?text=${linkquery}&pageSize=24&aty=0,0,0,1`;
//  let jancisRobinsonLink = `https://www.jancisrobinson.com/tastings?search-full=%22${linkquery}%22`;

//  define checkboxes
	let wineSearcherBox = document.getElementById('wineSearcher');
	let wineSpectatorBox = document.getElementById('wineSpectator');
	let wineAdvocateBox = document.getElementById('wineAdvocate');
	let wineEnthusiastBox = document.getElementById('wineEnthusiast');
	let jamesSucklingBox = document.getElementById('jamesSuckling');
	let vinousBox = document.getElementById('vinous');
	let jebDunnuckBox = document.getElementById('jebDunnuck');
	let decanterBox = document.getElementById('decanter');
	let wineIndependentBox = document.getElementById('wineIndependent');
	let falstaffBox = document.getElementById('falstaff');
	let guiaPeninBox = document.getElementById('guiaPenin');
	let lucaMaroniBox = document.getElementById('lucaMaroni');
	let vivinoBox = document.getElementById('vivino');    
	let wineComBox = document.getElementById('wine.com');
	let totalWineBox = document.getElementById('totalWine');

//if checkbox checked open corresponding link in new tab
if(wineSearcherBox.checked) {
	window.open(wineSearcherLink,'_blank');
};

if(wineSpectatorBox.checked) {
	window.open(wineSpectatorLink,'_blank');
};

if(wineAdvocateBox.checked) {
    window.open(wineAdvocateLink,'_blank');
}

if(wineEnthusiastBox.checked) {
	window.open(wineEnthusiastLink,'_blank');
}

if(jamesSucklingBox.checked) {
    window.open(jamesSucklingLink,'_blank');
}

if(vinousBox.checked) {
	window.open(vinousLink,'_blank');
}

if(jebDunnuckBox.checked) {
	window.open(jebDunnuckLink,'_blank');
}

if(decanterBox.checked) {
	window.open(decanterLink,'_blank');
}
	
if(wineIndependentBox.checked) {
	window.open(wineIndependentLink,'_blank');
}

if(falstaffBox.checked) {
	window.open(falstaffLink,'_blank');
}

if(guiaPeninBox.checked) {
	window.open(guiaPeninLink,'_blank');
}

if(lucaMaroniBox.checked) {
	window.open(lucaMaroniLink,'_blank');
}

if(vivinoBox.checked) {
	window.open(vivinoLink,'_blank');
}

if(wineComBox.checked) {
	window.open(wineComLink,'_blank');
}

if(totalWineBox.checked) {
	window.open(totalWineLink,'_blank');
}

}
