import React, {useState,useEffect} from 'react'
import { NativeSelect,FormControl} from '@material-ui/core'

import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api'

const CountryPicker =({handleCountryChange}) =>{

    //Simple React Hooks use
    const [fetchedCountries, setFetchedCountries ]=useState([]);
       
        //on CDM
        useEffect(() => {
            const fetchAPI= async () => {
                setFetchedCountries(await fetchCountries());
            }
            fetchAPI();
          //due to2nd parameter,useEffect will change only if setFetchCountries changes  
        }, [setFetchedCountries]);
             
      
    return (
       <FormControl className={styles.formControl}>

           {/* on changing value, event is fired and handleCountryChange gets the value selected which is then passed to app.js */}

           <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
               <option value="">Global</option>
               { fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
          </NativeSelect>


       </FormControl>
    )
}

export default CountryPicker
