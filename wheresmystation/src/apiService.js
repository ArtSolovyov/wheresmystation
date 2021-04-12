async function getStationLocation() {
    const response = await fetch('http://api.open-notify.org/iss-now.json');
    const source = await response.json();
    return source;
}

export default getStationLocation;