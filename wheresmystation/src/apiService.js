const Api = {
    getStationLocation: async function () {
        const response = await fetch('http://api.open-notify.org/iss-now.json');
        const source = await response.json();
        return source;
    },

    getInfo: async function() {
      const response = await fetch('http://api.open-notify.org/astros.json');
      const source = await response.json();
      return source;  
    }
}

export default Api;