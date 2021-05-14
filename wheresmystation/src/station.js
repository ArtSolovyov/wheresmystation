import React, {useState} from 'react';
import Api from './apiService';
import Sputnik from './images/earth-sputnik.png';

const Station = () => {

    const [data, setData] = useState({});

    let longitude = 'empty yet';
    let latitude = 'empty yet';
    let latResult = 0;
    let longResult = 0;

    const setPosition = () => {
        
        let latPeak = 90,
            longPeak = 180;

        if (latitude > 0) {
            latResult = 25 + (latitude / latPeak * 50);
        } else {
            latResult = 30 - (Math.abs(latitude) / latPeak * 50);
        }

        if (longitude > 0) {
            longResult = 45 + (longitude / longPeak * 50);
        } else {
            longResult = 45 - (Math.abs(longitude) / longPeak * 50);
        }
        
        latResult = latResult.toFixed(2);
        longResult = longResult.toFixed(2);

        console.log(`широта: ${latResult}, долгота: ${longResult}`);
    }

    if (!data.iss_position) {
        Api.getStationLocation()
        .then(src => setData(src))
    }

    if (data.iss_position) {
        longitude = + data.iss_position.longitude;
        latitude = + data.iss_position.latitude;
        setPosition()
    }

    console.log(latitude, longitude);

        return (
            <div className="station">
                <img src={Sputnik} className="stationIcon" alt='' style={{
                    height: "64px",
                    width: "64px",
                    position: "absolute",
                    bottom: `${latResult}%`,
                    left: `${longResult}%`,
                    }}></img>
            </div>
        )    
}

export default Station;