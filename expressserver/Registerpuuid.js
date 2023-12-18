const axios = require('axios');
const fs = require('fs');

// TODO: seperate into another file
function getAPIKey(then){
	fs.readFile('apikey.txt', 'utf8', (err, data) => {
		if (err) {
			console.error(err);
			return;
		}
		then(data)
	});
}

getAPIKey((apiKey)=>{
	registerpuuid(apiKey);
})


function registerpuuid(apiKey){
	if (process.argv.length !== 4) {
		throw new Error("You need to put 2 arguments, the first being summoner name and the second being tagline (EUW etc)");
	}

	const args = process.argv;

	const summonername = args[2]
	const tagline = args[3]

	const summonerDirPath = "summoners/"+summonername+"-"+tagline;

	// Create the directory
	fs.mkdir(summonerDirPath, { recursive: true }, (err) => {
		if (err) {
			console.error('Error creating directory:', err);
		} else {
			console.log('Directory created successfully!');
		}
	});

	const apiUrl = 'https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/'+summonername+'/'+tagline+'?api_key='+apiKey;
	const postData = {
		// Your data to be sent in the POST request
	};

	axios.get(apiUrl, postData)
		.then(response => {
			// Save the response to a JSON file
			fs.writeFileSync(summonerDirPath+'/puuid.json', JSON.stringify(response.data));
			console.log('Response saved to: '+summonerDirPath+'/puuid.json');
		})
		.catch(error => {
			console.error('Error making POST request:', error);
		});
}