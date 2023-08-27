import { useState, createContext, useEffect } from 'react'
import Geocode from "react-geocode";


const LocationContext = createContext()

const LocationProvider = ({children}) => {

    const [city, setCity ] = useState()

    const [latlong, setLatlong] = useState({
        lat: '',
        lng: ''
    })

    useEffect(() => {


        navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        
        
        Geocode.setApiKey("AIzaSyAnyZwuyjsG3Ece1XxgbCT5tT2Q7PSZBfE");
        Geocode.setLanguage("es");
        Geocode.setRegion("ar");
        Geocode.setLocationType("ROOFTOP");
        Geocode.enableDebug();
    
        Geocode.fromLatLng( position.coords.latitude, position.coords.longitude).then(
          (response) => {
            const address = response.results[0].formatted_address;
            let city_geo, state, country;
            for (let i = 0; i < response.results[0].address_components.length; i++) {
              for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
                switch (response.results[0].address_components[i].types[j]) {
                  case "locality":
                    city_geo = response.results[0].address_components[i].long_name;
                    break;
                  case "administrative_area_level_1":
                    state = response.results[0].address_components[i].long_name;
                    break;
                  case "country":
                    country = response.results[0].address_components[i].long_name;
                    break;
                }
              }
            }
            console.log(city_geo);
            
            setLatlong(
                {lat: position.coords.latitude,
                    lng: position.coords.longitude} )
            setCity(city_geo)
    
          },
          (error) => {
            console.error(error);
          }
        );
    
      })
    },[]);



    return (
        <LocationContext.Provider value={{ city, latlong }}>
            {children}
        </LocationContext.Provider>
    )
}

export { LocationProvider }

export default LocationContext