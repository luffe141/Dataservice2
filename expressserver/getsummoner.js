const axios = require("axios");
const fs = require("fs");

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

	fs.readFile(summonerDirPath+"/puuid.json", 'utf8', (err, data) => {
		if (err) {
			console.error(err);
			return;
		}
		const jsonData = JSON.parse(data)

		getsummoner(apiKey, jsonData, summonerDirPath);
	});
});

function getsummoner (apiKey, jsonData, summonerDirPath) {
	const regionToPlatform = {
		'EUNE': 'eun1',
		'EUW': 'euw1',
	};

	const server = regionToPlatform[jsonData.tagLine.toUpperCase()];

	const apiUrl = 'https://'+server+'.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/'+jsonData.puuid+'?api_key='+apiKey;
	const postData = {
		// Your data to be sent in the POST request
	};

	axios.get(apiUrl, postData).then(response => {
		savesummoner(response, jsonData, summonerDirPath)
	}).catch(error => {
		console.error('Error making POST request:', error);
	});
}

function savesummoner(response, jsonData, summonerDirPath){
	fs.writeFileSync(summonerDirPath+'/summoner.json', JSON.stringify(response.data));
	console.log('Response saved to:'+summonerDirPath+'/summoner.json');
}