//initialize unsplash
import { createApi } from "unsplash-js";

// on your node server
const unsplashApi = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
  //...other fetch options
});

const getUrlForCoffeeStores = (latLong, query, limit) => {
    return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;
}

const getListOfCoffeeStorePhotos = async () => {
    const photos = await unsplashApi.search.getPhotos({
        query: "coffee shop",
        perPage: 6,
    });
    const unsplashResults = photos.response.results;
    return unsplashResults.map((result) => result.urls["small"]);
};


export const fetchCoffeeStores = async (latLong = "43.65142350798367%2C-79.38117934164426", limit = 6) => {
    const photos = await getListOfCoffeeStorePhotos();

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY
        }
    };

    const response = await fetch(
        getUrlForCoffeeStores(
            latLong,
            'coffee',
            limit
        ), 
        options
    );

    const data = await response.json();
    // .catch(err => console.error(err));

    return data.results.map((result, idx) => {

        const neighborhood = result.location.neighborhood;
        
        return {
            id: result.fsq_id,
            address: result.location.address,
            name: result.name,
            neighbourhood: neighborhood?.length > 0 ? neighborhood[0] : "",
            imgUrl: photos[idx],
        };
    });
}