// require packages
var request = require('request');
var fs = require("fs");
var Random = require("random-js");
var r = new Random();
var Twit = require('twit')
 var T = new Twit({
    consumer_key:         "..."
  , consumer_secret:      "..."
  , access_token:         "..."
  , access_token_secret:  "..."
})

 T.get('statuses/user_timeline', { screen_name: 'operationbot', count: 20 }, function(err, data, response) {
  parseTweet(data)
})

function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

 function parseTweet(data) {

 	function getText(x){

 		var title = x.text;
 		var tArray = title.split(" ");
 		var operation = tArray[1] + " " + tArray[2]
 		var bigTitle = operation.toUpperCase();
 		var rand = r.integer(2,28);

 		if (tArray[4] === 'returning'){
 			var returnees = tArray[6];
 			var cRet = capitaliseFirstLetter(returnees);
 			console.log("Shorten: Government should have acted faster to #BringBackOur" + cRet);
 			console.log("Crossbenchers question $1B bill to bring " + cRet + " home.");
 		}
 		if (tArray[4] === 'defending'){
 			console.log("Shorten quick to pledge support for " + bigTitle + " program.");
 			console.log("ALP backs " + bigTitle + " despite sketchy details.");
 			console.log("Ludlum seeks answers on " + bigTitle + " in Senate Estimates.");
 			console.log(bigTitle + " crucial to nation's defence: Paine.");
 		}
 		if (tArray[4] === 'protecting'){
 			var prot = tArray[7];
 			var cProt = capitaliseFirstLetter(prot);
 			console.log(cProt + " threat overblown: DiNatale.");
 			console.log("Spokesman calls " + bigTitle + " 'grossly offensive to law-abiding " + cProt + "'.");
 			console.log("Bandt mocks " + bigTitle + " 'farce', calls for Dutton to resign.");
 			console.log("Shorten calls for 'balance' but supports Government action against " + cProt + ".");
 			console.log("Lambie calls for " + cProt + " to 'love Australia or leave' in YouTube video.");
 		}
 		else {
 			var mods = tArray[6];
 			console.log("Dutton flags new immigration laws as " + rand + " caught in "+ bigTitle + " roundup.");
 			console.log(bigTitle + " successful so far but we must not be complacent about " + mods +": Paul Sheehan.");
 			console.log("Bernardi calls on moderate " + mods + " to do more as " + rand +  " arrested in " + bigTitle + " raids.")
 		}
 	}

 	data.forEach(getText)
 }