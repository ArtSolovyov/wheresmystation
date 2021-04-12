import React, {useState} from 'react';
import getStationLocation from './apiService';
import Sputnik from './images/earth-sputnik.png';

const Station = ({isModalOpen}) => {

    let style = {}

    

    const [data, setData] = useState({});

    let longitude = 'empty yet';
    let latitude = 'empty yet';
    let latResult = 0;
    let longResult = 0;

    const setPosition = () => {
        
        let latPeak = 90,
            longPeak = 180;

        if (latitude > 0) {
            latResult = 30 + (latitude / latPeak * 50);
        } else {
            latResult = 30 - (Math.abs(latitude) / latPeak * 50);
        }

        if (longitude > 0) {
            longResult = 50 + (longitude / longPeak * 50);
        } else {
            longResult = 50 - (Math.abs(longitude) / longPeak * 50);
        }
        
        latResult = latResult.toFixed(2);
        longResult = longResult.toFixed(2);

        console.log(`широта: ${latResult}, долгота: ${longResult}`);
    }
        
    if (!data.iss_position) {
        getStationLocation()
        .then(src => setData(src))
    }

    if (data.iss_position) {
        longitude = + data.iss_position.longitude;
        latitude = + data.iss_position.latitude;
        setPosition()
    }

    console.log(latitude, longitude);

    if (!isModalOpen) {
        return (
            <div classList="station">
                <img src={Sputnik} style={{
                    height: "64px",
                    width: "64px",
                    position: "absolute",
                    bottom: `${latResult}%`,
                    left: `${longResult}%`,
                    }}></img>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }

    
}

export default Station;