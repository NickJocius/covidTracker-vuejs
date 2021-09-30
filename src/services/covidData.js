import axios from 'axios';

export default class CovidData {
    getByCountryCode (code) {
       try {
        var options = {
            method: 'GET',
            url: 'https://covid-19-data.p.rapidapi.com/country/code',
            params: {code: code},
            headers: {
              'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
              'x-rapidapi-key': process.env.API_KEY,
            }
          };
          
        return axios.request(options);
       } catch (error) {
           return error;
       }
        
    }

    getDailyByCode(code) {

        const today = new Date();
        const cDay = today.getDate();
        const cMonth = today.getMonth()+1;
        const cYear = today.getFullYear();
        const date = `${cYear}-${cDay}-${cMonth}`
        try {
            var options = {
                method: 'GET',
                url: 'https://covid-19-data.p.rapidapi.com/report/country/code',
                params: {date: date, code: code},
                headers: {
                  'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
                  'x-rapidapi-key': process.env.API_KEY,
                }
              };
              
           return axios.request(options);
            
        } catch (error) {
            return error;
        }
    }

    getDailyTotals() {
        const today = new Date();
        const cDay = today.getDate();
        const cMonth = today.getMonth()+1;
        const cYear = today.getFullYear();
        const date = `${cYear}-${cDay}-${cMonth}`
        try {
            
            var options = {
            method: 'GET',
            url: 'https://covid-19-data.p.rapidapi.com/report/totals',
            params: {date: date},
            headers: {
            'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
            'x-rapidapi-key': process.env.API_KEY,
            }
        };
  
        axios.request(options)
                } catch (error) {
                    console.log(error);
                }
    }

    getLatestTotals() {
        try {
            var options = {
                method: 'GET',
                url: 'https://covid-19-data.p.rapidapi.com/totals',
                headers: {
                  'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
                  'x-rapidapi-key': process.env.API_KEY,
                }
              };
              
            return axios.request(options);
        } catch (error) {
            console.log(error);
        }
    }
}