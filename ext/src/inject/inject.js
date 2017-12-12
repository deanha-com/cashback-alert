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
}