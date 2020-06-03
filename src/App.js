import React,{Component} from 'react'

import { Cards,Chart,CountryPicker } from "./components";
import styles from './App.module.css'
import { fetchData } from "./api";
import coronaImage from './images/image.png'




export default class App extends Component {

    state ={
        data:{},
        country: ''
    }


    async componentDidMount() {
        // fetchdata is callback function,so it's data is fetched using await
        //fetches global data initially
        const fetchedData= await fetchData();
        this.setState({data : fetchedData});
    }
 
    handleCountryChange =async (country) =>{       
        //fetch the data of that particular country
        const fetchedData= await fetchData(country);
     
        //set state
        this.setState({data : fetchedData,country: country})
    }

    render() {
        //destructuring data obj from state
        const {data,country} =this.state;

        return (
            <div className={styles.container}>
                <div className={styles.box}>
                <img className={styles.image} src={coronaImage} alt={'Covid-19'} />
                </div>
                <Cards data={data}/>               
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}
