const getUrlForCoffeeStores = (latLong, query, limit) => {
    return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;
}

export const fetchCoffeeStores = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: process.env.FOURSQUARE_API_KEY
        }
    };

    const response = await fetch(
        getUrlForCoffeeStores(
            '43.65142350798367%2C-79.38117934164426',
            'coffee',
            6
        ), 
        options
    );

    const data = await response.json();
    // .catch(err => console.error(err));

    return data.results;
}