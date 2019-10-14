chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

	}
	}, 10);
});

/******************************************************************************* 
 * Lets check the window address and see if we can SAVE MONEY
 ******************************************************************************/
var cashbackSites = [
	"deanha.com",
	"two-one.co",
	"quidco.com",
	"www.quidco.com",
	"topcashback.co.uk",
	"www.topcashback.co.uk",
	"argos.co.uk",
	"www.argos.co.uk",
];

if (cashbackSites.indexOf(window.location.hostname) > -1) {
	console.warn(window.location.hostname + " ----> Lets save some money");
	// alert(window.location.hostname + " ----> Lets save some money");
}

(function goCHECK() {
var checkURL = ["web-platform", "web-plattform", "piattaforma-web", "plataforma-web", "-old"];
var msg = "This page contains old URL - Please look at all element marked in RED! <br/>"+checkURL;
    for (var i = 0; i < checkURL.length; i++) {
		var found = false;
			jQuery("a").each(function() {
			    if(this.href.indexOf(checkURL[i]) > -1) {
		            console.warn(this.href + " >>> "+checkURL[i]);
		            jQuery(this).css({"border":"solid 5px red", "padding":"5px"});
		            found = true;
		        }
			});
		if (found){
			jQuery("body > div.header").before("<div class='alertt'>"+ msg +"</div>")
		}	
    }
}());