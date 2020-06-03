import axios from 'axios'

//base url
const url='https://covid19.mathdro.id/api';

export const fetchData = async(country) =>{


     let changeableUrl= url;

      if(country)
      {
          changeableUrl=`${url}/countries/${country}`;
      }

     try {
         //for destructuring data object from response,as we only use it,further destructuring the objects inside data
         const { data: { confirmed,recovered,deaths,lastUpdate }} = await axios.get(changeableUrl);
         
         //confirmed: confirmed, and confirmed work same in js
         const modifiedData ={             
             confirmed,
             recovered,
             deaths,
             lastUpdate,
         }
          return modifiedData;      
     } catch (error) {
         console.log(error)
     }
}

export const fetchDailyData = async() =>{
    try {
        const {data} = await axios.get(`${url}/daily`);    
        //as data is array,we have to loop over it
        
        const modifiedData =data.map((dailyData) =>({
            confirmed: dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date: dailyData.reportDate
        }));

        return modifiedData;        
    } catch (error) {
        console.log(error)
    }
}



export const fetchCountries = async() =>{
    try {
       const {data: { countries }} = await axios.get(`${url}/countries`)      

       //as we are only intereseted in name attribute,and countries is an array so we use map
       return countries.map((country) => country.name)
    } catch (error) {
        console.log(error)
    }
}