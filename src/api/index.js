import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
	try {
		const {data: {confirmed, deaths, lastUpdate, recovered}} = await axios.get(url);
		return {confirmed, deaths, lastUpdate, recovered};
	} catch(err) {

	}
}

export const fetchDailyData = async () => {
	try {
		const {data} = await axios.get(`${url}/daily`);
		
		console.log(data);
	} catch (error) {

	}
}