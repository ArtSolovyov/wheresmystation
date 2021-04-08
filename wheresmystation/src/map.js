import React, {useState} from  'react';
import world from './images/world.svg';

function Map () {

    const [classes, setClasses] = useState('rolled');

    setTimeout(() => {
        setClasses('open');
    }, 500);

    return(
        <img id="map" src={world} className={classes} alt='worldMap'></img>
    )
}

export default Map;