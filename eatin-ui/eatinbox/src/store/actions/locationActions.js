export const SET_LOCATION = 'SET_LOCATION'
import Geolocation from 'react-native-geolocation-service'
import {PermissionsAndroid, BackHandler} from 'react-native'

import * as urls from '../../../apiUrl'

export const setLocation = (region) => ({
    type: SET_LOCATION,
    region,
})

export const requestLocationPermission = () => async  dispatch => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        dispatch(getLocation())
        console.log('You can use the GPS');
      } else {
        BackHandler.exitApp()
        console.log('GPS permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

export const getLocation = () => dispatch => {
    Geolocation.getCurrentPosition((position) => {
            const region = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                name: 'Current Location'
            }
            
            dispatch(setLocation(region))
            // postLocation(region)
        },
        (error) => {
            // See error code charts below.
            BackHandler.exitApp()
            console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
}

export const postLocation = async (region) => {
    const url = urls.address + 'users/pastorders/'

    try {
        let response = await axios.post(
            url, 
            region, 
            {headers: { 'content-type': 'application/json'}}
        )

        if(response)
            console.log(response)
    }

    catch(err) {
        console.log("This is error", err.response)
    }      
};

