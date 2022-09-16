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

    // Get the input field
    
    console.log(searchVal)

    // let link1query = searchVal.replace(' ', '+')
    	let linkquery = encodeURI(searchVal)
    
	let link0 = `https://www.wine-searcher.com/find/${linkquery}/-/usa/-/ndp`;
	let link1 = `https://www.winespectator.com/search?q=${linkquery}&wineratings=y&sortBy=most-relevant&scope=site`;
    	let link2 = `https://www.robertparker.com/search/wines?q=${linkquery}`;
    	let link3 = `https://www.jamessuckling.com/?s=${linkquery}&content_all=All&contents%5B0%5D=Tasting+Reports&contents%5B1%5D=Tasting+Notes&contents%5B2%5D=Videos&contents%5B3%5D=Events&SelectedContents=Tasting%20Notes`;
    	let link4 = `https://www.winemag.com/?s=${linkquery}&search_type=all`;
	let link5 = `https://v1.vinous.com/wines?query=${linkquery}&search-filter=reviews&sort%5Bdirection%5D=desc&sort%5Bname%5D=review+date&utf8=%E2%9C%93&wf_dirty=false&wf_export_fields=&wf_export_format=&wf_id=&wf_match=all&wf_model=Wine&wf_name=&wf_order=vintage&wf_order_type=desc&wf_page=1&wf_per_page=25&wf_submitted=true&wf_type=WillFilter%3A%3AFilter&wine_filter%5Bauthor%5D=&wine_filter%5Bcolor%5D=&wine_filter%5Bcountry%5D=&wine_filter%5Bregion_1%5D=&wine_filter%5Bregion_2%5D=`;
    	let link6 = `https://www.decanter.com/wine-reviews/search?query=${linkquery}`;
    	let link8 = `https://jebdunnuck.com/wines/?keyword=${linkquery}`;
    	let link9 = `https://www.falstaff.com/wine/tastings-scores/#${linkquery};default;entity:wine`;
    	let link10 = `http://www.lucamaroni.com/index.php/en/best-tastings/tastings/en/luca-maroni-eng`;
    	let link11 = `https://www.vivino.com/search/wines?q=${linkquery}`;
   	let link12 = `https://www.wine.com/search/${linkquery}/0`;
	let link13 = `https://www.totalwine.com/search/all?text=${linkquery}&pageSize=24&aty=0,0,0,1`;
	let link14 = `https://guiapenin.wine/guide/wines/en?winename=${linkquery}&vino=1`

// browser.tabs.create()

	window.open(link0,'_blank')
	window.open(link1,'_blank')
    	window.open(link2,'_blank')
    	window.open(link3,'_blank')
    	window.open(link4,'_blank')
    	window.open(link5,'_blank')
    	window.open(link6,'_blank')
	window.open(link8,'_blank')
	window.open(link9,'_blank')
	window.open(link7,'_blank')
	window.open(link11,'_blank')
	window.open(link12,'_blank')
	window.open(link13,'_blank')
	window.open(link10,'_blank')
	window.open(link14,'_blank')
}
