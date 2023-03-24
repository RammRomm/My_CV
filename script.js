const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '110a130956msh30968c806233f3dp1d5eb5jsn2a27460d0e94',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/minutely?lat=35.5&lon=-78.5', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));